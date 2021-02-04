<template>
  <div class="monster-list">
    <ul>
        <li v-for="monster in monsters" :key="monster.name">{{ monster.name }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MonsterList',
  props: {
    monsters: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .monster-list{
   ul{
     list-style: none;
     padding: 0;
   }
 }
</style>
