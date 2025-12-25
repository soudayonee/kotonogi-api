const { getLetterPart, getByRomaji } = require("../services/utils");

const katakanaList = getLetterPart("katakana.json", "katakana");
const dakutenList = getLetterPart("dakuten.json", "katakana");
const handakutenList = getLetterPart("handakuten.json", "katakana");
const yoonList = getLetterPart("yoon.json", "katakana");

const getKatakana = (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  return res.status(200).json(katakanaList(req));
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

const getSpecificKatakana = getByRomaji(
  "katakana.json",
  "Katakana",
  "katakana"
);

const getSpecificDakuten = getByRomaji("dakuten.json", "Dakuten", "katakana");

const getSpecificHandakuten = getByRomaji(
  "handakuten.json",
  "Handakuten",
  "katakana"
);

const getSpecificYoon = getByRomaji("yoon.json", "Yoon", "katakana");

module.exports = {
  getKatakana,
  getDakuten,
  getHandakuten,
  getYoon,
  getSpecificKatakana,
  getSpecificDakuten,
  getSpecificHandakuten,
  getSpecificYoon,
};
