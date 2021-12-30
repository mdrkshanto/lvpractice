<template>
  <div class="container-fluid m-0 p-0">
    <Header v-if="$route.name !== 'any'" />
    <Navbar v-if="$route.name !== 'any'" />
    <router-view />
    <Footer v-if="$route.name !== 'any'" />
  </div>
</template>
<script>
import Header from "./includes/Header";
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
export default {
  components: { Header, Navbar, Footer },
};
</script>

<style>
.text-justify {
  text-align: justify;
}

::placeholder {
  text-transform: capitalize;
}
</style>
