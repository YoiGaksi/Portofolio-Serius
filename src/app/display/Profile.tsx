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


  return (
    <div className="flex p-4 gap-0 w-150 h-screen" >
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
            data-aos="zoom-in"
          />
          <div className="flex flex-col justify-start py-3 flex-1 rounded-r-md">
            <div className="flex items-center space-x-2 mb-4">
              <img
                alt="Small red and white flag icon"
                className="w-5 h-5"
                src="../indonesia.png"
                data-aos="zoom-in"
              />
              <span className="text-white text-sm px-1 py-0.5 font-semibold" data-aos="flip-down">
                Muhammad Fairuz Atha
              </span>
              <img src="../male.png" alt="" className="w-5 h-5" data-aos="zoom-in"/>
            </div>
            <div className="whitespace-nowrap">
              <span className="text-white text-sm px-1 py-0.5 font-semibold" data-aos="zoom-in">
                Age: {age}
              </span>
            </div>
          </div>
        </div>

        {/* Bagian Tengah */}
        <div
          className="px-10 h-10 max-w-sm flex items-center justify-center border-2 border-b-0 rounded-xl"
          id="tengah"
          data-aos="fade-up"
        >
          <h3>About Me</h3>
        </div>

        {/* Bagian Bawah */}
        <div className="flex gap-3 w-full h-auto border-b-2" data-aos="fade-up">
          <div id="aboutme">

            <p className='text-justify text-l px-3 py-5'>
            Halo! Saya Muhammad Fairuz Atha, seorang pengembang web dan game yang sedang menapaki langkah awal di dunia teknologi. Meskipun saya masih fresh graduate, saya memiliki semangat tinggi untuk terus belajar dan berkembang di bidang ini.

            Saya menguasai beberapa tools dan bahasa pemrograman seperti Unity, JavaScript, dan PHP. Saat ini, saya sedang mengembangkan beberapa proyek pribadi, termasuk sebuah game yang masih dalam tahap pengembangan dan sebuah proyek web sederhana berupa chatbot.

            Saya dikenal sebagai pribadi yang cepat belajar, tekun, namun tetap membawa suasana santai dalam setiap pekerjaan yang saya lakukan. Saya sangat terbuka untuk proyek-proyek freelance dan selalu tertarik untuk menghadapi tantangan baru.
            </p>
          </div>
        </div>



        {/* Bagian Bawah 2 */}
      </main>
    </div>
  );
};

export default ProjectSection;
