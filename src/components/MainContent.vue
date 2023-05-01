<script setup>
import perfil from '/public/perfil.png'
</script>

<template>
  <main class="main-container">
    <section class="main-section">
      <img :src="perfil" alt="perfil" class="main-perfil">
      <div id="teste">a</div>
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
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 2.5rem;
  background-color: var(--color-positive);
  width: 60%;
  height: 800px;
}

.main-perfil{
  margin: 4rem 0;
  border: 1rem inset var(--color-negative);
  border-radius: 50%;
  width: 15%;
}

#teste{
  padding: 200rem;
}
</style>