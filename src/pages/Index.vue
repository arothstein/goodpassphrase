<template>
  <q-page class="flex">
    <div class="q-pa-md full-width full-height column">
      <div class="row">
        <div class="col-12">
          <p
            class="text-subtitle1 text-grey-14"
          >Create passwords you can remember but are hard for hackers/computers to guess.</p>
          <!--<p>
            An online attack is when a hacker has to interact with another system to try a password (like trying to login to Gmail).
            This type of attack is capable of far fewer guesses per second (&asymp;1000/sec). Any password generated here will be time-resistant to this attack. For example,
            a two-word password with no numbers or special characters would take on average 115 millennia at this rate to guess.
          </p>
          <p>
            An offline attack is when the hacker has a cryptographically hashed copy of your password (like your Windows password) and they can rapidly try different passwords to recreate that hash.
            This method can all happen on a single computer (or cluster of computers) and is capable of a much higher guess rate (&asymp;100 billion/sec).
          </p>-->
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
