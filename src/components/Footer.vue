<script setup>
import L from "../utils/links";
</script>
<template>
  <footer class="footer-container">
    <p>&copy;{{ new Date().getFullYear() }} - Rodrigo Batista Pereira</p>
    <ul>
      <li v-for="link in L.socialMedia" :key="link">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
  </footer>
</template>

<style>
.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-color: var(--color-negative);
}

.footer-container ul {
  display: flex;
}

.footer-container ul li a {
  text-transform: capitalize;
  text-decoration: none;
  padding: 2rem;
  color: var(--color-positive);
  font-size: 1.4rem;
  transition: all .3s ease-in-out;
}

.footer-container ul li a:hover{
    color: var(--color-peach);
}

.footer-container p {
  font-size: 1.4rem;
  text-align: end;
  width: 40%;
  color: white;
}
</style>