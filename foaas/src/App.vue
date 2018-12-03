<template>
  <v-app>
    <v-toolbar app dark>A friendly goodbye</v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "/assets/_master.scss";
nav {
  font-family: $mainfont;
  font-size: 34px;
  display: flex;
  justify-content: center;
  text-transform: Capitalize;
}
.v-toolbar__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
