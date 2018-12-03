<template>
  <v-text-field :label="name" v-model="fieldinput" @input="change_detected"></v-text-field>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      fieldinput: ""
    };
  },
  methods: {
    change_detected() {
      if (this.name == "From") {
        this.$store.commit({
          type: "addFromInput",
          fieldname: this.name,
          fieldvalue: this.fieldinput
        });
      } else if (this.name == "Name") {
        this.$store.commit({
          type: "addNameInput",
          fieldname: this.name,
          fieldvalue: this.fieldinput
        });
      } else {
        this.$store.commit({
          type: "addCompanyInput",
          fieldname: this.name,
          fieldvalue: this.fieldinput
        });
      }
    }
  }
};
</script>
<style lang="scss">
.v-input {
  width: 50vw;
}
</style>