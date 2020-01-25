<template>
  <div id="app">
    <Tasks msg="Hello Vue in CodeSandbox!"/>
  </div>
</template>

<script>
import Tasks from "./components/Tasks";

export default {
  name: "App",
  components: {
    Tasks
  }
};
</script>

<style>
#app {
  font-size: large;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
