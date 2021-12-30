<template>
  <div class="wrapper">
    <Header v-if="$route.name !== 'admin'" />
    <Navbar v-if="$route.name !== 'admin'" />
    <MainContent />
  </div>
</template>
<script>
import Header from "./includes/Header";
import Navbar from "./includes/Navbar/index";
import MainContent from "./includes/Contents/index";
export default {
  components: { Header, Navbar, MainContent },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
</style>

