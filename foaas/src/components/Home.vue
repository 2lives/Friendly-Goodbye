<template>
  <div class="text-xs-center">
    <v-menu>
      <v-btn class="home-button" round slot="activator" dark>What shall we hit em' with?</v-btn>
      <v-list>
        <v-list-tile v-for="(json, index) in json" :key="index">
          <a @click="change_msg(json); load_fields(json); prep_url(json);">
            <v-list-tile-title>{{ json.content }}</v-list-tile-title>
          </a>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-card class="show-card">
      <p class="card-text">{{append_msg == "Select your weapon above" ? "Step 1:" : ""}}</p>
      <div v-html="append_msg" class="card-text"></div>
    </v-card>
    <p
      class="card-text"
    >{{append_msg == "Select your weapon above" ? "" : "Step 2: Prepare your roast"}}</p>
    <v-form @submit.prevent="handleSubmit();" ref="form" v-model="valid" lazy-validation>
      <TextField v-for="(field, index) in fields" :key="index" :name="field.name"/>
      <v-btn type="submit" :disabled="disabled()">Submit</v-btn>
    </v-form>
    <div id="link">
      <p class="card-text">Step 3: Send this juicy link to your victim</p>
      <a v-html="formatted_url" class="card-text"></a>
    </div>
  </div>
</template>
<script>
import TextField from "./TextField.vue";
export default {
  props: ["json"],
  components: {
    TextField
  },
  data() {
    return {
      fields: [],
      append_msg: "Select your weapon above",
      url: "",
      formatted_url: ""
    };
  },
  methods: {
    change_msg(json) {
      this.append_msg = json.content;
    },
    load_fields(json) {
      this.fields = json.fields;
    },
    prep_url(json) {
      this.url = "http://www.foaas.com" + json.url;
    },
    format_url() {
      this.formatted_url = this.url.replace(
        ":from",
        this.$store.getters.returnFormData[0].toString()
      );
      this.formatted_url = this.formatted_url.replace(
        ":name",
        this.$store.getters.returnFormData[1].toString()
      );
      this.formatted_url = this.formatted_url.replace(
        ":company",
        this.$store.getters.returnFormData[2].toString()
      );
      this.formatted_url = this.formatted_url.replace(
        ":tool",
        this.$store.getters.returnFormData[3].toString()
      );
    },
    disabled() {
      if (this.append_msg == "Select your weapon above") {
        return true;
      } else {
        return false;
      }
    },
    handleSubmit() {
      this.$store.commit({
        type: "pushData"
      });
      this.format_url();
      document.getElementById("link").style.display = "block";
      this.$store.commit({
        type: "resetState"
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/_master.scss";
.home-button {
  background-color: darkslateblue !important;
  font-family: $secondaryfont;
}
.v-menu__content {
  left: 20px !important;
}
.v-card {
  height: 200px;
}

.show-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card-text {
  font-family: $secondaryfont;
  font-size: 24px;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.v-label {
  color: darkslateblue !important;
}
#link {
  display: none;
}
</style>