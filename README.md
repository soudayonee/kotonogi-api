<p align="center">
  <a href="https://kotonogi-api.vercel.app" rel="_blank">
    <img width="200" height="200" src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/flashcard-naufal-8acies/assets/7c0jf1r82sc9/0001_0.png" alt="Kotonogi API Logo">
  </a>
</p>

<div id="user-content-toc">
  <ul align="center" style="list-style-type: none;">
    <summary>
        <h1>Kotonogi API</h1>
    </summary>
  </ul>
</div>

<div align="center">

[![Status](https://img.shields.io/badge/status-aktif-success.svg)]()
[![GitHub Repo](https://img.shields.io/badge/github-kotonogi--api-BB042C.svg)](https://github.com/soudayonee/kotonogi-api)
[![API Version](https://img.shields.io/badge/versi-1.0.0-blue.svg)]()

</div>

---

## 📌 Ringkasan

**Kotonogi API** adalah API publik statis berbasis JSON yang menyediakan data **huruf Jepang (Hiragana & Katakana)** beserta variasinya seperti **Dakuten, Handakuten, dan Yoon**.

API ini ditujukan untuk:

- pembelajaran bahasa Jepang,
- eksperimen frontend/backend,
- proyek edukasi dan non-komersial.

---

## 📝 Tabel konten

- [Tentang API](#tentang-api)
- [Fitur](#fitur)
- [Endpoints](#endpoints)

  - [Overview](#overview-endpoints)
  - [Hiragana](#hiragana-endpoints)
  - [Katakana](#katakana-endpoints)

- [Cara Pakai](#cara-pakai)
- [Format Response](#format-response)
- [Contoh Output JSON](#contoh-output-json)
- [Roadmap](#roadmap)

---

## 🧐 Tentang API <a name="tentang-api"></a>

Kotonogi API menyajikan data huruf Jepang dalam struktur JSON yang konsisten dan mudah dipahami.

Cakupan data meliputi:

- Huruf dasar **Hiragana** dan **Katakana**
- Variasi bunyi:

  - **Dakuten (゛)**
  - **Handakuten (゜)**
  - **Yoon (ゃゅょ)**

- Gambar cara menulis huruf (SVG)
- Animasi urutan goresan (SVG)
- Kosakata contoh untuk setiap huruf (jika tersedia)

> [!WARNING]
> API ini ditujukan untuk **edukasi dan eksperimen**, bukan untuk distribusi komersial skala besar tanpa izin. Semua aset SVG menyertakan informasi hak cipta di dalam file. **Silahkan gunakan secara bijak**

---

## ✨ Fitur <a name="fitur"></a>

- ✅ Data lengkap Hiragana & Katakana
- ✅ Variasi Dakuten, Handakuten, dan Yoon
- ✅ Gambar & animasi SVG (mudah di-embed)
- ✅ API statis & gratis
- ✅ Cocok untuk web, mobile, dan materi belajar

---

## 🔗 Endpoints <a name="endpoints"></a>

**Base URL**

```
https://kotonogi-api.vercel.app
```

---

### 📍 Overview Endpoints <a name="overview-endpoints"></a>

| Endpoint          | Deskripsi                                                   |
| ----------------- | ----------------------------------------------------------- |
| `GET /`           | Informasi & dokumentasi singkat API                         |
| `GET /full`       | Semua huruf Hiragana, Katakana, Dakuten, Handakuten, dan Yoon                |
| `GET /hirakata`   | Semua Hiragana & Katakana                                   |
| `GET /dakuten`    | Semua huruf Dakuten                                         |
| `GET /handakuten` | Semua huruf Handakuten                                      |
| `GET /yoon`       | Semua huruf Yoon                                            |

---

### 🟦 Hiragana Endpoints <a name="hiragana-endpoints"></a>

| Endpoint                           | Deskripsi                          |
| ---------------------------------- | ---------------------------------- |
| `GET /hiragana`                    | Daftar lengkap Hiragana               |
| `GET /hiragana/full`               | Daftar lengkap Hiragana (termasuk Dakuten,  Handakuten, dan Yoon)                    |
| `GET /dakuten/hiragana`            | Hiragana dengan Dakuten            |
| `GET /handakuten/hiragana`         | Hiragana dengan Handakuten         |
| `GET /yoon/hiragana`               | Hiragana Yoon                      |
| `GET /hiragana/:romaji`            | Detail huruf Hiragana berdasarkan romaji |
| `GET /dakuten/hiragana/:romaji`    | Detail huruf Dakuten Hiragana berdasarkan romaji            |
| `GET /handakuten/hiragana/:romaji` | Detail huruf Handakuten Hiragana berdasarkan romaji         |
| `GET /yoon/hiragana/:romaji`       | Detail huruf Yoon Hiragana berdasarkan romaji               |

---

### 🟥 Katakana Endpoints <a name="katakana-endpoints"></a>

| Endpoint                           | Deskripsi                          |
| ---------------------------------- | ---------------------------------- |
| `GET /katakana`                    | Daftar lengkap Katakana               |
| `GET /katakana/full`               | Daftar lengkap Katakana (termasuk Dakuten,  Handakuten, dan Yoon)                    |
| `GET /dakuten/katakana`            | Katakana dengan Dakuten            |
| `GET /handakuten/katakana`         | Katakana dengan Handakuten         |
| `GET /yoon/katakana`               | Katakana Yoon                      |
| `GET /katakana/:romaji`            | Detail huruf Katakana berdasarkan romaji |
| `GET /dakuten/katakana/:romaji`    | Detail huruf Dakuten Katakana berdasarkan romaji         |
| `GET /handakuten/katakana/:romaji` | Detail huruf Handakuten Katakana berdasarkan romaji         |
| `GET /yoon/katakana/:romaji`       | Detail huruf Yoon Katakana berdasarkan romaji               |

---

## 🎈 Cara Pakai <a name="cara-pakai"></a>

### Contoh Request

```bash
curl https://kotonogi-api.vercel.app/hiragana
```

```bash
curl https://kotonogi-api.vercel.app/hiragana/a
```

```bash
curl https://kotonogi-api.vercel.app/dakuten
```

---

## 📦 Format Response <a name="format-response"></a>

Semua endpoint mengembalikan data dalam format JSON.

- `total`: INT
- `tentang`: STRING
- `info`: STRING
- `penjelasan`: STRING
- `romaji`: STRING
- `kana`: STRING
- `kakikata_gambar`: URL_PATH
- `kakikata_animasi`: URL_PATH
- `kosakata` (opsional): ARRAY
- `arti`: STRING
- `catatan` (opsional): STRING

---

## 📦 Contoh Output JSON <a name = "contoh-output-json"></a>

### GET /full

> [!NOTE]
> Endpoint /full disediakan untuk kebutuhan eksplorasi dan pembelajaran, bukan untuk konsumsi produksi skala besar.

```json
{
  "hiragana": {
    "total": 23,
    "tentang": "Hiragana adalah salah satu sistem penulisan...",
    "info": "Hiragana biasanya digunakan untuk...",
    "penjelasan": "Hiragana juga memiliki variasi suara yang...",
    "hiragana_huruf": {
      "a": {
        "romaji": "a",
        "kana": "あ",
        "kakikata_gambar": "https://kotonogi-api.vercel.app/images/hiragana/a.svg",
        "kakikata_animasi": "https://kotonogi-api.vercel.app/animation/hiragana/a.svg",
        "kosakata": [
            { "romaji": "ai", "kana": "あい", "arti": "cinta" },
            { "romaji": "asa", "kana": "あさ", "arti": "pagi" }
        ]
      }
    }
  },
  "katakana": { 
    "total": 23,
    "tentang": "Katakana adalah salah satu sistem penulisan...",
    "info": "Katakana lebih sering digunakan untuk...",
    "penjelasan": "Tanda ― (sering disebut 'chōon' atau 'long vowel mark') digunakan...",
    "katakana_huruf": {
        "a": {...},
    }
  },
  "dakuten": {
    "total": 50,
    "tentang": "Dakuten adalah tanda berupa dua garis kecil...",
    "info": "Dakuten sangat penting dalam bahasa Jepang karena...",
    "penjelasan": "Dakuten diterapkan pada lima baris konsonan dasar...",
    "hiragana_huruf": {
        "ga": {...},
    }, 
    "katakana_huruf": {
        "ga": {...},
    }
  },
  "handakuten": {
    "total": 10,
    "tentang": "Handakuten adalah tanda berupa lingkaran kecil yang...",
    "info": "Handakuten sangat penting dalam bahasa Jepang...",
    "penjelasan": "Handakuten hanya diterapkan pada baris h dalam...",
    "hiragana_huruf": {
        "pa": {...},
    }, 
    "katakana_huruf": {
        "pa": {...},
    }
  },
  "yoon": {
    "total": 72,
    "tentang": "Huruf gabungan dalam bahasa Jepang biasanya merujuk pada...",
    "info": "Huruf seperti ぢゃ, ぢゅ, ぢょ lebih sering digantikan oleh...",
    "penjelasan": "Dalam bahasa Jepang, huruf gabungan ini sering...",
    "hiragana_huruf": {
        "gya": {...},
    }, 
    "katakana_huruf": {
        "gya": {...},
    }
  }
}
```

### GET /hiragana

```json
{
  "total": 23,
  "tentang": "Hiragana adalah salah satu sistem penulisan...",
  "info": "Hiragana biasanya digunakan untuk menulis kata-kata...",
  "penjelasan": "Hiragana juga memiliki variasi suara...",
  "hiragana_huruf": {
    "a": {
      "romaji": "a",
      "kana": "あ",
      "kakikata_gambar": "https://kotonogi-api.vercel.app/images/hiragana/a.svg",
      "kakikata_animasi": "https://kotonogi-api.vercel.app/animation/hiragana/a.svg",
      "kosakata": [
        { "romaji": "ai", "hiragana": "あい", "arti": "cinta" },
        { "romaji": "asa", "hiragana": "あさ", "arti": "pagi" }
      ]
    }
  }
}
```

### GET /hiragana/a

```json
{
  "romaji": "a",
  "kana": "あ",
  "kakikata_gambar": "https://kotonogi-api.vercel.app/images/hiragana/a.svg",
  "kakikata_animasi": "https://kotonogi-api.vercel.app/animation/hiragana/a.svg",
  "kosakata": [
    { "romaji": "ai", "hiragana": "あい", "arti": "cinta" },
    { "romaji": "asa", "hiragana": "あさ", "arti": "pagi" }
  ]
}
```

---

## 🚀 Roadmap <a name="roadmap"></a>

- 🔜 Website dokumentasi interaktif
- 🔜 Endpoint untuk pencarian huruf berdasarkan romaji (untuk semua jenis huruf)
- 🔜 Penambahan kosakata beserta arti dan contoh penggunaan
- 🔜 Pengoptimalan performa dan caching