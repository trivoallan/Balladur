<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

let trackList = ref([])
let storage = []
onMounted(() => {
axios
  .get('https://pantagruweb.club/tentacules/webhook/b469b78f-40ba-437a-937d-48ba00985774')
  .then((response) => {
    console.log(response.data)
    trackList.value = response.data
  })
})

</script>

<template>
  <div class="w-100 rounded-2xl">
    <div class="block  overflow-x-auto flex">
      <div class="">
        <p>Titre</p>
        <p>Artiste</p>
        <p>Durée</p>
      </div>
      <div class="container">
        <p>Résultat de la recherche</p>
        <div class="video-wrapper">
          <input type="checkbox" value="" checked class="toggle" />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1jY7Q1DvJ3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
table {
  width: fit-content;
  max-width: 1350px;
}

.tbody{
  background-color: white;
  color:black
}

.thead,
.tbody{
  span{
    padding: 1.5em 1em;
    width: 33%;
    flex-grow: 3;
    font-weight: bold;
    text-align: left;
  }
  span:not(:last-child){
    border-right: 1px solid green;
  }
}
.thead{
  flex-direction: row;
  display: flex;
  color: white;
  span{
    padding: 1.5em 1em;
    width: 33%;
    flex-grow: 1;
    
  }
}
.yt{
  color:black;
}
</style>
