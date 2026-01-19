import { useState } from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import RelatoriosAnalises from "./pages/RelatoriosAnalises";
import Escaneamento from "./pages/Escaneamento";

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState("dashboard");

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case "dashboard":
        return <Dashboard />;
      case "relatorios":
        return <RelatoriosAnalises />;
      case "escaneamento":
        return <Escaneamento />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar paginaAtual={paginaAtual} onChangePage={setPaginaAtual} />

      {/* Conteúdo Principal */}
      <main className="flex-1 lg:ml-0">{renderizarPagina()}</main>
    </div>
  );
}
