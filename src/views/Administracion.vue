<template>
  <div>
        <Toolbar />
    <v-layout justify-center class="mb-4">
      <h1>Administración</h1>
      <AgregarCursoBtn />
    </v-layout>

    <CursosTabla />

    <AlertSection />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import CursosTabla from '../components/CursosTabla.vue'
import AgregarCursoBtn from '../components/AgregarCursoBtn.vue'
import AlertSection from '../components/AlertSection.vue'
export default {
  components: {
    CursosTabla,
    AgregarCursoBtn,
    AlertSection,
    Toolbar
  }
}
</script>

<style></style>
