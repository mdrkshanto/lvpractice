<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <Brand />
    <div class="sidebar">
      <UserLogo />
      <Search />
      <MainMenu />
    </div>
  </aside>
</template>
<script>
import Brand from "./includes/Brand";
import UserLogo from "./includes/UserLogo";
import Search from "./includes/Search";
import MainMenu from "./includes/MainMenu";
export default {
  components: { Brand, UserLogo, Search, MainMenu },
};
</script>
