import { useState } from "react";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formParams = new URLSearchParams();
    formData.forEach((value, key) => {
      formParams.append(key, value.toString());
    });

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzXzeZFBoeyFRrYZdlC2jG_-cdDMLU3nfK2UFOAQ9Z6YtnZmFnzcIU1_speG2nVLCw9PA/exec',
        {
          method: 'POST',
          body: formParams,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengirim pesan, server tidak merespons dengan benar.");
      }

      const result = await response.text();
      console.log(result);

      if (result.trim().toLowerCase().includes("berhasil")) {
        alert("Pesan berhasil dikirim!");
        form.reset();
      } else {
        setErrorMessage("Gagal mengirim pesan! Silakan coba lagi.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan, silakan coba lagi.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 p-4 rounded shadow-md w-full">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4 w-250 mx-auto p-4">
        <input
          type="text"
          name="nama"
          placeholder="Your Name"
          className="p-2 rounded border"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 rounded border"
          required
        />
        <textarea
          name="isi_pesan"
          placeholder="Your Message"
          className="p-2 rounded border"
          required
        />
        <button
          type="submit"
          disabled={sending}
          className="bg-red-600 text-white py-2 rounded hover:bg-red-400 transition duration-300 ease-in-out"
        >
          {sending ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
