<template>
  <v-navigation-drawer
    :value="$store.state.system.drawer"
    @input="$store.commit('system/SET_DRAWER', $event)"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    miniVariant: false,
    clipped: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Inicio',
        to: '/home'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Administración',
        to: '/admin'
      },
            {
        icon: 'mdi-account-plus',
        title: 'Registrarse',
        to: '/sign-in'
      }
    ]
  })
}
</script>

<style></style>
