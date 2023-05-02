<script setup>
import L from '../utils/links';
import cv from '/CV_rodrigoBatistaPereira.pdf'

</script>
<template>
  <header class="nav-container">
    <span class="nav-logo"><strong>ROD</strong>zin</span>
    <font-awesome-icon class="nav-icon" icon="fa-solid fa-bars" />
    <ul class="nav-items">
      <li class="nav-item" v-for="link in L.links" :key="link.path">
        <a :href="link.id">{{ link.path }}</a>
      </li>
      <a :href="cv" class="nav-btn-cv">Baixar CV</a>
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
  font-size: 3.6rem;
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
  transition: all 0.2s linear;
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

.nav-btn-cv{
  text-decoration: none;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  color: var(--color-negative);
  background-color: var(--color-positive);
  border-radius: 1.7rem;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
}

.nav-btn-cv:hover{
  background-color: var(--color-peach);
  color: var(--color-positive);
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