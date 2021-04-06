<template>
  <div class="container">
    <Header />
  <div>
    <button class="button1" v-on:click="newName = 'all'">Display all Seeds</button>
  </div>
    <div>
        <input v-model="name" class="input1" placeholder="Enter seed ID"/>
        <button class="button" @click="newName = name,myFunction()">Search</button>
  </div>
    <h3>information: </h3>
    <div v-for="lib in data" :key="lib">
    <div v-if="newName=='all'">
      {{lib}}
    </div>
    <div v-if="newName=='seed0'">
      <div>
        <span v-for="n in 122" :key="n"> {{lib[n]}} </span>
      </div>
    </div>
    <div v-if="newName=='seed1'">
      <div>
        <span v-for="i in 124" :key="i"> {{lib[i+124]}} </span>
      </div>
    </div>
    <div v-if="newName=='seed12'">
      <div>
        <span v-for="i in 127" :key="i"> {{lib[i+250]}} </span>
      </div>
    </div>
    <div v-if="newName=='seed2'">
      <div>
        <span v-for="i in 120" :key="i"> {{lib[i+379]}} </span>
      </div>
    </div>
    <div v-if="newName=='seed3'">
      <div>
        <span v-for="i in 112" :key="i"> {{lib[i+501]}} </span>
      </div>
    </div>
    <div v-if="newName=='seed4'">
      <div>
        <span v-for="i in 115" :key="i"> {{lib[i+615]}} </span>
      </div>
    </div>
    </div>
  </div>
  <div class="container1">
    <p>
      <b>How to use</b><br>
      <br>
      You will need to enter the seed ID from the Coffeeshop.
      (You can ask staffs from the coffeeshop to obtain ID)
      Enter the seed ID and click search.
      In the information, the origins of the coffee seed will display.
    </p>
  </div>
  <div>
    copyright©
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  result: 'phone',
  setup () {
    const name = ref(null)
    const newName = ref(null)
    const state = reactive({ data: [] })

    watch(() => {
      fetch('http://localhost:8080/api/queryallcars')
        .then((response) => response.json())
        .then((data) => {
          state.data = data
        })
    })
    return {
      name,
      newName,
      ...toRefs(state)
    }
  },
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
p{
  text-align: left;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #42b983;
  padding: 30px;
  border-radius: 5px;
}
.container1 {
  max-width: 200px;
  margin: 10px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #42b983;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #42b983;
  color: black;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

h3 {
  margin-top: 10px;
}
#preview {
    box-sizing:border-box;
    padding: 10px 20px;
    border: 1px dotted black;
    margin: 30px 0;
}

form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 5px;
}

input[type="submit"] {
    flex:2
}
</style>
