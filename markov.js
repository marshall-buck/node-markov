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
    // TODO: implement this!

    // iterate through the array of words
    //figure out if threat key is already there

    const chainMap = new Map;

    for (let i = 0; i < this.words.length; i++) {

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
  }
}

const catInHatMachine = new MarkovMachine("the cat in the hat");
// // debugger;
// console.log(catInHatMachine.chains.forEach((k, v) => console.log(k, v)));


