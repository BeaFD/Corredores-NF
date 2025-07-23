"use client";
import { useState } from "react";
import { ChevronLeft, Menu, FileText, LayoutDashboard, MessageCircle } from "lucide-react";
import BlogEditor from "../../components/BlogEditor";

const Sidebar = ({ selected, setSelected, collapsed, setCollapsed }: any) => (
  <aside
    className={`bg-gradient-to-b from-gray-950 to-gray-800 text-white h-screen py-6 px-2 transition-all duration-300 flex flex-col shadow-xl ${collapsed ? "w-16" : "w-56"} border-r border-gray-800`}
  >
    <button
      className="mb-8 focus:outline-none flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors h-10 w-10 self-end"
      onClick={() => setCollapsed((c: boolean) => !c)}
      title={collapsed ? "Expandir menú" : "Colapsar menú"}
      aria-label="Toggle sidebar"
    >
      {collapsed ? <Menu size={28} /> : <ChevronLeft size={28} />}
    </button>
    <nav className="flex flex-col gap-2 mt-4">
      <button
        className={`group flex items-center gap-3 py-2 px-3 rounded-lg text-left transition-all duration-150 ${selected === "blog" ? "bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg" : "hover:bg-gray-700/60"}`}
        onClick={() => setSelected("blog")}
        tabIndex={0}
      >
        <FileText className={`transition-transform duration-200 ${selected === "blog" ? "scale-110" : "group-hover:scale-105"}`} size={22} />
        {!collapsed && <span className="font-medium tracking-wide">Blog</span>}
      </button>
      <button
        className={`group flex items-center gap-3 py-2 px-3 rounded-lg text-left transition-all duration-150 ${selected === "secciones" ? "bg-gradient-to-r from-green-600 to-green-400 shadow-lg" : "hover:bg-gray-700/60"}`}
        onClick={() => setSelected("secciones")}
        tabIndex={0}
      >
        <LayoutDashboard className={`transition-transform duration-200 ${selected === "secciones" ? "scale-110" : "group-hover:scale-105"}`} size={22} />
        {!collapsed && <span className="font-medium tracking-wide">Secciones</span>}
      </button>
      <button
        className={`group flex items-center gap-3 py-2 px-3 rounded-lg text-left transition-all duration-150 ${selected === "opiniones" ? "bg-gradient-to-r from-purple-600 to-purple-400 shadow-lg" : "hover:bg-gray-700/60"}`}
        onClick={() => setSelected("opiniones")}
        tabIndex={0}
      >
        <MessageCircle className={`transition-transform duration-200 ${selected === "opiniones" ? "scale-110" : "group-hover:scale-105"}`} size={22} />
        {!collapsed && <span className="font-medium tracking-wide">Opiniones</span>}
      </button>
    </nav>
    <div className="flex-1" />
    {!collapsed && (
      <div className="text-xs text-gray-400 mt-8 px-2 select-none">
        <span className="opacity-60">Panel Admin v1.0</span>
      </div>
    )}
  </aside>
);

const Welcome = () => (
  <div className="p-10 flex flex-col items-center justify-center min-h-[60vh]">
    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl shadow-lg p-8 w-full max-w-xl border border-gray-200/30">
      <h2 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white tracking-tight">Bienvenido 👋</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300 text-lg">Gestiona el contenido principal del sitio web de forma visual y sencilla.</p>
      <ul className="list-none space-y-2 mb-4">
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><FileText size={18} className="text-blue-500" /> <span>Usa <b>Blog</b> para crear, editar y eliminar publicaciones con imágenes y formato enriquecido.</span></li>
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><LayoutDashboard size={18} className="text-green-500" /> <span>En <b>Secciones</b> puedes modificar los textos y contenidos principales.</span></li>
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><MessageCircle size={18} className="text-purple-500" /> <span>En <b>Opiniones</b> puedes gestionar testimonios y comentarios destacados.</span></li>
      </ul>
      <div className="bg-blue-100/60 border-l-4 border-blue-400 p-4 text-blue-800 rounded-lg text-sm flex items-center gap-2">
        <span className="animate-pulse">💡</span>
        <span><b>Recomendación:</b> Guarda los cambios frecuentemente y revisa la vista previa antes de publicar.</span>
      </div>
    </div>
  </div>
);

const Secciones = () => (
  <div className="p-10 flex flex-col items-center justify-center min-h-[60vh]">
    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl shadow-lg p-8 w-full max-w-xl border border-gray-200/30">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight flex items-center gap-2"><LayoutDashboard size={22} className="text-green-500" />Editar Secciones Principales</h2>
      <p className="text-gray-600 dark:text-gray-300">(Próximamente: aquí podrás editar los textos y contenidos de las secciones principales de la web.)</p>
    </div>
  </div>
);

const Opiniones = () => (
  <div className="p-10 flex flex-col items-center justify-center min-h-[60vh]">
    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl shadow-lg p-8 w-full max-w-xl border border-gray-200/30">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight flex items-center gap-2"><MessageCircle size={22} className="text-purple-500" />Gestionar Opiniones</h2>
      <p className="text-gray-600 dark:text-gray-300">(Próximamente: aquí podrás gestionar testimonios y comentarios destacados.)</p>
    </div>
  </div>
);

const AdminPage = () => {
  const [selected, setSelected] = useState<string>("welcome");
  const [collapsed, setCollapsed] = useState(false);

  let content;
  if (selected === "blog") content = <BlogEditor />;
  else if (selected === "secciones") content = <Secciones />;
  else if (selected === "opiniones") content = <Opiniones />;
  else content = <Welcome />;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Sidebar selected={selected} setSelected={setSelected} collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className="flex-1 overflow-y-auto flex flex-col items-center justify-center">
        {content}
      </main>
      <style jsx global>{`
        html { font-family: 'Jakarta Sans Variable', sans-serif; }
        .animate-fade-in-out {
          animation: fadeInOut 1.8s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default AdminPage;

// Add Material Icons CDN in _app or layout if not present for icons to show.