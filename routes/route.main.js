const express = require("express");
const {
  rootMessage,
  getFullLetters,
  getFullHiragana,
  getFullKatakana,
  getHiraKataLetters,
  getFullDakutenLetters,
  getFullHandakutenLetters,
  getFullYoonLetters,
} = require("../controller/overview");
const {
  getHiragana,
  getDakuten: getHiraganaDakuten,
  getHandakuten: getHiraganaHandakuten,
  getYoon: getHiraganaYoon,
  getSpecificHiragana,
  getSpecificDakuten: getSpecificHiraganaDakuten,
  getSpecificHandakuten: getSpecificHiraganaHandakuten,
  getSpecificYoon: getSpecificHiraganaYoon,
} = require("../controller/hiragana");
const {
  getKatakana,
  getDakuten: getKatakanaDakuten,
  getHandakuten: getKatakanaHandakuten,
  getYoon: getKatakanaYoon,
  getSpecificKatakana,
  getSpecificDakuten: getSpecificKatakanaDakuten,
  getSpecificHandakuten: getSpecificKatakanaHandakuten,
  getSpecificYoon: getSpecificKatakanaYoon,
} = require("../controller/katakana");

const RouteMain = express.Router();

// Root Documentation Route
RouteMain.get("/", rootMessage);

// Full Letters Routes
RouteMain.get("/full/", getFullLetters);
RouteMain.get("/hirakata/", getHiraKataLetters);
RouteMain.get("/dakuten/", getFullDakutenLetters);
RouteMain.get("/handakuten/", getFullHandakutenLetters);
RouteMain.get("/yoon/", getFullYoonLetters);

// Hiragana Routes
RouteMain.get("/hiragana/", getHiragana);
RouteMain.get("/hiragana/full/", getFullHiragana);
RouteMain.get("/dakuten/hiragana/", getHiraganaDakuten);
RouteMain.get("/handakuten/hiragana/", getHiraganaHandakuten);
RouteMain.get("/yoon/hiragana/", getHiraganaYoon);

// Specific Hiragana Routes
RouteMain.get("/hiragana/:romaji/", getSpecificHiragana);
RouteMain.get("/dakuten/hiragana/:romaji/", getSpecificHiraganaDakuten);
RouteMain.get("/handakuten/hiragana/:romaji/", getSpecificHiraganaHandakuten);
RouteMain.get("/yoon/hiragana/:romaji/", getSpecificHiraganaYoon);

// Katakana Routes
RouteMain.get("/katakana/", getKatakana);
RouteMain.get("/katakana/full/", getFullKatakana);
RouteMain.get("/dakuten/katakana/", getKatakanaDakuten);
RouteMain.get("/handakuten/katakana/", getKatakanaHandakuten);
RouteMain.get("/yoon/katakana/", getKatakanaYoon);

// Specific Katakana Routes
RouteMain.get("/katakana/:romaji/", getSpecificKatakana);
RouteMain.get("/dakuten/katakana/:romaji/", getSpecificKatakanaDakuten);
RouteMain.get("/handakuten/katakana/:romaji/", getSpecificKatakanaHandakuten);
RouteMain.get("/yoon/katakana/:romaji/", getSpecificKatakanaYoon);

RouteMain.use((req, res) => {
  res.status(404).json({
    status: 404,
    message:
      "Endpoint URL tidak ditemukan. Mohon periksa kembali URL yang Anda akses.",
  });
});

module.exports = RouteMain;
