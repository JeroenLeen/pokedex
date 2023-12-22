<script setup>

import PokedexEntry from './components/PokeDexEntry.vue'
import { ref } from 'vue'
import DBResource from './DBResource.ts'
import Multiselect from 'vue-multiselect'

options: ['list', 'of', 'options']
const items = ref([{ pokedexEntryNumber: '1', normalNumber:2, shinyNumber:0 }, { pokedexEntryNumber: '2', normalNumber:2, shinyNumber:0 },
{ pokedexEntryNumber: '3', normalNumber:1, shinyNumber:0 },{ pokedexEntryNumber: '4', normalNumber:1, shinyNumber:0 },{ pokedexEntryNumber: '5', normalNumber:0, shinyNumber:0 },
{ pokedexEntryNumber: '6', normalNumber:5, shinyNumber:1 },{ pokedexEntryNumber: '7', normalNumber:0, shinyNumber:0 },{ pokedexEntryNumber: '8', normalNumber:1, shinyNumber:0 },
{ pokedexEntryNumber: '9', normalNumber:0, shinyNumber:0 },{ pokedexEntryNumber: '10', normalNumber:0, shinyNumber:0 }])

const resource = new DBResource();
const username = ref('')
const items2 = ref([]);
const users = ref([]);

  (async () => {
    const foundUsers  = await resource.getUniqueUsers()
    console.log("response:");
    console.log(foundUsers);
    users.value =foundUsers ;
  })();

function refreshData() {
    (async () => {
    const data  = await resource.getUniquePokedexEntries(username.value)
    console.log("response:");
    console.log(data);
    items2.value =data ;
  })()
}



</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<template>
  
  <div class="wholeSite">
    <div class="content">
      <div class="row">
      <h1>Hatch & Catch Pokedex</h1>
      </div>
      <div class="row">
      <form>
        <multiselect v-model="value" :options="options"></multiselect>
        <div class="form-group">
          <input type="text" v-model="username" class="form-control" placeholder="Enter your name" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
      </form>
      <button @click="refreshData">"show my pokemon"</button>
    </div>

    <!--<div class="wrapper">-->
      <div class="row">
        <div class="col-sm" v-for="item in items2">
          <PokedexEntry :pokedexEntryNumber="item.pokedex" :normalNumber=item.normalNumber  :shinyNumber=item.shinyNumber :name="item.monName" />
        </div>
      </div>
    <!--</div>-->

</div>

</div>
</template>

<style scoped>
  .wholeSite{
   width: 100%;
   background-color: white;
    display: flex; /* or inline-flex */

  }



</style>
