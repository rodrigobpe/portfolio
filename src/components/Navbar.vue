<script setup>
import links from '../utils/links';

</script>
<template>
  <header class="nav-container">
    <span class="nav-logo"><strong>ROD</strong>zin</span>
    <font-awesome-icon class="nav-icon" icon="fa-solid fa-bars" />
    <ul class="nav-items">
      <li class="nav-item" v-for="link in links" :key="link.path">
        <a :href="link.id">{{ link.path }}</a>
      </li>
    </ul>
  </header>
</template>
<style>
.nav-container {
  border-bottom: 0.3rem solid var(--color-positive);
  font-size: 1.8rem;
  display: flex;
  background-color: var(--color-negative);
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.nav-logo {
  color: var(--color-positive);
}

.nav-logo strong {
  color: var(--color-peach);
  font-weight: bold;
}

.nav-icon {
  display: none;
  color: var(--color-positive);
  cursor: pointer;
}

.nav-items {
  text-transform: uppercase;
  display: flex;
}

.nav-item a {
  color: var(--color-positive);
  text-decoration: none;
}

.nav-item {
  display: flex;
  cursor: pointer;
  margin-right: 2.2rem;
  align-items: center;
  justify-content: center;
}

.nav-item a:hover {
  color: var(--color-peach);
}

.nav-item::before {
  margin: 0 1rem;
  display: block;
  content: "";
  width: 0.7rem;
  height: 0.7rem;
  background-color: var(--color-positive);
}

.nav-item:hover::before {
  background-color: var(--color-peach);
}

@media (max-width: 600px) {
  .nav-items,
  .nav-item {
    display: none;
  }
  .nav-icon {
    display: flex;
  }
}
</style>