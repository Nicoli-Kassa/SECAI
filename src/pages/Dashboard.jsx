import PainelCards from "../components/PainelCards";
import Inventario from "../components/Inventario";
import CardItensCriticos from "../components/CardItensCriticos";
import CardBaixoEstoque from "../components/CardBaixoEstoque";
import CardVencendo from "../components/CardVencendo";

const dadosInventario = [
  {
    id: 1,
    insumo: "Dipirona",
    categoria: "Medicamento",
    estoque: "150 comprimidos",
    consumoDia: "8",
    cobertura: "18 dias",
    validade: "14/06/2025",
    status: "Adequado",
    fornecedor: "Farmácia Central Ltda",
  },
  {
    id: 2,
    insumo: "Luva",
    categoria: "Descartável",
    estoque: "25 pares",
    consumoDia: "45,12",
    cobertura: "0 dias",
    validade: "19/03/2025",
    status: "Crítico",
    fornecedor: "Med Suprimentos SA",
  },
  {
    id: 3,
    insumo: "Álcool 70%",
    categoria: "Descartável",
    estoque: "500ml",
    consumoDia: "2",
    cobertura: "250 dias",
    validade: "15/12/2026",
    status: "Adequado",
    fornecedor: "Farmácia Central Ltda",
  },
  {
    id: 4,
    insumo: "Seringa",
    categoria: "Descartável",
    estoque: "10 unidades",
    consumoDia: "25",
    cobertura: "0 dias",
    validade: "20/05/2025",
    status: "Crítico",
    fornecedor: "Med Suprimentos SA",
  },
  {
    id: 5,
    insumo: "Gaze",
    categoria: "Descartável",
    estoque: "30 unidades",
    consumoDia: "5",
    cobertura: "6 dias",
    validade: "10/11/2025",
    status: "Baixo Estoque",
    fornecedor: "Farmácia Central Ltda",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:ml-0">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Dashboard Almoxarifado
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Visão geral do estoque e alertas importantes
          </p>
        </div>

        {/* Painel de Cards */}
        <PainelCards dados={dadosInventario} />

        {/* Layout Principal: Tabela + Cards Laterais */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          {/* Tabela de Inventário - ocupa 2 colunas no desktop */}
          <div className="xl:col-span-2 order-2 xl:order-1">
            <Inventario dados={dadosInventario} />
          </div>

          {/* Cards Laterais - ocupa 1 coluna */}
          <div className="space-y-3 md:space-y-4 order-1 xl:order-2">
            <CardItensCriticos dados={dadosInventario} />
            <CardVencendo dados={dadosInventario} />
            <CardBaixoEstoque dados={dadosInventario} />
          </div>
        </div>
      </div>
    </div>
  );
}
