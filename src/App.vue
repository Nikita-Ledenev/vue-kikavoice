<template>
  <div id="app">
    <Modalregistration v-if="isModalOpen" @close="isModalOpen = false"/>
    <LayoutMain @open="isModalOpen = true" />
    <CharasterMain/>
  </div>
</template>

<script>
import LayoutMain from '@/components/layout/LayoutMain.vue'
import CharasterMain from '@/components/CharasterMain/CharasterMain.vue'
import Modalregistration from '@/components/Modal/ModalRegistration.vue'
export default {
  name: 'App',
  data() {
    return {
      isModalOpen: false,
    }
  },
  methods: {
   emits: ['close'],
  },
  components: {
    LayoutMain,
    CharasterMain,
    Modalregistration
  }
}
</script>

<style>
 * {
   font-family: Jura;
   margin: 0px;
 }
</style>
