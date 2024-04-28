<template>
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
 name : 'App'
}
</script>

<style>
body {
  font-family: sans-serif;
  background-color: whitesmoke;
  color: rgb(87, 84, 84);
  overflow-x: hidden;
}
html{
  overflow-x: hidden;
}
.tabs {
  width: 100vw;
  height: 15rem;
}
.group {
  width: 100%;
}
.tab-button {
  width: 30%;
}
.btn-primary {
    color: whitesmoke;
    background-color:  rgb(46, 96, 144);
    border-color:  rgb(46, 96, 144);
  }

a{
  text-decoration: none !important; 
}
</style>