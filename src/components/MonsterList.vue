<template>
  <div class="monster-list">
    <ul>
        <li v-for="monster in $options.monsters" :key="monster.name">{{ monster.name }}</li>
    </ul>
  </div>
</template>

<script>
import MonsterData from '@/data/monsters/srd.json';

export default {
  name: 'MonsterList',
  monsters: MonsterData.monster,

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
