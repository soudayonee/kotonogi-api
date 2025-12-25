const e = require("express");
const fs = require("fs");
const path = require("path");

const formattedKey = (key = "") => key + "_huruf";

function readFile(fileName = "", type = "") {
  const data = fs.readFileSync(
    path.join(__dirname, "./../private/jsons/", fileName),
    "utf8"
  );

  return type ? JSON.parse(data)[formattedKey(type)] : JSON.parse(data);
}

function getLetterPart(fileName = "", type = "") {
  return (req) => {
    const part = readFile(fileName);

    const objectStrucuture = (kana = type) => {
      const key = formattedKey(type ? type : kana);
      return {
        [key]: Object.fromEntries(
          Object.keys(part[key]).map((data) => [
            data,
            {
              romaji: part[key][data].romaji,
              kana: part[key][data][kana],
              kakikata_gambar: `${req.protocol}://${req.get("host")}${
                part[key][data].kakikata_gambar
              }`,
              kakikata_animasi: `${req.protocol}://${req.get("host")}${
                part[key][data].kakikata_animasi
              }`,
              ...(part[key][data].catatan && {
                catatan: part[key][data].catatan,
              }),
              kosakata: part[key][data].kosakata?.map((item) => {
                return {
                  romaji: item.romaji,
                  kana: item[kana],
                  arti: item.arti,
                };
              }),
            },
          ])
        ),
      };
    };

    return {
      total: type ? part.total / 2 : part.total || null,
      tentang: part.tentang || null,
      info: part.info || null,
      penjelasan: part.penjelasan || null,
      ...(type
        ? { ...objectStrucuture() }
        : {
            ...objectStrucuture("hiragana"),
            ...objectStrucuture("katakana"),
          }),
    };
  };
}

const getByRomaji = (fileName = "", label = "", type = "") => {
  return (req, res) => {
    const romaji = req.params.romaji.trim().toLowerCase();
    const romajiPart = getLetterPart(fileName, type);

    const result = romajiPart(req)[formattedKey(type)][romaji];

    if (!result || result === undefined || result === null) {
      res.setHeader("Cache-Control", "public, max-age=300");
      return res.status(404).json({
        message: `${label} tidak ditemukan. Mohon periksa part yang Anda cari.`,
      });
    }

    res.setHeader("Cache-Control", "public, max-age=3600");

    return res.status(200).json(result);
  };
};

module.exports = {
  getLetterPart,
  getByRomaji,
};
