<script setup>
import perfil from '/public/perfil.png'
</script>

<template>
  <main class="main-container">
    <section class="main-section">
      <img :src="perfil" alt="perfil" class="main-perfil">
    </section>
  </main>
</template>


<style>
.main-container {
  margin-top: 5rem ;
  display: flex;
  justify-content: center;
}

.main-section {
  display: flex;
  justify-content: center;
  align-items: start;
  border-radius: 2.5rem;
  background-color: var(--color-negative);
  width: 60%;
  height: 800px;
}

.main-perfil{
  margin: 4rem 0;
  border: 3px solid var(--color-positive);
  border-radius: 50%;
  width: 20rem;
}
</style>