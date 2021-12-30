<template>
  <div :class="$route.name !== 'admin'?'content-wrapper':''">
    <Header v-if="$route.name !== 'admin'" />
    <section class="content">
      <router-view />
    </section>
  </div>
</template>
<script>
import Header from "./includes/Header";
export default {
  components: { Header },
};
</script>
