const { getLetterPart, getByRomaji } = require("../services/utils");

const hiraganaList = getLetterPart("hiragana.json", "hiragana");
const dakutenList = getLetterPart("dakuten.json", "hiragana");
const handakutenList = getLetterPart("handakuten.json", "hiragana");
const yoonList = getLetterPart("yoon.json", "hiragana");

const getHiragana = (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  return res.status(200).json(hiraganaList(req));
};

const getDakuten = (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  return res.status(200).json(dakutenList(req));
};

const getHandakuten = (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  return res.status(200).json(handakutenList(req));
};

const getYoon = (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  return res.status(200).json(yoonList(req));
};

const getSpecificHiragana = getByRomaji(
  "hiragana.json",
  "Hiragana",
  "hiragana"
);

const getSpecificDakuten = getByRomaji("dakuten.json", "Dakuten", "hiragana");

const getSpecificHandakuten = getByRomaji(
  "handakuten.json",
  "Handakuten",
  "hiragana"
);

const getSpecificYoon = getByRomaji("yoon.json", "Yoon", "hiragana");

module.exports = {
  getHiragana,
  getDakuten,
  getHandakuten,
  getYoon,
  getSpecificHiragana,
  getSpecificDakuten,
  getSpecificHandakuten,
  getSpecificYoon,
};
