(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{a1d1:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("q-page",{staticClass:"flex"},[s("div",{staticClass:"q-pa-md full-width full-height column"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"text-h3"},[e._v("About")]),s("p",[e._v("My name is Aaron and I code for fun. I work in IT, and have never found a password/passphrase generator I absolutely fell in love with, so I wrote my own.")]),s("h2",{staticClass:"text-h4"},[e._v("What is Diceware?")]),s("p",[e._v('Diceware is a method of creating random passphrases using "dice" as the random number generator. GoodPassphrase.com has implemented a digital die to make really fast rolls for you.')]),s("p",[e._v("Here are some more detailed write-ups on Diceware. Short story: Diceware can generate really strong passphrases that are really hard to guess, even if the guesser knows you used the Diceware method.")]),s("ul",[s("li",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Diceware"}},[e._v("Diceware | wikipeida.org")])]),s("li",[s("a",{attrs:{href:"https://www.eff.org/dice"}},[e._v("EFF Dice-Generated Passphrases | eff.org")])])]),s("h2",{staticClass:"text-h4"},[e._v("Types of Password Attacks: Online and Offline")]),s("p",[e._v("\n          An\n          "),s("strong",[e._v("online attack")]),e._v(" is when a hacker has to interact with another system to try a password (like trying to login to Gmail). This type of attack is capable of far fewer guesses per second (≈1000/sec). Any password generated here will be time-resistant to this attack. For example, a two-word password with no numbers or special characters would take on average 115 millennia at this rate to guess.\n        ")]),s("p",[e._v("\n          An\n          "),s("strong",[e._v("offline attack")]),e._v(" is when the hacker has a cryptographically hashed copy of your password (like your Windows password) and they can rapidly try different passwords to recreate that hash. This method can all happen on a single computer (or cluster of computers) and is capable of a much higher guess rate (up to ≈100 billion/sec according to some sources).\n        ")]),s("p",[e._v("Without knowing how a generated passphrase will be used, I focused on communicating the average time to guess for offline attacks.")]),s("h2",{staticClass:"text-h4"},[e._v("How Diceware Passphrase Strength was Calculated")]),s("p",[e._v("\n          GoodPassphrase.com uses the Electronic Frontier Foundation's\n          "),s("a",{attrs:{href:"https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt"}},[e._v("large wordlist")]),e._v(". For a deep dive on this word list and the math which lets us determine the average time to guess a password, read\n          "),s("a",{attrs:{href:"https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases"}},[e._v("Deep Dive: EFF's New Wordlists for Random Passphrases | eff.org")]),e._v(".\n        ")]),s("p",[e._v("\n          If you opt to append a special character, it will be one of thirty, using\n          "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#password-policies-that-only-apply-to-cloud-user-accounts"}},[e._v("Azure AD's password policy")]),e._v(" as a reference for allowed characters:\n          "),s("br"),e._v("\n          @ # $ % ^ & * - _ ! + = [ ] { } | \\ : ' , . ? / ` ~ \" ( ) ;\n        ")]),s("p",[e._v('\n          Given the math in the EFF deep dive, I compiled the following static complexity calcuations which drive the "average time to guess" values you see in the passphrase generator:\n          '),s("br"),s("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1v2UHI4cVqInAPoNkMJXXhJhMMgv9BR3jfOubgisbS3U/edit?usp=sharing"}},[e._v("Diceware-Passphrase Complexity Calcuations | docs.google.com")])])])])])])},o=[],r=s("2877"),i=s("9989"),n=s("eebe"),l=s.n(n),c={},h=Object(r["a"])(c,t,o,!1,null,null,null);a["default"]=h.exports;l()(h,"components",{QPage:i["a"]})}}]);