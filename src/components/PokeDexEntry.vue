<template>
    <div class="image-container">
      <img :src="imageUrl" alt="Image" class="image" />
      <div class="numbers">
        <p>Normal: {{ normalNumber }}</p>
        <p>Shiny: {{ shinyNumber }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
      pokedexEntryNumber: String,
      normalNumber: Number,
      shinyNumber:  Number
    })
  console.log("url: " + import.meta.env.BASE_URL);
  const imageUrl= new URL(import.meta.env.BASE_URL+ '/pokemon/normal/' + props.pokedexEntryNumber + '.png', import.meta.url).href 
  </script>
  
  <style>
  .image-container {
    text-align: center;
  }
  
  .image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .numbers {
    font-size: 18px;
  }
  </style>