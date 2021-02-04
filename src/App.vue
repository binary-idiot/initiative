<template>
  <h1>Initiative</h1>
  <MonsterList :monsters="monsters"></MonsterList>
</template>

<script>

import MonsterList from './components/MonsterList.vue';

export default {
  name: 'App',
  components: {
    MonsterList,
  },

  data() {
    return {
      monsters: [],
    };
  },

  async created() {
    // Fetch list of sources and then fetch each source and add to monsters
    try {
      const sources = await fetch('./data/sources.json').then((r) => r.json());

      sources.monsters.forEach(async (source) => {
        const data = await fetch(source).then((r) => r.json());

        data.forEach((e) => {
          this.monsters.push(e);
        });
      });
    } catch (e) {
      console.log(e);
    }
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
