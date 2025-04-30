"use client";
import { SetStateAction, useState } from "react";

const LastMatchSection = () => {
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  const openFullscreen = (img: string) => {
    setFullscreenImg(img);
  };

  const closeFullscreen = () => {
    setFullscreenImg(null);
  };

    interface Match {
        title: string;
        deskripsi: string;
        img: string;
        alasan: string;
    }

    const matches: Match[] = [
      {title: "DiCoding - Beginner Javascript", deskripsi: "Didapatkan pada tanggal 20 April 2025", img: "/docachievement/dicodingsertifikat.png", alasan: "alasan" },
      {title: "BNSP (Coming Soon)", deskripsi: "didapatkan pada ", img: "/docachievement/match1.png", alasan: "Coming Soon" },
    ];


    return (
      <div className="flex flex-col h-auto w-full text-white mx-5 py-5">
      <h1 className="text-4xl tracking-widest mb-8">ACHIEVEMENT</h1>

      <div className="flex flex-col gap-6 w-full" data-aos="fade-left" data-aos-duration="1000">
        {matches.map((match, i) => (
          <div
            key={match.title}
            className="flex flex-wrap w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#" onClick={(e) => { e.preventDefault(); openFullscreen(match.img); }}>
              <img className="rounded-t-lg w-50 cursor-pointer" src={match.img} alt={match.alasan} />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {match.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {match.deskripsi}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Fullscreen */}
      {fullscreenImg && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeFullscreen}>
          <img src={fullscreenImg} alt="Fullscreen" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </div>
    );
}

export default LastMatchSection;
// This is the Skill section. Here you can showcase your skills and expertise.