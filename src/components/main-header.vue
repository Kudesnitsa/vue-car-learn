<template>
      <header>
          <nav class="navbar navbar-light bg-light justify-content-between">

              <router-link class="navbar-brand" to="/">Home</router-link>
              <router-link class="navbar-brand" to="/cars">Cars</router-link>
              <router-link class="navbar-brand" to="/car/add">Add car</router-link>
              <form class="form-inline" @submit.prevent="$router.push('/cars')">
                  <input class="form-control mr-sm-2" v-on:input="search($event.target.value)" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </nav>
      </header>
</template>
<script>
    export default {
        name: 'mainHeader',
        data: function () {
            return {}
        },
        methods:{
            search(text){
                this.$emit('search', text);

            },
        }
    }

</script>