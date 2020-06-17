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
      <q-card v-if="showResults">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Passphrases</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showResults: true,

      ppOptions: {
        wordCount: "6",
        addInt: true,
        addSpecial: false,
        ppCount: "3"
      },

      ppResults: {
        Passphrases: []
      }
    };
  },

  computed: {
    disableReset: function() {
      if (
        this.ppOptions.wordCount == "6" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false &&
        this.ppOptions.ppCount == "3"
      ) {
        return true;
      } else {
        return false;
      }
    },

    avgTimeToGuess: function() {
      // returns static text for calculated average time to guess
      if (
        this.ppOptions.wordCount == "2" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == "2" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == "2" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == "2" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "0 seconds";
      } else if (
        this.ppOptions.wordCount == "3" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "20 seconds";
      } else if (
        this.ppOptions.wordCount == "3" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "23 seconds";
      } else if (
        this.ppOptions.wordCount == "3" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "47 seconds";
      } else if (
        this.ppOptions.wordCount == "3" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "8 minutes";
      } else if (
        this.ppOptions.wordCount == "4" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "5 hours";
      } else if (
        this.ppOptions.wordCount == "4" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "2 days";
      } else if (
        this.ppOptions.wordCount == "4" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "4 days";
      } else if (
        this.ppOptions.wordCount == "4" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "42 days";
      } else if (
        this.ppOptions.wordCount == "5" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "4.5 years";
      } else if (
        this.ppOptions.wordCount == "5" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "45 years";
      } else if (
        this.ppOptions.wordCount == "5" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "90 years";
      } else if (
        this.ppOptions.wordCount == "5" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "901 years";
      } else if (
        this.ppOptions.wordCount == "6" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "35,051 years";
      } else if (
        this.ppOptions.wordCount == "6" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "350,510 years";
      } else if (
        this.ppOptions.wordCount == "6" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "701,020 years";
      } else if (
        this.ppOptions.wordCount == "6" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "7,010,208 years";
      } else if (
        this.ppOptions.wordCount == "7" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == false
      ) {
        return "272,556,887 years";
      } else if (
        this.ppOptions.wordCount == "7" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == false
      ) {
        return "2,725,568,873 years";
      } else if (
        this.ppOptions.wordCount == "7" &&
        this.ppOptions.addInt == false &&
        this.ppOptions.addSpecial == true
      ) {
        return "5,451,137,747 years";
      } else if (
        this.ppOptions.wordCount == "7" &&
        this.ppOptions.addInt == true &&
        this.ppOptions.addSpecial == true
      ) {
        return "54,511,377,465 years";
      }
    }
  },

  methods: {
    getPassphrases() {
      console.log("getPassphrases fired");
      localStorage.setItem("ppOptions", JSON.stringify(this.ppOptions));
    },

    resetPpOptions() {
      // Resets selected passphrase options back to defaults, deletes localStorage item
      localStorage.removeItem("ppOptions");
      this.ppOptions.wordCount = "6";
      this.ppOptions.addInt = false;
      this.ppOptions.addSpecial = false;
      this.ppOptions.ppCount = "3";
    }
  },

  mounted() {
    // loads previously used Passphrase Options
    if (localStorage.getItem("ppOptions"))
      this.ppOptions = JSON.parse(localStorage.getItem("ppOptions"));
  }
};
</script>