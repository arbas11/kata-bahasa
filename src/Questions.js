const questions = [
  {
    correct: "bapak pergi kepasar",
    wrong: "bapak ke pasar",
    explain: "ya karena salah",
  },
  {
    correct: "ibu menanam pohon",
    wrong: "ibu ditanam pohon",
    explain: "ya karena salah",
  },
  {
    correct: "budi memakan ayam",
    wrong: "budi dimakan ayam",
    explain: "ya karena salah",
  },
  {
    correct: "tono membeli baju",
    wrong: "tono dibeli baju",
    explain: "ya karena salah",
  },
  {
    correct: "tuti mencari jalan",
    wrong: "jalan mencari tuti",
    explain: "ya karena salah",
  },
  {
    correct: "bapak memakai sepatu",
    wrong: "bapak dipakai sepatu",
    explain: "ya karena salah",
  },
  {
    correct: "bambang menjadi presiden",
    wrong: "presiden dijadikan bambang",
    explain: "ya karena salah",
  },
  {
    correct: "joko belajar membaca",
    wrong: "blajar dibaca joko",
    explain: "ya karena salah",
  },
  {
    correct: "siti memakan nasi",
    wrong: "nasi memakan siti",
    explain: "ya karena salah",
  },
  {
    correct: "mega mencuci baju",
    wrong: "dicuci mega baju",
    explain: "ya karena salah",
  },
  {
    correct: "budi menyetir mobil",
    wrong: "budi disetirkan mobil",
    explain: "ya karena salah",
  },
  {
    correct: "ibu mecaci maki",
    wrong: "ibu maki dicaci",
    explain: "ya karena salah",
  },
  {
    correct: "badu memanen padi",
    wrong: "padi memanen singkong",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi ke pasar",
    wrong: "pasar di beli bapak",
    explain: "ya karena salah",
  },
  {
    correct: "si aminah belajar mengaji",
    wrong: "alhamdulillah",
    explain: "ya karena salah",
  },
  {
    correct: "ini semua cuma ngetest",
    wrong: "ya ini salah harusnya",
    explain: "ya karena salah",
  },
  {
    correct: "bapak banyak berbuat salah",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "tuti menjemur pakaian",
    wrong: "pakaian menjemur tuti",
    explain: "ya karena salah",
  },
  {
    correct: "zafa membaca buku",
    wrong: "zafa dibaca buku",
    explain: "ya karena salah",
  },
  {
    correct: "kepasar bapak pergi",
    wrong: "ini salah jalan",
    explain: "ya karena salah",
  },
  {
    correct: "ibu makan banyak",
    wrong: "makan ibu banyak",
    explain: "ya karena salah",
  },
  {
    correct: "adi dimarahi ibu",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi kepasar",
    wrong: "bapak ke pasar",
    explain: "ya karena salah",
  },
  {
    correct: "ibu menanam pohon",
    wrong: "ibu ditanam pohon",
    explain: "ya karena salah",
  },
  {
    correct: "budi memakan ayam",
    wrong: "budi dimakan ayam",
    explain: "ya karena salah",
  },
  {
    correct: "tono membeli baju",
    wrong: "tono dibeli baju",
    explain: "ya karena salah",
  },
  {
    correct: "tuti mencari jalan",
    wrong: "jalan mencari tuti",
    explain: "ya karena salah",
  },
  {
    correct: "bapak memakai sepatu",
    wrong: "bapak dipakai sepatu",
    explain: "ya karena salah",
  },
  {
    correct: "bambang menjadi presiden",
    wrong: "presiden dijadikan bambang",
    explain: "ya karena salah",
  },
  {
    correct: "joko belajar membaca",
    wrong: "blajar dibaca joko",
    explain: "ya karena salah",
  },
  {
    correct: "siti memakan nasi",
    wrong: "nasi memakan siti",
    explain: "ya karena salah",
  },
  {
    correct: "mega mencuci baju",
    wrong: "dicuci mega baju",
    explain: "ya karena salah",
  },
  {
    correct: "budi menyetir mobil",
    wrong: "budi disetirkan mobil",
    explain: "ya karena salah",
  },
  {
    correct: "ibu mecaci maki",
    wrong: "ibu maki dicaci",
    explain: "ya karena salah",
  },
  {
    correct: "badu memanen padi",
    wrong: "padi memanen singkong",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi ke pasar",
    wrong: "pasar di beli bapak",
    explain: "ya karena salah",
  },
  {
    correct: "si aminah belajar mengaji",
    wrong: "alhamdulillah",
    explain: "ya karena salah",
  },
  {
    correct: "ini semua cuma ngetest",
    wrong: "ya ini salah harusnya",
    explain: "ya karena salah",
  },
  {
    correct: "bapak banyak berbuat salah",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "tuti menjemur pakaian",
    wrong: "pakaian menjemur tuti",
    explain: "ya karena salah",
  },
  {
    correct: "zafa membaca buku",
    wrong: "zafa dibaca buku",
    explain: "ya karena salah",
  },
  {
    correct: "kepasar bapak pergi",
    wrong: "ini salah jalan",
    explain: "ya karena salah",
  },
  {
    correct: "ibu makan banyak",
    wrong: "makan ibu banyak",
    explain: "ya karena salah",
  },
  {
    correct: "adi dimarahi ibu",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi kepasar",
    wrong: "bapak ke pasar",
    explain: "ya karena salah",
  },
  {
    correct: "ibu menanam pohon",
    wrong: "ibu ditanam pohon",
    explain: "ya karena salah",
  },
  {
    correct: "budi memakan ayam",
    wrong: "budi dimakan ayam",
    explain: "ya karena salah",
  },
  {
    correct: "tono membeli baju",
    wrong: "tono dibeli baju",
    explain: "ya karena salah",
  },
  {
    correct: "tuti mencari jalan",
    wrong: "jalan mencari tuti",
    explain: "ya karena salah",
  },
  {
    correct: "bapak memakai sepatu",
    wrong: "bapak dipakai sepatu",
    explain: "ya karena salah",
  },
  {
    correct: "bambang menjadi presiden",
    wrong: "presiden dijadikan bambang",
    explain: "ya karena salah",
  },
  {
    correct: "joko belajar membaca",
    wrong: "blajar dibaca joko",
    explain: "ya karena salah",
  },
  {
    correct: "siti memakan nasi",
    wrong: "nasi memakan siti",
    explain: "ya karena salah",
  },
  {
    correct: "mega mencuci baju",
    wrong: "dicuci mega baju",
    explain: "ya karena salah",
  },
  {
    correct: "budi menyetir mobil",
    wrong: "budi disetirkan mobil",
    explain: "ya karena salah",
  },
  {
    correct: "ibu mecaci maki",
    wrong: "ibu maki dicaci",
    explain: "ya karena salah",
  },
  {
    correct: "badu memanen padi",
    wrong: "padi memanen singkong",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi ke pasar",
    wrong: "pasar di beli bapak",
    explain: "ya karena salah",
  },
  {
    correct: "si aminah belajar mengaji",
    wrong: "alhamdulillah",
    explain: "ya karena salah",
  },
  {
    correct: "ini semua cuma ngetest",
    wrong: "ya ini salah harusnya",
    explain: "ya karena salah",
  },
  {
    correct: "bapak banyak berbuat salah",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "tuti menjemur pakaian",
    wrong: "pakaian menjemur tuti",
    explain: "ya karena salah",
  },
  {
    correct: "zafa membaca buku",
    wrong: "zafa dibaca buku",
    explain: "ya karena salah",
  },
  {
    correct: "kepasar bapak pergi",
    wrong: "ini salah jalan",
    explain: "ya karena salah",
  },
  {
    correct: "ibu makan banyak",
    wrong: "makan ibu banyak",
    explain: "ya karena salah",
  },
  {
    correct: "adi dimarahi ibu",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi kepasar",
    wrong: "bapak ke pasar",
    explain: "ya karena salah",
  },
  {
    correct: "ibu menanam pohon",
    wrong: "ibu ditanam pohon",
    explain: "ya karena salah",
  },
  {
    correct: "budi memakan ayam",
    wrong: "budi dimakan ayam",
    explain: "ya karena salah",
  },
  {
    correct: "tono membeli baju",
    wrong: "tono dibeli baju",
    explain: "ya karena salah",
  },
  {
    correct: "tuti mencari jalan",
    wrong: "jalan mencari tuti",
    explain: "ya karena salah",
  },
  {
    correct: "bapak memakai sepatu",
    wrong: "bapak dipakai sepatu",
    explain: "ya karena salah",
  },
  {
    correct: "bambang menjadi presiden",
    wrong: "presiden dijadikan bambang",
    explain: "ya karena salah",
  },
  {
    correct: "joko belajar membaca",
    wrong: "blajar dibaca joko",
    explain: "ya karena salah",
  },
  {
    correct: "siti memakan nasi",
    wrong: "nasi memakan siti",
    explain: "ya karena salah",
  },
  {
    correct: "mega mencuci baju",
    wrong: "dicuci mega baju",
    explain: "ya karena salah",
  },
  {
    correct: "budi menyetir mobil",
    wrong: "budi disetirkan mobil",
    explain: "ya karena salah",
  },
  {
    correct: "ibu mecaci maki",
    wrong: "ibu maki dicaci",
    explain: "ya karena salah",
  },
  {
    correct: "badu memanen padi",
    wrong: "padi memanen singkong",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi ke pasar",
    wrong: "pasar di beli bapak",
    explain: "ya karena salah",
  },
  {
    correct: "si aminah belajar mengaji",
    wrong: "alhamdulillah",
    explain: "ya karena salah",
  },
  {
    correct: "ini semua cuma ngetest",
    wrong: "ya ini salah harusnya",
    explain: "ya karena salah",
  },
  {
    correct: "bapak banyak berbuat salah",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "tuti menjemur pakaian",
    wrong: "pakaian menjemur tuti",
    explain: "ya karena salah",
  },
  {
    correct: "zafa membaca buku",
    wrong: "zafa dibaca buku",
    explain: "ya karena salah",
  },
  {
    correct: "kepasar bapak pergi",
    wrong: "ini salah jalan",
    explain: "ya karena salah",
  },
  {
    correct: "ibu makan banyak",
    wrong: "makan ibu banyak",
    explain: "ya karena salah",
  },
  {
    correct: "adi dimarahi ibu",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi kepasar",
    wrong: "bapak ke pasar",
    explain: "ya karena salah",
  },
  {
    correct: "ibu menanam pohon",
    wrong: "ibu ditanam pohon",
    explain: "ya karena salah",
  },
  {
    correct: "budi memakan ayam",
    wrong: "budi dimakan ayam",
    explain: "ya karena salah",
  },
  {
    correct: "tono membeli baju",
    wrong: "tono dibeli baju",
    explain: "ya karena salah",
  },
  {
    correct: "tuti mencari jalan",
    wrong: "jalan mencari tuti",
    explain: "ya karena salah",
  },
  {
    correct: "bapak memakai sepatu",
    wrong: "bapak dipakai sepatu",
    explain: "ya karena salah",
  },
  {
    correct: "bambang menjadi presiden",
    wrong: "presiden dijadikan bambang",
    explain: "ya karena salah",
  },
  {
    correct: "joko belajar membaca",
    wrong: "blajar dibaca joko",
    explain: "ya karena salah",
  },
  {
    correct: "siti memakan nasi",
    wrong: "nasi memakan siti",
    explain: "ya karena salah",
  },
  {
    correct: "mega mencuci baju",
    wrong: "dicuci mega baju",
    explain: "ya karena salah",
  },
  {
    correct: "budi menyetir mobil",
    wrong: "budi disetirkan mobil",
    explain: "ya karena salah",
  },
  {
    correct: "ibu mecaci maki",
    wrong: "ibu maki dicaci",
    explain: "ya karena salah",
  },
  {
    correct: "badu memanen padi",
    wrong: "padi memanen singkong",
    explain: "ya karena salah",
  },
  {
    correct: "bapak pergi ke pasar",
    wrong: "pasar di beli bapak",
    explain: "ya karena salah",
  },
  {
    correct: "si aminah belajar mengaji",
    wrong: "alhamdulillah",
    explain: "ya karena salah",
  },
  {
    correct: "ini semua cuma ngetest",
    wrong: "ya ini salah harusnya",
    explain: "ya karena salah",
  },
  {
    correct: "bapak banyak berbuat salah",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
  {
    correct: "tuti menjemur pakaian",
    wrong: "pakaian menjemur tuti",
    explain: "ya karena salah",
  },
  {
    correct: "zafa membaca buku",
    wrong: "zafa dibaca buku",
    explain: "ya karena salah",
  },
  {
    correct: "kepasar bapak pergi",
    wrong: "ini salah jalan",
    explain: "ya karena salah",
  },
  {
    correct: "ibu makan banyak",
    wrong: "makan ibu banyak",
    explain: "ya karena salah",
  },
  {
    correct: "adi dimarahi ibu",
    wrong: "ya ini salah",
    explain: "ya karena salah",
  },
];

export default questions;
