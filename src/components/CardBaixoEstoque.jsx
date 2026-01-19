import { AlertTriangle } from "lucide-react";

export default function CardBaixoEstoque({ dados = [] }) {
  const itensBaixoEstoque = dados.filter(item => item.status === "Baixo Estoque");

  return (
    <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-yellow-500">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="text-yellow-600 flex-shrink-0" size={18} />
        <h3 className="text-sm md:text-base font-bold text-gray-900">
          Estoque Baixo
        </h3>
        {itensBaixoEstoque.length > 0 && (
          <span className="ml-auto bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-semibold">
            {itensBaixoEstoque.length}
          </span>
        )}
      </div>
      
      {itensBaixoEstoque.length === 0 ? (
        <p className="text-xs md:text-sm text-gray-600">
          Nenhum item com estoque baixo
        </p>
      ) : (
        <div className="space-y-2">
          {itensBaixoEstoque.slice(0, 3).map(item => (
            <div key={item.id} className="pb-2 border-b border-gray-100 last:border-0">
              <div className="text-xs md:text-sm font-medium text-yellow-700 truncate">
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