import HeroImage from "/assets/My-Hero-Image.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/nodejs.png";
import Tools7 from "/assets/tools/github.png";
import Tools8 from "/assets/tools/canva.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Canva",
    ket: "Design App",
    dad: "800",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Typing Speed Test App",
    desk: "Sebuah website yang bisa menghitung seberapa cepat kamu mengetik",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
    link:"https://farhansyflu.github.io/farhansyflu-typing-speed-test/"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Counter",
    desk: "Kamu bisa menggunakannya untuk menghitung luas atau volume suatu bangun",
    tools: ["HTML", "CSS", "Astro"],
    dad: "300",
    link:""
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Weather App",
    desk: "Website yang bisa digunakan untuk mengecek cuaca hari ini di berbagai daerah",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "400",
    link:"https://farhansyflu.github.io/farhansyflu--weather-app/"
  },
];
