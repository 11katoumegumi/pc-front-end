<template>
  <div>
    <Header />
    <router-view />
    <Footer v-if="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "./components/Header";

import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
