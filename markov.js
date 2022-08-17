"use strict"

/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();

  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {

    const chainMap = new Map();

    for (let i = 0; i < this.words.length; i++) {

      let currentWord = this.words[i]
      let nextWord = this.words[i+1]

      if (!nextWord){
        nextWord = null
      }

      if (!chainMap.has(currentWord)) {
        chainMap.set(currentWord, [nextWord]);
      } else {
        chainMap.get(currentWord).push(nextWord)
        // let values = chainMap.get(currentWord)
        // let word = values.push(nextWord)
        // chainMap.set(currentWord, word);


      }
    }
    return chainMap;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let outputString = '';
    let currentWord = this.words[0];


    while (currentWord !== null) {
      outputString = outputString + " " + currentWord;

      const words = this.chains.get(currentWord);
      const random = Math.floor(Math.random() * words.length);
      currentWord = words[random];
    }


    return outputString;

  }
}

// const catInHatMachine = new MarkovMachine('The cat is in the hat. The cat is the cat. The hat is a cat.');



// console.log(catInHatMachine.getText());


