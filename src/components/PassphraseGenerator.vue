<template>
  <div class="row q-gutter-sm">
    <div class="col-12 col-md-4">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Passphrase options</div>
        </q-card-section>

        <q-separator />
        <q-card-section>
          <span class="text-subtitle1">Words</span>
          <q-slider
            label
            label-always
            snap
            v-model="ppOptions.wordCount"
            :step="1"
            :min="2"
            :max="7"
            class="q-mt-lg"
          />
        </q-card-section>
        <q-card-section>
          <span class="text-subtitle1">Generated passphrases</span>
          <q-slider
            label
            label-always
            snap
            v-model="ppOptions.ppCount"
            :step="1"
            :min="1"
            :max="10"
            class="q-mt-lg"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-subtitle1">If required, add a:</div>
          <div class="q-gutter-sm">
            <q-checkbox v-model="ppOptions.addInt" label="Number" class="q-mr-xl" />

            <q-checkbox v-model="ppOptions.addSpecial" label="Special character" />
          </div>
        </q-card-section>
        <q-card-section>
          <div>
            <span class="text-subtitle1">Average time to guess (100 billion guesses/sec)</span>
          </div>
          <span class="text-h6">&asymp; {{avgTimeToGuess}}</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Generate" color="primary" type="submit" @click="getPassphrases" />
          <q-btn
            label="Reset"
            color="primary"
            type="submit"
            @click="resetPpOptions"
            :disabled="disableReset"
          />
        </q-card-actions>
      </q-card>
    </div>
    <div class="col">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Passphrases</div>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item v-for="pp in ppResults.Passphrases" v-bind:key="pp">
              <span>{{ pp }}</span>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import words from "../../public/words";

export default {
  data() {
    return {
      ppOptions: {
        wordCount: 5,
        addInt: true,
        addSpecial: false,
        ppCount: 5
      },

      ppResults: {
        Passphrases: []
      }
    };
  },

  computed: {
    disableReset: function() {
      if (
        this.ppOptions.wordCount == 5 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false &&
        this.ppOptions.ppCount == 5
      ) {
        return true;
      } else {
        return false;
      }
    },
    /*
    ppFontSize: function() {
      if ($breakpoint - sm - max && this.ppOptions.wordCount == "7") {
        return "font-size: 8pt";
      } else if (
        $breakpoint - xs - max &&
        (this.ppOptions.wordCount == "5" || this.ppOptions.wordCount == "6")
      ) {
        return "font-size: 8pt";
      }
    },
*/
    avgTimeToGuess: function() {
      // returns static text for calculated average time to guess
      if (
        this.ppOptions.wordCount == 2 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == 2 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == 2 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == 2 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == 3 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "2 seconds";
      } else if (
        this.ppOptions.wordCount == 3 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "23 seconds";
      } else if (
        this.ppOptions.wordCount == 3 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "47 seconds";
      } else if (
        this.ppOptions.wordCount == 3 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "8 minutes";
      } else if (
        this.ppOptions.wordCount == 4 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "5 hours";
      } else if (
        this.ppOptions.wordCount == 4 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "2 days";
      } else if (
        this.ppOptions.wordCount == 4 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "4 days";
      } else if (
        this.ppOptions.wordCount == 4 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "42 days";
      } else if (
        this.ppOptions.wordCount == 5 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "4.5 years";
      } else if (
        this.ppOptions.wordCount == 5 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "45 years";
      } else if (
        this.ppOptions.wordCount == 5 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "90 years";
      } else if (
        this.ppOptions.wordCount == 5 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "901 years";
      } else if (
        this.ppOptions.wordCount == 6 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "35,051 years";
      } else if (
        this.ppOptions.wordCount == 6 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "350,510 years";
      } else if (
        this.ppOptions.wordCount == 6 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "701,020 years";
      } else if (
        this.ppOptions.wordCount == 6 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "7,010,208 years";
      } else if (
        this.ppOptions.wordCount == 7 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "272,556,887 years";
      } else if (
        this.ppOptions.wordCount == 7 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "2,725,568,873 years";
      } else if (
        this.ppOptions.wordCount == 7 &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "5,451,137,747 years";
      } else if (
        this.ppOptions.wordCount == 7 &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "54,511,377,465 years";
      }
    }
  },

  methods: {
    getPassphrases() {
      localStorage.setItem("ppOptions", JSON.stringify(this.ppOptions));
      this.ppResults.Passphrases = [];
      var i;
      var pp = "";
      for (i = 0; i < this.ppOptions.ppCount; i++) {
        pp = this.generatePassphrase(
          this.ppOptions.wordCount,
          this.ppOptions.addInt,
          this.ppOptions.addSpecial
        );
        this.ppResults.Passphrases.push(pp);
      }
    },

    generatePassphrase(wordCount, addInt, addSpecial) {
      var passPhrase = this.getWords(wordCount);

      if (addInt) {
        var randomNum = new Uint32Array(1);
        window.crypto.getRandomValues(randomNum);
        passPhrase += randomNum[0] % 10;
      }

      if (addSpecial) {
        var specials = "@#$%^&*-_!+=[]{}|\\:',.?/`~\"();"; // 30 special characters, based of Azure AD allowed characters
        var randomNum = new Uint32Array(1);
        window.crypto.getRandomValues(randomNum);
        passPhrase += specials.charAt(randomNum[0] % 30);
      }

      return passPhrase;
    },

    getWords(wordCount) {
      var wordList = "";
      var i;
      var n;
      var word = "";
      for (i = 0; i < wordCount; i++) {
        n = this.rollWordNumber(5);
        word = words[n].charAt(0).toUpperCase() + words[n].slice(1); // Capitalizes first letter
        wordList += word;
      }
      return wordList;
    },

    rollWordNumber() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
      var wordNumber = "";
      var i;
      var randomNum = new Uint32Array(1);
      var dieRoll;
      for (i = 0; i < 5; i++) {
        window.crypto.getRandomValues(randomNum);
        dieRoll = (randomNum[0] % 6) + 1;
        wordNumber += dieRoll;
      }
      return wordNumber;
    },

    resetPpOptions() {
      // Resets selected passphrase options back to defaults, deletes localStorage item
      localStorage.removeItem("ppOptions");
      this.ppOptions.wordCount = 5;
      this.ppOptions.addInt = true;
      this.ppOptions.addSpecial = false;
      this.ppOptions.ppCount = 5;
    }
  },

  mounted() {
    // loads previously used Passphrase Options
    if (localStorage.getItem("ppOptions"))
      this.ppOptions = JSON.parse(localStorage.getItem("ppOptions"));
  }
};
</script>

<style lang="scss">
</style>