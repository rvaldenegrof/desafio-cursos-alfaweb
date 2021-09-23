<template>
  <v-app-bar color="purple darken-4" :clipped-left="clipped" fixed app flat dark>
    <v-app-bar-nav-icon @click.stop="$store.dispatch('system/toggleDrawer')" />
    <!--     <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.isDark">
      <v-icon>{{ $vuetify.theme.isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
    </v-btn> -->
    <v-toolbar-title>Cursos Alfaweb</v-toolbar-title>
    <v-spacer />

    <div>
      <p>{{ $store.state.session.user.email }}</p>
    </div>
    <v-btn icon @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Firebase from 'firebase'

export default {
  data: () => ({
    loading: false,
    fixed: false,
    rightDrawer: false,
    title: '',
    miniVariant: false,
    clipped: false,
  }),

  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then((accept) => {
          console.log('Logout correcto', accept)
          this.$router.push('/login')
        })
    }
  },
}
</script>

<style></style>
