<template>
  <Home :json="jsonProp"/>
</template>

<script>
import Home from "@/components/Home.vue";
const jsonProp = require("../assets/fucks.json");

export default {
  components: {
    Home
  },
  data() {
    return {
      jsonProp
    };
  }
};
</script>
