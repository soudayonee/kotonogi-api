const { getLetterPart } = require("../services/utils");

const rootMessage = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  return res.json({
    name: "Kotonogi API",
    description:
      "Public API untuk pembelajaran huruf Jepang (Hiragana & Katakana) beserta variasinya seperti Dakuten, Handakuten, dan Yoon. Seluruh data bersifat statis dan menggunakan SVG untuk gambar serta animasi. Asset SVG mempunyai copyright yang bisa diperiksa di bagian atas file masing-masing.",
    version: "1.0.1",
    base_url: baseUrl,
    documentation: {
      github: "https://github.com/soudayonee/kotonogi-api",
      note: [
        "Dokumentasi lengkap dan contoh penggunaan tersedia di repository.",
        "Pembuatan website dokumentasi dalam proses.",
        "Jika ada pertanyaan atau saran, silakan buka issue di GitHub.",
      ],
    },
    endpoints: {
      overview: {
        "/full":
          "Semua huruf Hiragana, Katakana, Dakuten, Handakuten, dan Yoon",
        "/hirakata": "Semua huruf Hiragana dan Katakana",
        "/dakuten": "Semua huruf dengan Dakuten",
        "/handakuten": "Semua huruf dengan Handakuten",
        "/yoon": "Semua huruf Yoon",
      },
      hiragana: {
        "/hiragana": "Daftar lengkap Hiragana",
        "/hiragana/full":
          "Daftar lengkap Hiragana (termasuk Dakuten, Handakuten, dan Yoon)",
        "/dakuten/hiragana": "Hiragana dengan Dakuten",
        "/handakuten/hiragana": "Hiragana dengan Handakuten",
        "/yoon/hiragana": "Hiragana Yoon",
        "/hiragana/:romaji": "Detail huruf Hiragana berdasarkan romaji",
        "/dakuten/hiragana/:romaji":
          "Detail huruf Dakuten Hiragana berdasarkan romaji",
        "/handakuten/hiragana/:romaji":
          "Detail huruf Handakuten Hiragana berdasarkan romaji",
        "/yoon/hiragana/:romaji":
          "Detail huruf Yoon Hiragana berdasarkan romaji",
      },
      katakana: {
        "/katakana": "Daftar lengkap Katakana",
        "/katakana/full":
          "Daftar lengkap Katakana (termasuk Dakuten, Handakuten, dan Yoon)",
        "/dakuten/katakana": "Katakana dengan Dakuten",
        "/handakuten/katakana": "Katakana dengan Handakuten",
        "/yoon/katakana": "Katakana Yoon",
        "/katakana/:romaji": "Detail huruf Katakana berdasarkan romaji",
        "/dakuten/katakana/:romaji":
          "Detail huruf Dakuten Katakana berdasarkan romaji",
        "/handakuten/katakana/:romaji":
          "Detail huruf Handakuten Katakana berdasarkan romaji",
        "/yoon/katakana/:romaji":
          "Detail huruf Yoon Katakana berdasarkan romaji",
      },
    },
    notes: [
      "API bersifat statis dan gratis untuk digunakan",
      "Seluruh endpoint hanya mendukung metode GET",
      "Response menggunakan format JSON",
      "Asset gambar dan animasi disajikan dalam format SVG",
      "API ini cocok untuk keperluan belajar, eksperimen, dan proyek edukasi",
    ],
    comming_soon: [
      "Website dokumentasi interaktif",
      "Endpoint untuk pencarian huruf berdasarkan romaji (untuk semua jenis huruf)",
      "Penambahan kosakata beserta arti dan contoh penggunaan",
      "Pengoptimalan performa dan caching",
    ],
  });
};

const getFullLetters = (req, res) => {
  const hiraganaList = getLetterPart("hiragana.json", "hiragana");
  const katakanaList = getLetterPart("katakana.json", "katakana");
  const dakutenList = getLetterPart("dakuten.json");
  const handakutenList = getLetterPart("handakuten.json");
  const yoonList = getLetterPart("yoon.json");

  res.setHeader("Cache-Control", "public, s-maxage=86400");

  return res.status(200).json({
    hiragana: hiraganaList(req),
    katakana: katakanaList(req),
    dakuten: dakutenList(req),
    handakuten: handakutenList(req),
    yoon: yoonList(req),
  });
};

const getFullHiragana = (req, res) => {
  const hiraganaList = getLetterPart("hiragana.json", "hiragana");
  const dakutenList = getLetterPart("dakuten.json", "hiragana");
  const handakutenList = getLetterPart("handakuten.json", "hiragana");
  const yoonList = getLetterPart("yoon.json", "hiragana");

  res.setHeader("Cache-Control", "public, s-maxage=86400");

  return res.status(200).json({
    hiragana: hiraganaList(req),
    dakuten: dakutenList(req),
    handakuten: handakutenList(req),
    yoon: yoonList(req),
  });
};

const getFullKatakana = (req, res) => {
  const katakanaList = getLetterPart("katakana.json", "katakana");
  const dakutenList = getLetterPart("dakuten.json", "katakana");
  const handakutenList = getLetterPart("handakuten.json", "katakana");
  const yoonList = getLetterPart("yoon.json", "katakana");

  res.setHeader("Cache-Control", "public, s-maxage=86400");

  return res.status(200).json({
    katakana: katakanaList(req),
    dakuten: dakutenList(req),
    handakuten: handakutenList(req),
    yoon: yoonList(req),
  });
};

const getHiraKataLetters = (req, res) => {
  const hiraganaList = getLetterPart("hiragana.json", "hiragana");
  const katakanaList = getLetterPart("katakana.json", "katakana");

  res.setHeader("Cache-Control", "public, s-maxage=86400");

  return res.status(200).json({
    hiragana: hiraganaList(req),
    katakana: katakanaList(req),
  });
};

const getFullDakutenLetters = (req, res) => {
  const dakutenList = getLetterPart("dakuten.json");
  res.setHeader("Cache-Control", "public, s-maxage=86400");
  return res.status(200).json(dakutenList(req));
};

const getFullHandakutenLetters = (req, res) => {
  const handakutenList = getLetterPart("handakuten.json");
  res.setHeader("Cache-Control", "public, s-maxage=86400");
  return res.status(200).json(handakutenList(req));
};

const getFullYoonLetters = (req, res) => {
  const yoonList = getLetterPart("yoon.json");
  res.setHeader("Cache-Control", "public, s-maxage=86400");
  return res.status(200).json(yoonList(req));
};

module.exports = {
  rootMessage,
  getFullLetters,
  getFullHiragana,
  getFullKatakana,
  getHiraKataLetters,
  getFullDakutenLetters,
  getFullHandakutenLetters,
  getFullYoonLetters,
};
