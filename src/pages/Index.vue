<template>
  <q-page class="flex">
    <div class="q-pa-md full-width full-height column">
      <div class="row">
        <div class="col-12">
          <p
            class="text-subtitle1 text-grey-14"
          >Create passphrases you can remember but are hard for hackers/computers to guess.</p>
        </div>
      </div>
      <PassphraseGenerator></PassphraseGenerator>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  components: {
    PassphraseGenerator: require("components/PassphraseGenerator.vue").default
  }
};
</script>