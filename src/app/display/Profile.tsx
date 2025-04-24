import { useRef } from 'react';

const ProjectSection = () => {
  // Umur Dan Tanngal Lahir Di bawah ini
  const birthDate = new Date("2006-11-26");
  const today = new Date();

  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0); // Menghitung umur berdasarkan tanggal lahir
  const experience = today.getFullYear() - 2023; // Menghitung pengalaman kerja dari tahun 2023

  return (
    <div className="flex p-4 gap-0 w-150 h-screen">
      <main className="flex flex-col p-4 gap-3 bg-gradient-to-b from-black/60 to-black/50 text-white w-full h-full rounded-lg shadow-lg">
        {/* Bagian Atas */}
        <div
          className={`relative flex gap-3 w-120 h-50 bg-[url('/bg1.png')] bg-cover bg-center rounded-lx`}
          id="atas"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-20 h-20 object-cover border-3 border-yellow-700 m-2"
          />
          <div className="flex flex-col justify-start py-3 flex-1 rounded-r-md">
            <div className="flex items-center space-x-2 mb-4">
              <img
                alt="Small red and white flag icon"
                className="w-5 h-5"
                src="../indonesia.png"
              />
              <span className="text-white text-sm px-1 py-0.5 font-semibold">
                Muhammad Fairuz Atha
              </span>
              <img src="../male.png" alt="" className="w-5 h-5" />
            </div>
            <div className="whitespace-nowrap">
              <span className="text-white text-sm px-1 py-0.5 font-semibold">
                Age: {age}
              </span>
            </div>
          </div>
        </div>

        {/* Bagian Tengah */}
        <div
          className="px-10 h-10 w-10 flex items-center justify-center border-2 border-b-0 rounded-xl"
          id="tengah"
        >
          <h3>Skill</h3>
        </div>

        {/* Bagian Bawah */}
        <div className="flex gap-3 w-full h-auto border-b-2">
          <div
            className="flex overflow-x-auto scrollbar-hide whitespace-nowrap gap-5 p-4"
            id="item"
          >
            {/* JavaScript */}
            <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center border-r p-5">
              <img src="../js.png" alt="JavaScript" className="w-16 h-16 border" />
              <h3>JavaScript: Beginner</h3>
            </div>

            {/* PHP */}
            <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center border-r p-5">
              <img src="../php.png" alt="PHP" className="w-16 h-16" />
              <h3>PHP: Beginner</h3>
            </div>

            {/* Blender */}
            <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center border-r p-5">
              <img src="../blender_logo.png" alt="Blender" className="w-auto h-16" />
              <h3>Blender: Beginner</h3>
            </div>

  
            {/* Unity */}
            <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center p-5">
              <img src="../unity.png" alt="Unity" className="w-auto h-16" />
              <h3>Unity: Junior</h3>
            </div>
          </div>
        </div>



        {/* Bagian Bawah 2 */}
        <div id="bawah2" className="flex gap-3 w-120 h-50 border-b-1 px-10 justify-center items-center">
          <div id="experience" className="flex flex-col gap-1 justify-center items-center p-5 font-semibold">
            <h3>Experience</h3>
            <p>{experience} Years</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectSection;
