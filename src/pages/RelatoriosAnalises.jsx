import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Download } from "lucide-react";

export default function RelatoriosAnalises() {
  // Dados para o gráfico de linha (Consumo)
  const dadosConsumo = [
    { mes: "Jan", valor: 45 },
    { mes: "Fev", valor: 52 },
    { mes: "Mar", valor: 48 },
    { mes: "Abr", valor: 61 },
    { mes: "Mai", valor: 55 },
    { mes: "Jun", valor: 47 },
    { mes: "Jul", valor: 50 },
  ];

  // Dados para o gráfico de pizza (Distribuição por Categoria)
  const dadosCategoria = [
    { name: "Medicamento", value: 35, cor: "#3B82F6" },
    { name: "Descartável", value: 30, cor: "#EF4444" },
    { name: "Higiene", value: 20, cor: "#10B981" },
    { name: "Material Cirúrgico", value: 15, cor: "#F59E0B" },
  ];

  // Dados para o gráfico de barras (Consumo por Setor)
  const dadosSetor = [
    { setor: "UTI", consumo: 85 },
    { setor: "Emergência", consumo: 72 },
    { setor: "Enfermaria", consumo: 65 },
    { setor: "Centro Cirúrgico", consumo: 70 },
    { setor: "Ambulatório", consumo: 80 },
  ];

  // Dados da tabela de movimentações
  const movimentacoes = [
    {
      id: 1,
      insumo: "Luva Estéril M",
      tipo: "Saída",
      quantidade: 200,
      setor: "UTI",
      responsavel: "Dr. Carlos Moura",
      data: "19/01/2026",
    },
    {
      id: 2,
      insumo: "Paracetamol 750mg",
      tipo: "Entrada",
      quantidade: 500,
      setor: "Farmácia Central",
      responsavel: "Ana Paula Lima",
      data: "19/01/2026",
    },
    {
      id: 3,
      insumo: "Seringa 5ml",
      tipo: "Saída",
      quantidade: 150,
      setor: "Emergência",
      responsavel: "Enf. Maria Silva",
      data: "18/01/2026",
    },
    {
      id: 4,
      insumo: "Álcool 70%",
      tipo: "Saída",
      quantidade: 100,
      setor: "3º Leste Médico",
      responsavel: "Enf. João Santos",
      data: "18/01/2026",
    },
    {
      id: 5,
      insumo: "Dipirona 500mg",
      tipo: "Saída",
      quantidade: 80,
      setor: "2º Leste Sul",
      responsavel: "Dr. Pedro Alves",
      data: "17/01/2026",
    },
  ];

  const getTipoStyle = (tipo) => {
    return tipo === "Entrada"
      ? "bg-green-100 text-green-700 border border-green-200"
      : "bg-red-100 text-red-600 border border-red-200";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:ml-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Relatórios e Análises
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Acompanhe o desempenho e movimentações do estoque
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-medium">
            <Download size={18} />
            Exportar Relatório
          </button>
        </div>

        {/* Gráficos Principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Gráfico de Linha - Consumo */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Consumo/Dias (7 dias)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dadosConsumo}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" stroke="#6B7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: "#3B82F6", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Pizza - Distribuição por Categoria */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Distribuição por Categoria
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dadosCategoria}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dadosCategoria.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Barras - Consumo por Setor */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-4 md:mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Consumo por Setor
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dadosSetor}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="setor" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
              <Tooltip />
              <Bar dataKey="consumo" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabela de Movimentações Recentes */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 md:p-6 border-b border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Movimentações Recentes
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Insumo
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Tipo
                  </th>
                  <th className="hidden sm:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Quantidade
                  </th>
                  <th className="hidden md:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Setor
                  </th>
                  <th className="hidden lg:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Responsável
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {movimentacoes.map((mov) => (
                  <tr key={mov.id} className="hover:bg-gray-50 transition">
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <div className="text-xs md:text-sm font-medium text-gray-900">
                        {mov.insumo}
                      </div>
                      {/* Mostrar setor no mobile */}
                      <div className="md:hidden text-xs text-gray-500 mt-1">
                        {mov.setor}
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getTipoStyle(
                          mov.tipo
                        )}`}
                      >
                        {mov.tipo}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700">
                      {mov.quantidade}
                    </td>
                    <td className="hidden md:table-cell px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700">
                      {mov.setor}
                    </td>
                    <td className="hidden lg:table-cell px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700">
                      {mov.responsavel}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700">
                      {mov.data}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}