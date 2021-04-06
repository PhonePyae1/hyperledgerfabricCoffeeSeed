<template>
      <div>
      <img
        v-bind:src="picture"
        :alt="`${firstName} ${lastName}`"
        :class="gender"
      />
      <h1>{{firstName}} {{lastName}}</h1>
      <h3>ID:{{id}}</h3>
      <h3>Email: {{email}}</h3>

      <img
        v-bind:src="picture1"
        :alt="`${firstName1} ${lastName1}`"
        :class="gender1"
      />
      <h1>{{firstName1}} {{lastName1}}</h1>
      <h3>ID:{{id1}}</h3>
      <h3>Email: {{email1}}</h3>
      <img
        v-bind:src="picture2"
        :alt="`${firstName2} ${lastName2}`"
        :class="gender2"
      />
      <h1>{{firstName2}} {{lastName2}}</h1>
      <h3>ID:{{id2}}</h3>
      <h3>Email: {{email2}}</h3>
    </div>

</template>
<script>

export default {
  name: 'members',
  data () {
    return {
      firstName: 'PhonePyae',
      lastName: 'KyawSwar',
      id: '6118156',
      email: 'u6118156@au.edu',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/11.jpg',
      lastName1: 'Vibo',
      gender1: 'female',
      picture1: 'https://randomuser.me/api/portraits/women/10.jpg',
      id1: '6118156',
      email1: 'dummy@gmail.com',
      firstName2: 'Ruby',
      lastName2: 'Vibo',
      gender2: 'female',
      picture2: 'https://randomuser.me/api/portraits/women/11.jpg',
      id2: '6118156',
      email2: 'dummy@gmail.com'
    }
  }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    font-family: Arial, Helvetica, sans-serif;
}

#app {
  width: 400px;
  height: 100vh;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1,
h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}

img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

.male {
  border-color: black;
  background-color: steelblue;
}

.female {
  border-color: black;
  background-color: pink;
  color: #333;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}
</style>
