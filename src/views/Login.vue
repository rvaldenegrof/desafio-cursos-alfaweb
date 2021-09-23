<template>
  <v-container>
        <NavigationDrawer />
    <v-layout justify-center>
      <v-flex xs9>
        <h3>Login de Usuario</h3>
        <UserForm @submit="handleLoginFormSubmit" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue'
import UserForm from '@/components/UserForm.vue'

export default {
  components: { UserForm, NavigationDrawer },
  name: 'LoginPage',

  methods: {
    async handleLoginFormSubmit(credentials) {
      try {
        await this.$store.dispatch('session/login', credentials)
        console.log("Login correcto")
        this.$router.push('/home')
      } catch (e) {
        console.error(e)
      }
    }
/*       login() {
      Firebase.auth()
        .signInWithEmailAndPassword(
          this.formLabelAlign.user,
          this.formLabelAlign.password
        )
        .then(
          (accept) => {
            console.log("Login correcto", accept);
            this.$router.push("home");
          },
          (reject) => {
            this.$message({
              showClose: true,
              message: reject.message,
              type: "error",
            });
            console.error("El usuario no existe, intente nuevamente")
          }
        );
    }, */
  }
}
</script>

<style></style>
