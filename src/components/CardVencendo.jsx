import { Calendar } from "lucide-react";

export default function CardVencendo({ dados = [] }) {
  // Lógica para calcular itens vencendo em 30 dias
  const hoje = new Date();
  const em30Dias = new Date();
  em30Dias.setDate(hoje.getDate() + 30);

  const itensVencendo = dados.filter(item => {
    if (!item.validade) return false;
    
    // Converter data de "DD/MM/YYYY" para Date
    const partes = item.validade.split('/');
    const dataValidade = new Date(partes[2], partes[1] - 1, partes[0]);
    
    return dataValidade >= hoje && dataValidade <= em30Dias;
  });

  return (
    <div className="bg-white rounded-lg shadow p-3 md:p-4 border-l-4 border-orange-500">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="text-orange-600 flex-shrink-0" size={18} />
        <h3 className="text-sm md:text-base font-bold text-gray-900 truncate">
          Vencendo em 30 dias
        </h3>
        {itensVencendo.length > 0 && (
          <span className="ml-auto bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-semibold flex-shrink-0">
            {itensVencendo.length}
          </span>
        )}
      </div>
      
      {itensVencendo.length === 0 ? (
        <p className="text-xs md:text-sm text-gray-600">
          Nenhum item vencendo em breve
        </p>
      ) : (
        <div className="space-y-2">
          {itensVencendo.slice(0, 3).map(item => (
            <div key={item.id} className="pb-2 border-b border-gray-100 last:border-0">
              <div className="text-xs md:text-sm font-medium text-orange-600 truncate">
                {item.insumo}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Validade: {item.validade}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}