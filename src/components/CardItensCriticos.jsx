import { XCircle } from "lucide-react";

export default function CardItensCriticos({ dados = [] }) {
  const itensCriticos = dados.filter(item => item.status === "Crítico");

  return (
    <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-red-500">
      <div className="flex items-center gap-2 mb-3">
        <XCircle className="text-red-600 flex-shrink-0" size={18} />
        <h3 className="text-sm md:text-base font-bold text-gray-900">
          Itens Críticos
        </h3>
        <span className="ml-auto bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-semibold">
          {itensCriticos.length}
        </span>
      </div>
      
      {itensCriticos.length === 0 ? (
        <p className="text-xs md:text-sm text-gray-600">Nenhum item crítico</p>
      ) : (
        <div className="space-y-2">
          {itensCriticos.slice(0, 3).map(item => (
            <div key={item.id} className="pb-2 border-b border-gray-100 last:border-0">
              <div className="text-xs md:text-sm font-medium text-red-600 truncate">
                {item.insumo}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Estoque: {item.estoque}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}