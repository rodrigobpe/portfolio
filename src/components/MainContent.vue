<script setup>
import perfil from "/perfil.jpeg";
import About from "./About.vue";
</script>

<template>
  <main class="main-container">
    <section class="main-section">
      <h1 id="about">SOBRE MIM</h1>
      <img :src="perfil" alt="perfil" class="main-perfil" />
      <About />
      <h1 id="skills">SKILLS</h1>
      <About />
    </section>
  </main>
</template>


<style>
.main-container {
  margin: 5rem 0 11rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background-color: var(--color-positive);
  width: 60%;
}

.main-perfil {
  margin: 4rem 0;
  border: 1rem inset var(--color-negative);
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
}

#about,
#skills {
  display: flex;
  justify-content: start;
  align-content: center;
  margin: 4rem 0 2rem 0;
  font-size: 3.6rem;
}

#about::before,
#skills::before {
  content: "";
  padding: 1rem;
  border-left: 1rem solid red;
}

</style>