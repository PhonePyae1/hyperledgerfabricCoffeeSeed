<template>
    <div>
        <form>
            <input v-model.trim="name1" type="text" name="title" placeholder="Enter Seed ID">
            <input v-on:click="hello" type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
  name: 'input',
  isTrue: false,
  data: function () {
    return {
      name1: ''
    }
  },
  methods: {
    hello () {
      this.isTrue = !this.isTrue
    }
  }
}
</script>

<style scoped>
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
