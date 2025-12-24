let step = 0;

const judul = localStorage.getItem("judul") || "Misi Akibatnya Apa Ya?";
const awal = localStorage.getItem("awal") || "Perhatikan video atau gambar dari guru.";
const tugas = localStorage.getItem("tugas") || "Diskusikan bersama kelompokmu.";
const kartu = localStorage.getItem("kartu") || "Pikirkan dampak di sekitar.";
const refleksi = localStorage.getItem("refleksi") || "Apa yang kamu pelajari hari ini?";

const konten = document.getElementById("konten");
const char = document.getElementById("char");

document.getElementById("judul").innerText = judul;

const checkpointText = [awal, tugas, kartu, refleksi];

function maju() {
  if(step >= checkpointText.length) {
    konten.innerText = "Selamat, misi selesai!";
    return;
  }

  // animasi jalan karakter
  char.style.left = (step * 120) + "px";

  // update teks pop-up
  konten.innerText = checkpointText[step];

  step++;
}
