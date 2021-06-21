const getCharacterCount = (string) => string.replace(/[' ']/gi, "").length;

const getWordCount = (string) =>
  string.replace(/[^a-z ]/gi, "").split(" ").length;

const getSentenceCount = (string) => {
  const endingPunctuations = ".!?";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (endingPunctuations.includes(string[i])) {
      count += 1;
    }
  }
  return count;
};

const getParagraphCount = (string) => {
  let paragraphs = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " && string[i + 1] === " " && string[i + 2] !== " ") {
      paragraphs += 1;
    }
  }
  return paragraphs;
};

const getBigrams = (string) => {
  const object = {};

  string = string.replace(/[^a-z ]/gi, "").split(" ");

  for (let i = 0; i < string.length; i++) {
    const pair = `${string[i]} ${string[i + 1]}`;

    if (object[pair]) {
      object[pair] += 1;
    } else {
      object[pair] = 1;
    }
  }
  return object;
};

const getLetterFrequency = (string) => {
  const object = {};

  string = string.replace(/[^a-z]/gi, "");

  for (let i = 0; i < string.length; i++) {
    if (object[string[i]]) {
      object[string[i]] += 1;
    } else {
      object[string[i]] = 1;
    }
  }

  for (const key of Object.keys(object).sort()) {
    console.log(`${key} ${"*".repeat(object[key])}`);
  }
};

const findWordsInWords = (string) => {
  const object = {};

  string = string
    .replace(/[^a-z ]/gi, "")
    .toLowerCase()
    .split(" ");

  for (let i = 0; i < string.length; i++) {
    let curWord = string[i];
    for (let k = 0; k < string.length; k++) {
      if (
        curWord.length < string[k].length &&
        string[k].search(curWord) !== -1
      ) {
        if (object[curWord]) {
          object[curWord].push(string[k]);
        } else {
          object[curWord] = [string[k]];
        }
      }
    }
  }
  return object;
};

const getLengthPercentage = (string) => {
  const object = {};
  let total = 0;

  string = string.replace(/[^a-z ]/gi, "").split(" ");

  for (let i = 0; i < string.length; i++) {
    const length = string[i].length;
    total += 1;
    if (object[length]) {
      object[length] += 1;
    } else {
      object[length] = 1;
    }
  }
  for (const key in object) {
    object[key] = `${((object[key] / total) * 100).toFixed(2)}%`;
  }
  return object;
};

module.exports = {
  getCharacterCount,
  getWordCount,
  getSentenceCount,
  getParagraphCount,
  getBigrams,
  getLetterFrequency,
  findWordsInWords,
  getLengthPercentage,
};
