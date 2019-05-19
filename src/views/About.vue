<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <VueSignaturePad width="300px" height="400px" ref="signaturePad" class="signature"/>
      </v-flex>

      <v-flex mb-5 xs12>
        <v-btn @click="undo" color="warning">Undo</v-btn>
        <v-btn @click="save" color="info">Save</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
    methods: {
      undo() {
        this.$refs.signaturePad.undoSignature();
      },
      save() {
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        console.log(isEmpty);
        console.log(data);
      }
    }
  }
</script>

<style>
  .signature {
    margin: auto;
    border: 2px solid green;
    padding: 5px;
  }
</style>
