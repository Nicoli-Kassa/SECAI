import { Package, XCircle, AlertTriangle, Clock, Calendar } from "lucide-react";

export default function PainelCards({ dados = [] }) {
  const totalItens = dados.length;
  const itensCriticos = dados.filter(item => item.status === "Crítico").length;
  const itensVencidos = dados.filter(item => item.status === "Vencido").length;
  const estoquesBaixos = dados.filter(item => item.status === "Baixo Estoque").length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 mb-4 md:mb-6">
      {/* Insumos em Estoque */}
      <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-blue-500">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 uppercase mb-1 truncate">
              Insumos em Estoque
            </p>
            <p className="text-2xl md:text-3xl font-bold text-blue-600">
              {totalItens}
            </p>
            <p className="text-xs text-gray-500 mt-1">Total de itens</p>
          </div>
          <Package className="text-blue-500 flex-shrink-0" size={28} />
        </div>
      </div>

      {/* Itens Críticos */}
      <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-red-500">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 uppercase mb-1 truncate">
              Itens Críticos
            </p>
            <p className="text-2xl md:text-3xl font-bold text-red-600">
              {itensCriticos}
            </p>
            <p className="text-xs text-gray-500 mt-1">Reposição urgente</p>
          </div>
          <XCircle className="text-red-500 flex-shrink-0" size={28} />
        </div>
      </div>

      {/* Estoque Baixo */}
      <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-yellow-500">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 uppercase mb-1 truncate">
              Estoque Baixo
            </p>
            <p className="text-2xl md:text-3xl font-bold text-yellow-600">
              {estoquesBaixos}
            </p>
            <p className="text-xs text-gray-500 mt-1">Atenção necessária</p>
          </div>
          <AlertTriangle className="text-yellow-500 flex-shrink-0" size={28} />
        </div>
      </div>

      {/* Último Escaneamento */}
      <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-purple-500">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 uppercase mb-1 truncate">
              Último Escaneamento
            </p>
            <p className="text-xl md:text-2xl font-bold text-purple-600">
              Há 2 horas
            </p>
            <p className="text-xs text-gray-500 mt-1">Sistema atualizado</p>
          </div>
          <Clock className="text-purple-500 flex-shrink-0" size={28} />
        </div>
      </div>

      {/* Vencendo em Breve */}
      <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-orange-500">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 uppercase mb-1 truncate">
              Vencendo em Breve
            </p>
            <p className="text-2xl md:text-3xl font-bold text-orange-600">0</p>
            <p className="text-xs text-gray-500 mt-1">Próximos 30 dias</p>
          </div>
          <Calendar className="text-orange-500 flex-shrink-0" size={28} />
        </div>
      </div>

      {/* Itens Vencidos */}
      <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-red-500">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 uppercase mb-1 truncate">
              Itens Vencidos
            </p>
            <p className="text-2xl md:text-3xl font-bold text-red-600">
              {itensVencidos}
            </p>
            <p className="text-xs text-gray-500 mt-1">Retirada necessária</p>
          </div>
          <XCircle className="text-red-500 flex-shrink-0" size={28} />
        </div>
      </div>
    </div>
  );
}