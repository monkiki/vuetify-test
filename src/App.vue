<template>
  <v-app>
    <v-toolbar app dark color="blue">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="#" target="_blank">
        <span class="mr-2">Hello</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
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
