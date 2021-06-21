const {
  getCharacterCount,
  getWordCount,
  getSentenceCount,
  getParagraphCount,
  getBigrams,
  getLetterFrequency,
  findWordsInWords,
  getLengthPercentage,
} = require("./algo.js");

describe("getCharacterCount", () => {
  const string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?";

  it("should return the correct number of characters", () => {
    expect(getCharacterCount(string)).toBe(98);
  });
});

describe("getWordCount", () => {
  const string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?";

  it("should return the correct number of words", () => {
    expect(getWordCount(string)).toBe(16);
  });
});

describe("getSentenceCount", () => {
  const string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies lectus augue, at hendrerit lectus cursus nec. Fusce efficitur semper libero a tincidunt. Duis nisi urna, rhoncus sit amet tellus et, pellentesque sollicitudin odio. Curabitur at ligula nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

  it("should return the correct number of sentences", () => {
    expect(getSentenceCount(string)).toBe(6);
  });
});

describe("getParagraphCount", () => {
  const string = `     Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.   

In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.`;

  it("should return the correct number of sentences", () => {
    expect(getParagraphCount(string)).toBe(2);
  });
});

describe("getBigrams", () => {
  const string =
    "the quick person did not realize his speed and the quick person bumped";

  it("should return the correct number of unique word pairs", () => {
    expect(getBigrams(string)).toEqual({
      "the quick": 2,
      "quick person": 2,
      "person did": 1,
      "did not": 1,
      "not realize": 1,
      "realize his": 1,
      "his speed": 1,
      "speed and": 1,
      "and the": 1,
      "person bumped": 1,
      "bumped undefined": 1,
    });
  });
});

describe("getLetterFrequency", () => {
  const string = "person the quick person";

  it("should console.log the correct number of asterisks for the frequency of the letter in the string", () => {
    const array = [];

    const spy = jest.spyOn(console, "log").mockImplementation((string) => {
      array.push(string);
    });
    getLetterFrequency(string);
    expect(array).toEqual([
      "c *",
      "e ***",
      "h *",
      "i *",
      "k *",
      "n **",
      "o **",
      "p **",
      "q *",
      "r **",
      "s **",
      "t *",
      "u *",
    ]);
    spy.mockRestore();
  });
});

describe("findWordsInWords", () => {
  const string =
    "To day rows night wards or emperor today towards tomorrow tonight tomorrows run running runners runnings";

  it("should return the correct number of words in other words", () => {
    expect(findWordsInWords(string)).toEqual({
      to: ["today", "towards", "tomorrow", "tonight", "tomorrows"],
      day: ["today"],
      rows: ["tomorrows"],
      night: ["tonight"],
      wards: ["towards"],
      or: ["emperor", "tomorrow", "tomorrows"],
      tomorrow: ["tomorrows"],
      run: ["running", "runners", "runnings"],
      running: ["runnings"],
    });
  });
});

describe("getLengthPercentage", () => {
  const string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies lectus augue, at hendrerit lectus cursus nec. Fusce efficitur semper libero a tincidunt. Duis nisi urna, rhoncus sit amet tellus et, pellentesque sollicitudin odio. Curabitur at ligula nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

  it("should return the correct percentages of each word length", () => {
    expect(getLengthPercentage(string)).toEqual({
      1: "1.96%",
      2: "11.76%",
      3: "5.88%",
      4: "15.69%",
      5: "15.69%",
      6: "15.69%",
      7: "5.88%",
      8: "3.92%",
      9: "13.73%",
      10: "1.96%",
      11: "1.96%",
      12: "5.88%",
    });
  });
});
