<script setup>
import HelloWorld from './components/HelloWorld.vue'
import PokedexEntry from './components/PokeDexEntry.vue'
import { ref } from 'vue'
import DBResource from './DBResource.ts'


const items = ref([{ pokedexEntryNumber: '1', normalNumber:2, shinyNumber:0 }, { pokedexEntryNumber: '2', normalNumber:2, shinyNumber:0 },
{ pokedexEntryNumber: '3', normalNumber:1, shinyNumber:0 },{ pokedexEntryNumber: '4', normalNumber:1, shinyNumber:0 },{ pokedexEntryNumber: '5', normalNumber:0, shinyNumber:0 },
{ pokedexEntryNumber: '6', normalNumber:5, shinyNumber:1 },{ pokedexEntryNumber: '7', normalNumber:0, shinyNumber:0 },{ pokedexEntryNumber: '8', normalNumber:1, shinyNumber:0 },
{ pokedexEntryNumber: '9', normalNumber:0, shinyNumber:0 },{ pokedexEntryNumber: '10', normalNumber:0, shinyNumber:0 }])

const resource = new DBResource();

const items2 = ref([]);

(async () => {
  const data  = await resource.sendRequest()
  console.log("response:");
  console.log(data);
  items2.value =data ;
})()



console.log(items2);
console.log("aaaa");
console.log(import.meta.env.VITE_SUPABASE_KEY);

</script>

<template>
  <header>

    <div class="wrapper">
      <li v-for="item in items2">
        <PokedexEntry :pokedexEntryNumber="item.pokedex" :normalNumber=1  />
      </li>

    </div>
  </header>

  <main>
   
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
