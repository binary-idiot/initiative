<template>
  <h1>Initiative</h1>
  <MonsterList></MonsterList>
</template>

<script>
import MonsterList from './components/MonsterList.vue';

export default {
  name: 'App',
  components: {
    MonsterList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
