<template>
    <div class="image-container">
      <img :src="imageUrl2" alt="Image" class="image" />
      <div class="numbers">
        <p><b>{{ name }}</b></p>
        <p>Normal: {{ normalNumber }}</p>
        <p>Shiny: {{ shinyNumber }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
      pokedexEntryNumber: String,
      normalNumber: Number,
      shinyNumber:  Number,
      name: String
    })
  const imageUrl= new URL(import.meta.env.BASE_URL+ '/pokemon/normal/' + props.pokedexEntryNumber + '.png', import.meta.url).href 
  const imageUrl2 = new URL(
  "/pokemon/Normal/" + props.pokedexEntryNumber + ".png",
  import.meta.url
).href;
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