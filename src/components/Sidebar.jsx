import profileImage from "../assets/WhatsApp Image 2023-03-10 at 8.35.34 PM.jpeg";


export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col items-center sticky top-0 h-screen">
      <img
        src={profileImage}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"
      />
      <h1 className="text-xl font-bold text-center mb-2">Mohammad Shahil Khan</h1>
      <a
        href="https://drive.google.com/file/d/1d7KP2D9fixd_fyjHaIpk-waeEpkCNvt7/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="mt-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-500"
      >
        Download CV
      </a>

      {/* Social Icons */}
      <div className="flex gap-4 text-xl mt-4">
        <a href="https://github.com/shahilkhan001" target="_blank" rel="noreferrer">
          <i className="fab fa-github hover:text-blue-400"></i>
        </a>
        <a href="https://linkedin.com/in/mohammad-shahil-khan" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin hover:text-blue-400"></i>
        </a>
      </div>
    </aside>
  );
}
