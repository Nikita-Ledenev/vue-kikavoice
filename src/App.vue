<template>
  <div id="app">
    <LayoutMain/>
    <CharasterMain/>
  </div>
</template>

<script>
import LayoutMain from '@/components/layout/LayoutMain.vue'
import CharasterMain from '@/components/CharasterMain/CharasterMain.vue'
export default {
  name: 'App',
  components: {
    LayoutMain,
    CharasterMain,
  }
}
</script>

<style>
 * {
   font-family: Jura;
   margin: 0px;
 }
</style>
