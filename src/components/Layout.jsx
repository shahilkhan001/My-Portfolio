import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-6 py-10">{children}</main>
    </div>
  );
}
