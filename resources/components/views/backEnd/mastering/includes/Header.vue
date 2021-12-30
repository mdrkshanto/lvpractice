<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="btn btn-sm nav-link" data-widget="pushmenu">
          <i class="fas fa-bars"></i>
        </button>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link
          :to="{ name: 'dashboard' }"
          class="nav-link"
          :class="$route.name === 'dashboard' ? 'active' : ''"
          >Home</router-link
        >
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <button type="button" class="btn nav-item nav-link">Logout</button>
    </ul>
  </nav>
</template>
