import { useState } from "react";
import { Search, Download, XCircle } from "lucide-react";

export default function Inventario({ dados = [] }) {
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  const dadosLocal = [
    {
      id: 1,
      insumo: "Dipirona 500mg",
      codigo: "789123456789",
      categoria: "Medicamento",
      estoque: "150 comprimido",
      estoqueMin: "Min: 50",
      consumoDia: "8",
      cobertura: "18 dias",
      validade: "14/06/2025",
      validadeTexto: "jun 2025",
      status: "Vencido",
      fornecedor: "Farmácia Central Ltda",
    },
    {
      id: 2,
      insumo: "Luva Cirúrgica M",
      codigo: "789234567890",
      categoria: "Descartável",
      estoque: "25 par",
      estoqueMin: "Min: 100",
      consumoDia: "45",
      cobertura: "0 dias",
      validade: "19/03/2026",
      validadeTexto: "mar 2026",
      status: "Crítico",
      fornecedor: "Med Suprimentos S.A.",
    },
    {
      id: 3,
      insumo: "Seringa 10ml",
      codigo: "789345678901",
      categoria: "Descartável",
      estoque: "200 unidade",
      estoqueMin: "Min: 80",
      consumoDia: "12",
      cobertura: "16 dias",
      validade: "09/12/2025",
      validadeTexto: "dez 2025",
      status: "Adequado",
      fornecedor: "Hospitalar Plus",
    },
    {
      id: 4,
      insumo: "Álcool 70% 1L",
      codigo: "789456789012",
      categoria: "Higiene",
      estoque: "30 frasco",
      estoqueMin: "Min: 20",
      consumoDia: "3",
      cobertura: "10 dias",
      validade: "29/08/2025",
      validadeTexto: "ago 2025",
      status: "Vencido",
      fornecedor: "Limpeza Hospitalar Ltda",
    },
    {
      id: 5,
      insumo: "Paracetamol 750mg",
      codigo: "789567890123",
      categoria: "Medicamento",
      estoque: "5 comprimido",
      estoqueMin: "Min: 40",
      consumoDia: "15",
      cobertura: "0 dias",
      validade: "24/12/2024",
      validadeTexto: "dez 2024",
      status: "Vencido",
      fornecedor: "Farmácia Central Ltda",
    },
    {
      id: 6,
      insumo: "Gaze Estéril 7x7cm",
      codigo: "789678901234",
      categoria: "Material Cirúrgico",
      estoque: "180 unidade",
      estoqueMin: "Min: 100",
      consumoDia: "25",
      cobertura: "7 dias",
      validade: "14/01/2026",
      validadeTexto: "jan 2026",
      status: "Adequado",
      fornecedor: "Med Suprimentos S.A.",
    },
  ];

  const dadosFinal = dados.length > 0 ? dados : dadosLocal;
  const categorias = [...new Set(dadosFinal.map((item) => item.categoria))];

  const dadosFiltrados = dadosFinal.filter((item) => {
    const matchNome = item.insumo.toLowerCase().includes(filtroNome.toLowerCase()) || 
                      (item.codigo && item.codigo.toLowerCase().includes(filtroNome.toLowerCase()));
    const matchCategoria = filtroCategoria === "" || item.categoria === filtroCategoria;
    const matchStatus = filtroStatus === "" || item.status === filtroStatus;
    return matchNome && matchCategoria && matchStatus;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Vencido":
        return "bg-red-100 text-red-600 border border-red-200";
      case "Crítico":
        return "bg-red-100 text-red-600 border border-red-200";
      case "Baixo Estoque":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Adequado":
        return "bg-green-100 text-green-700 border border-green-200";
      default:
        return "bg-gray-100 text-gray-600 border border-gray-200";
    }
  };

  const getCoberturaColor = (cobertura) => {
    const dias = parseInt(cobertura);
    if (dias === 0) return "text-red-600 font-semibold";
    if (dias <= 7) return "text-yellow-600 font-semibold";
    if (dias <= 10) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Filtros */}
      <div className="p-3 md:p-6 border-b border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
          Inventário Completo
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          <div className="relative sm:col-span-2 lg:col-span-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Buscar..."
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todas Categorias</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos Status</option>
            <option value="Adequado">Adequado</option>
            <option value="Crítico">Crítico</option>
            <option value="Baixo Estoque">Baixo Estoque</option>
            <option value="Vencido">Vencido</option>
          </select>

          <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
            <Download size={16} />
            <span className="hidden sm:inline">Exportar</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Insumo
              </th>
              <th className="hidden lg:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Categoria
              </th>
              <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Estoque
              </th>
              <th className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Consumo/Dia
              </th>
              <th className="hidden sm:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Cobertura
              </th>
              <th className="hidden xl:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Validade
              </th>
              <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Status
              </th>
              <th className="hidden lg:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Fornecedor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dadosFiltrados.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="text-xs md:text-sm font-medium text-gray-900">
                    {item.insumo}
                  </div>
                  {item.codigo && (
                    <div className="text-xs text-gray-500">{item.codigo}</div>
                  )}
                  {/* Mostrar categoria no mobile */}
                  <div className="lg:hidden text-xs text-gray-500 mt-1">
                    {item.categoria}
                  </div>
                </td>
                <td className="hidden lg:table-cell px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700">
                  {item.categoria}
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <div className="text-xs md:text-sm font-medium text-gray-900">
                    {item.estoque}
                  </div>
                  {item.estoqueMin && (
                    <div className="text-xs text-gray-500">{item.estoqueMin}</div>
                  )}
                </td>
                <td className="hidden md:table-cell px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700">
                  {item.consumoDia}
                </td>
                <td className={`hidden sm:table-cell px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm ${getCoberturaColor(item.cobertura)}`}>
                  {item.cobertura}
                </td>
                <td className="hidden xl:table-cell px-3 md:px-6 py-3 md:py-4">
                  <div className="text-xs md:text-sm text-gray-900">
                    {item.validade}
                  </div>
                  {item.validadeTexto && (
                    <div className="text-xs text-gray-500">{item.validadeTexto}</div>
                  )}
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}>
                    {(item.status === "Crítico" || item.status === "Vencido") && (
                      <XCircle size={12} />
                    )}
                    {item.status === "Adequado" && "✓"}
                    <span className="hidden sm:inline">{item.status}</span>
                    <span className="sm:hidden">
                      {item.status === "Crítico" ? "Crít" : 
                       item.status === "Adequado" ? "OK" : 
                       item.status === "Vencido" ? "Venc" : "Baixo"}
                    </span>
                  </span>
                </td>
                <td className="hidden lg:table-cell px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700">
                  {item.fornecedor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}