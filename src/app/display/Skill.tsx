"use client";
import { useEffect, useState } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

interface Skill {
  title: string;
  img: string;
  deskripsi: string;
  project: string;
}

const skills: Skill[] = [
  {
    title: "JavaScript",
    img: "/js.png",
    deskripsi:
      "JavaScript digunakan untuk membuat interaktivitas pada website seperti event, DOM manipulation, hingga komunikasi dengan backend melalui API.",
    project: "Coming Soon",
  },
  {
    title: "PHP",
    img: "/php.png",
    deskripsi:
      "PHP adalah bahasa server-side yang digunakan untuk membangun website dinamis dan sering digunakan pada sistem manajemen konten seperti WordPress.",
    project: "Coming Soon",
    },
  {
    title: "Unity",
    img: "/unity.png",
    deskripsi:
      "Unity adalah game engine yang powerful untuk membuat game 2D dan 3D dengan dukungan scripting menggunakan C# dan tools visual.",
    project: "Coming Soon",
    },
    {
      title: "Roblox Studio",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Roblox_Studio_logo_-_2022.svg",
      deskripsi:
        "Unity adalah game engine yang powerful untuk membuat game 2D dan 3D dengan dukungan scripting menggunakan C# dan tools visual.",
      project: "Coming Soon",
      },
];

const SkillSection = () => {
  const [aktifSection, setAktifSection] = useState<Skill | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div id="main" className="flex flex-col justify-center h-full w-full text-white mx-5">
      <h1 className="text-4xl tracking-widest mb-8">SKILL</h1>

      {/* Flex container kiri-kanan */}
      <div className="flex flex-wrap lg:flex-row gap-6 oferflow-hidden">
        {/* KIRI: Div Utama / Card */}
        <div className="flex gap-6 overflow-x-auto flex-nowrap pb-4">
          {skills.map((skill, i) => {
            // Sembunyikan skill lain saat salah satu aktif
            if (aktifSection && aktifSection.title !== skill.title) return null;

            return (
              <div
                key={skill.title}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <a href="#">
                  <img className="rounded-t-lg" src={skill.img} alt={skill.title} />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {skill.title}
                  </h5>
                  <button
                    onClick={() => setAktifSection(skill)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}

          {/* KANAN: Penjelasan skill yang sedang aktif */}
          {aktifSection && (
            <div
              className="h-auto p-6 bg-white text-black rounded-lg shadow-md dark:bg-gray-800 dark:text-white w-75"
              data-aos="fade-left"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{aktifSection.title}</h2>
                <button
                  onClick={() => setAktifSection(null)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Close
                </button>
              </div>
              <p className="mt-4 font-semibold">Project: {aktifSection.project}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
