<template>
  <div>
    <Toolbar />
    <h1>Lista de Cursos</h1>
    <CursosCards />
  </div>
</template>

<script>
import Store from '../store'
import Toolbar from '@/components/Toolbar.vue'
import CursosCards from '@/components/CursosCards.vue'

export default {
  name: 'Home',
  components: {
    Toolbar,
    CursosCards
  },

  async beforeRouteEnter(to, from, next) {
    await Store.dispatch('cursos/getCursos')
    next()
  }
}
</script>
