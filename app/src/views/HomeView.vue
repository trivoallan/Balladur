<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { MoveDown } from 'lucide-vue-next';

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
    <div class="block  overflow-x-auto ">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead class="bg-[#6ee7b7]">
          <tr>
            <th class="p-2 px-4 align-middle border border-solid py-2 text-s uppercase border-l-0 border-r-0 font-semibold text-left border-[#059669] text-pink-300 border-pink-700">
              <span>Artiste</span><MoveDown :size="15" /></th>
            <th class="p-2 px-4 align-middle border border-solid py-2 text-s uppercase border-l-0 border-r-0 font-semibold text-left border-[#059669] text-pink-300 border-pink-700"><span>Album</span><MoveDown :size="15" /></th>
            <th class="p-2 px-4 align-middle border border-solid py-2 text-s uppercase border-l-0 border-r-0 font-semibold text-left border-[#059669] text-pink-300 border-pink-700">
              <span>Titre</span><MoveDown :size="15" /></th>
            <th class="p-2 px-4 align-middle border border-solid py-2 text-s uppercase border-l-0 border-r-0 font-semibold text-left border-[#059669] text-pink-300 border-pink-700">
              <span>Ajouté le</span></th>
            <th class="p-2 px-4 align-middle border border-solid py-2 text-s uppercase border-l-0 border-r-0 font-semibold text-left border-[#059669] text-pink-300 border-pink-700">
              <span>
      </span>      </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="detail in trackList" :key="detail.id">
            <th class="border-t-0 p-2 px-4 align-middle border-l-0 border-r-0 text-s p-4 text-left">
              {{ detail.track.artist }}
            </th>
            <td class="border-t-0 p-2 px-4 align-middle border-l-0 border-r-0 text-s p-4">{{ detail.track.album }}</td>
            <td class="border-t-0 p-2 px-4 align-middle border-l-0 border-r-0 text-s p-4">
              <i class="fas fa-circle text-orange-500 mr-2"></i>{{ detail.track.title }}</td>
            <td class="border-t-0 p-2 px-4 align-middle border-l-0 border-r-0 text-s p-4">
              <i class="fas fa-circle text-orange-500 mr-2"></i>{{ detail.track.added_at }}
            </td>
            <td class="border-t-0 p-2 px-4 align-middle border-l-0 border-r-0 text-s p-4">
            <span><button class="yt"></button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></span>
            </td>
          </tr>
        </tbody>
      </table>
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
