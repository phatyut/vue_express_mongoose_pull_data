<template>
  <div>
    <button @click="clickhere">click show data</button>

    <ul>
      <li v-for="cat in cats" :key="cat.id" >
        {{ cat.name }} - {{ cat.age }} - {{ cat.gender }} - {{ cat.gmail }}
      </li>
    </ul>
  </div>
</template>
<script>
import { fetchCats } from './composable/useQuery';

export default {
  data() {
    return {
      cats: []   // store backend data here
    }
  },
  methods: {
    async clickhere() {
     this.cats = await fetchCats()
    }
  }
}
</script>
<style scoped>
 li:hover {
background-color: aqua;
cursor: pointer;
color: black;
}
</style>
