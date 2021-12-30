<template>
  <nav class="mt-2">
    <ul
      class="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <li class="nav-item">
        <router-link
          :to="{ name: 'dashboard' }"
          class="nav-link"
          :class="$route.name === 'dashboard' ? 'active bg-secondary' : ''"
        >
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>Dashboard</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'home' }"
          class="nav-link"
          :class="
            $route.name === 'home' || 'homeEdit' || 'homeAdd'
              ? 'active bg-secondary'
              : ''
          "
        >
          <i class="fas fa-igloo"></i>
          <p>Home</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
