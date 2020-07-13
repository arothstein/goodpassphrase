<template>
  <q-page class="flex">
    <div class="q-pa-md full-width full-height column">
      <div class="row">
        <div class="col-12">
          <h1 class="text-h3">About</h1>
          <p>My name is Aaron and I find coding fun. I work in IT, and I had never found a password/passphrase generator I absolutely fell in love with, so I wrote my own and made it mobile friendly.</p>
        <h1 class="text-h3">What is Diceware?</h1>
        <p>Diceware is a method of creating random passphrases using "dice" as the random number generator. GoodPassphrase.com has implemented a digital die to make really fast rolls for you.</p>
        <p>Here are some more detailed write-ups on Diceware. Short story: Diceware can generate really strong passphrases that are really hard to guess, even if the guesser knows you used the Diceware method.</p>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/Diceware">Diceware | wikipeida.org</a></li>
            <li><a href="https://www.eff.org/dice">EFF Dice-Generated Passphrases | eff.org</a></li>
        </ul>
        <h2 class="text-h4">Types of Password Attacks: Online and Offline</h2>
        <p>An <strong>online attack</strong> is when a hacker has to interact with another system to try a password (like trying to login to Gmail). This type of attack is capable of far fewer guesses per second (≈1000/sec). Any password generated here will be time-resistant to this attack. For example, a two-word password with no numbers or special characters would take on average 115 millennia at this rate to guess.</p>

<p>An <strong>offline attack</strong> is when the hacker has a cryptographically hashed copy of your password (like your Windows password) and they can rapidly try different passwords to recreate that hash. This method can all happen on a single computer (or cluster of computers) and is capable of a much higher guess rate (up to ≈100 billion/sec according to some sources).</p>
<p>Without knowing how a generated passphrase will be used, I focused on communicating the average time to guess for offline attacks.</p>
<h2 class="text-h4">How Diceware Passphrase Strength was Calculated</h2>
<p>GoodPassphrase.com uses the Electronic Frontier Foundation's <a href="https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt">large wordlist</a>. For a deep dive on this word list and the math which lets us determine the average time to guess a password, read <a href="https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases">Deep Dive: EFF's New Wordlists for Random Passphrases | eff.org</a>.
</p>
<p>If you opt to append a special character, it will be one of thirty, using <a href="https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#password-policies-that-only-apply-to-cloud-user-accounts">Azure AD's password policy</a> as a reference for allowed characters:
<br>
@ # $ % ^ & * - _ ! + = [ ] { } | \ : ' , . ? / ` ~ " ( ) ;
</p>

<p>Given the math in the EFF deep dive, I compiled the following static complexity calcuations which drive the "average time to guess" values you see in the passphrase generator:<br>
<a href="https://docs.google.com/spreadsheets/d/1v2UHI4cVqInAPoNkMJXXhJhMMgv9BR3jfOubgisbS3U/edit?usp=sharing">Diceware-Passphrase Complexity Calcuations | docs.google.com</a>
</p>
        </div>
      </div>
    </div>
  </q-page>
</template>