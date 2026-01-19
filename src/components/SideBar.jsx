import { LayoutDashboard, ScanLine, BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";

export default function SideBar({ paginaAtual, onChangePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "escaneamento", icon: ScanLine, label: "Escaneamento" },
    { id: "relatorios", icon: BarChart3, label: "Relatórios" },
  ];

  const statusGeral = [
    { label: "Estoque OK", cor: "bg-green-500", porcentagem: "85%" },
    { label: "Atenção", cor: "bg-yellow-500", porcentagem: "12%" },
    { label: "Crítico", cor: "bg-red-500", porcentagem: "3%" },
  ];

  return (
    <>
      {/* Botão Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-white border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          flex flex-col
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SECAI</h1>
              <p className="text-sm text-gray-500">Almoxarifado DASA</p>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex-1 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
            Navegação
          </p>
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = paginaAtual === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onChangePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Status Geral */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
            Status Geral
          </p>
          <div className="space-y-3">
            {statusGeral.map((status, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${status.cor}`} />
                  <span className="text-sm text-gray-700">{status.label}</span>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    status.cor === "bg-green-500"
                      ? "text-green-600"
                      : status.cor === "bg-yellow-500"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {status.porcentagem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}