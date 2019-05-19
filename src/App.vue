<template>
  <v-app>
    <v-toolbar app dark color="blue">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="about">
        <span class="mr-2">Sign</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer dark color="blue">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
