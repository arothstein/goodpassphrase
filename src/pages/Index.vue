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
<!--      <div class="row">
        <div class="col-12">
          <h2 class="text-h4">Additional Security Tips</h2>
          <p>
            <ul>
              <li>Enable Multi-Factor Authentication (MFA) where you can. Most online accounts support it one way or another: hardware key, mobile app, or SMS text.</li>
            </ul>
          </p>
        </div>
      </div> -->
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