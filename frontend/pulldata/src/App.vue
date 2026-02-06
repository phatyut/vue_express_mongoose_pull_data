<template>
  <div>
    <button @click="clickhere">click show data</button>

    <ul>
      <li v-for="cat in cats" :key="cat.id">
        {{ cat.name }} - {{ cat.age }} - {{ cat.gender }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      cats: []   // store backend data here
    }
  },
  methods: {
    async clickhere() {
      try {
        const response = await axios.get('http://localhost:9090/homepage')
        console.log(response.data.text)   // ✅ correct
        this.cats = response.data.text    // save into reactive state
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
