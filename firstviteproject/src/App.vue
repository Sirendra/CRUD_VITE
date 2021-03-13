<template>
 <div id='app'>
   <div id="nav">
     <router-link to="/">List of Users</router-link> |
     <router-link to="/home">Home</router-link> |
     <router-link to="/About">About</router-link>
   </div>
   <router-view/>
   <!-- line 7 will make jump to index.js -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
