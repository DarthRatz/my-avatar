<script setup lang="ts"></script>

<template>
  <div class="avatar">
  <div class="img__container">
    <img class="img__circle" src="../assets/Epcot.avif" />
    <img class="img__avatar" src="../assets/me.png" />
  </div>
</div>
</template>

<style scoped>
.avatar {
position: relative;
max-width: 15rem;
margin-inline: auto;
transition: transform 250ms ease-in-out;
}

.img__container {
  aspect-ratio: 1 / 1.35;
  align-items: end;
  border-radius: 0 0 100vh 100vh;
  overflow: hidden;
}

.img__circle {
  position: absolute;
  inset: auto 0 0;
  width: 20rem;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: cover;
  opacity: 1;
}

.img__avatar {
  position: relative;
  transform: translateY(35%);
  z-index: 2;
}
.img__container:hover {
  transform: scale(1.1);
  transition: transform 250ms ease-in-out;
}

.img__container:hover .img__avatar {
  transform: translateY(10%)
  scale(1.4);
  transition: transform 250ms ease-in-out;
} 


</style>
