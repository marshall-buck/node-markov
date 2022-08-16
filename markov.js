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

    const chainMap = new Map;

    for (let i = 0; i < this.words.length; i++) {
      // TODO: refactor
      if (!chainMap.get(this.words[i])) {
        chainMap.set(this.words[i], [this.words[i + 1]]);
      } else {
        chainMap.set[this.words[i], chainMap.get(this.words[i]).push(this.words[i + 1])];
      }
    }

    return chainMap;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let outputString = '';
    let currentWord = this.words[0];


    while (currentWord !== undefined) {
      outputString = outputString + " " + currentWord;

      const arrayOfWords = this.chains.get(currentWord);
      const random = Math.floor(Math.random() * arrayOfWords.length);
      currentWord = arrayOfWords[random];
    }


    return outputString;

  }
}

// const catInHatMachine = new MarkovMachine('The cat is in the hat. The cat is the cat. The hat is a cat.');



// console.log(catInHatMachine.getText());