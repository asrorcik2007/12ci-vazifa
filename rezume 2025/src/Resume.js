import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-400">Asrorbek Gulomov</h1>
        <p className="text-center text-gray-300">Frontend Developer | React.js | JavaScript</p>

        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-xl font-semibold text-blue-300">📧 Kontakt</h2>
          <p>Email: asrorcik1@gmail.com</p>
          <p>Telefon: +998 90 141 07 30</p>
          <p>
            GitHub: <a href="https://github.com/asrorcik2007" className="text-blue-400">github.com/asrorcik2007</a>
          </p>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-xl font-semibold text-blue-300">🛠 Texnik Ko‘nikmalar</h2>
          <ul className="list-disc pl-5">
            <li>HTML5, CSS3, Tailwind CSS</li>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React.js, Redux Toolkit</li>
            <li>Git, GitHub, API integratsiyasi</li>
            <li>Firebase, REST API</li>
          </ul>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-xl font-semibold text-blue-300">📌 Tajriba</h2>
          <p>Freelance Frontend Developer (2024 - Hozirgi vaqt)</p>
          <ul className="list-disc pl-5">
            <li>React va JavaScript asosida veb-illovalar yaratish</li>
            <li>Figma dizaynlarini kodga aylantirish</li>
            <li>Git va GitHub yordamida jamoa bilan ishlash</li>
          </ul>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-xl font-semibold text-blue-300">🎓 Ta’lim</h2>
          <p>Najot Ta’lim – Frontend Development (React.js) (2024 - Hozirgi vaqt)</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;