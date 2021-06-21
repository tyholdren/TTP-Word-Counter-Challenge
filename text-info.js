#!/usr/bin/env node
const readline = require("readline");
const {
  getCharacterCount,
  getWordCount,
  getSentenceCount,
  getParagraphCount,
  getBigrams,
  getLetterFrequency,
  findWordsInWords,
  getLengthPercentage,
} = require("./algo");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const terminal = rl.output;

rl.question("Please enter your text below:\n", (text) => {
  terminal.write("----------\n");
  terminal.write(`character count: ${getCharacterCount(text)}\n`);
  terminal.write(`word count: ${getWordCount(text)}\n`);
  terminal.write(`sentence count: ${getSentenceCount(text)}\n`);
  terminal.write(`paragraph count: ${getParagraphCount(text)}\n`);
  terminal.write(`bigrams count:\n`);
  console.log(getBigrams(text));
  terminal.write("----------\n");
  terminal.write(`letter frequency:\n`);
  getLetterFrequency(text);
  terminal.write("----------\n");
  terminal.write(`find words in words:\n`);
  console.log(findWordsInWords(text));
  terminal.write("----------\n");
  terminal.write(`get length percentage:\n`);
  console.log(getLengthPercentage(text));
  rl.close();
});
