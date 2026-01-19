import { useState } from "react";
import { Camera, Search, Package, AlertCircle, CheckCircle, X } from "lucide-react";

export default function Escaneamento() {
  const [codigoManual, setCodigoManual] = useState("");
  const [usarCamera, setUsarCamera] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  // Banco de dados simulado de produtos
  const bancoProdutos = {
    "789123456789": {
      id: 1,
      codigo: "789123456789",
      insumo: "Dipirona 500mg",
      categoria: "Medicamento",
      estoque: "150 comprimidos",
      estoqueMin: "Min: 50",
      status: "Adequado",
      fornecedor: "Farmácia Central Ltda",
      validade: "14/06/2025",
      localizacao: "Prateleira A3",
    },
    "789234567890": {
      id: 2,
      codigo: "789234567890",
      insumo: "Luva Cirúrgica M",
      categoria: "Descartável",
      estoque: "25 pares",
      estoqueMin: "Min: 100",
      status: "Crítico",
      fornecedor: "Med Suprimentos S.A.",
      validade: "19/03/2026",
      localizacao: "Prateleira B1",
    },
    "789345678901": {
      id: 3,
      codigo: "789345678901",
      insumo: "Seringa 10ml",
      categoria: "Descartável",
      estoque: "200 unidades",
      estoqueMin: "Min: 80",
      status: "Adequado",
      fornecedor: "Hospitalar Plus",
      validade: "09/12/2025",
      localizacao: "Prateleira C2",
    },
  };

  const processarCodigo = () => {
    if (!codigoManual.trim()) {
      setResultado({
        tipo: "erro",
        mensagem: "Por favor, digite um código válido",
      });
      return;
    }

    setLoading(true);

    // Simular processamento
    setTimeout(() => {
      const produto = bancoProdutos[codigoManual];

      if (produto) {
        setResultado({
          tipo: "sucesso",
          produto: produto,
        });
      } else {
        setResultado({
          tipo: "erro",
          mensagem: "Produto não encontrado no sistema",
        });
      }
      setLoading(false);
    }, 1000);
  };

  const ativarCamera = () => {
    setUsarCamera(true);
    // Simular leitura de código de barras após 2 segundos
    setTimeout(() => {
      const codigosDisponiveis = Object.keys(bancoProdutos);
      const codigoAleatorio = codigosDisponiveis[Math.floor(Math.random() * codigosDisponiveis.length)];
      setCodigoManual(codigoAleatorio);
      setUsarCamera(false);
      
      const produto = bancoProdutos[codigoAleatorio];
      setResultado({
        tipo: "sucesso",
        produto: produto,
      });
    }, 2000);
  };

  const limparResultado = () => {
    setResultado(null);
    setCodigoManual("");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Adequado":
        return "text-green-600 bg-green-100";
      case "Crítico":
        return "text-red-600 bg-red-100";
      case "Baixo Estoque":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Escaneamento de Insumos
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Registre a saída de materiais do estoque
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          {/* Título do Card */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Package className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-gray-900">
              Escaneamento de Insumos
            </h2>
          </div>

          <p className="text-center text-gray-600 mb-6">
            Escaneie o código de barras ou digite o código manualmente
          </p>

          {/* Área de Câmera/Scanner */}
          <div className="mb-6">
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                usarCamera
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              {usarCamera ? (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="animate-pulse">
                      <Camera className="text-blue-600" size={64} />
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium">
                    Processando código de barras...
                  </p>
                  <div className="flex justify-center">
                    <div className="w-16 h-1 bg-blue-600 rounded animate-pulse" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Camera className="mx-auto text-gray-400" size={64} />
                  <p className="text-gray-600">
                    Aponte a câmera para o código de barras
                  </p>
                  <button
                    onClick={ativarCamera}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Ativar Câmera
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Separador */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Input Manual */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Digite o código do produto
            </label>
            <input
              type="text"
              placeholder="Ex: 789123456789"
              value={codigoManual}
              onChange={(e) => setCodigoManual(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && processarCodigo()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg"
              disabled={usarCamera}
            />

            <button
              onClick={processarCodigo}
              disabled={loading || usarCamera}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <Search size={20} />
              {loading ? "Processando..." : "Processar Código"}
            </button>
          </div>
        </div>

        {/* Resultado */}
        {resultado && (
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {resultado.tipo === "sucesso" ? (
                  <CheckCircle className="text-green-600" size={32} />
                ) : (
                  <AlertCircle className="text-red-600" size={32} />
                )}
                <h3 className="text-lg font-bold text-gray-900">
                  {resultado.tipo === "sucesso"
                    ? "Produto Encontrado"
                    : "Erro"}
                </h3>
              </div>
              <button
                onClick={limparResultado}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X size={24} />
              </button>
            </div>

            {resultado.tipo === "sucesso" ? (
              <div className="space-y-4">
                {/* Informações do Produto */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {resultado.produto.insumo}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Código: {resultado.produto.codigo}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        resultado.produto.status
                      )}`}
                    >
                      {resultado.produto.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Categoria</p>
                      <p className="text-sm font-medium text-gray-900">
                        {resultado.produto.categoria}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Estoque</p>
                      <p className="text-sm font-medium text-gray-900">
                        {resultado.produto.estoque}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Validade</p>
                      <p className="text-sm font-medium text-gray-900">
                        {resultado.produto.validade}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Localização</p>
                      <p className="text-sm font-medium text-gray-900">
                        {resultado.produto.localizacao}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Fornecedor</p>
                    <p className="text-sm font-medium text-gray-900">
                      {resultado.produto.fornecedor}
                    </p>
                  </div>
                </div>

                {/* Ações */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
                    Registrar Saída
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-red-600 font-medium">{resultado.mensagem}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Verifique o código e tente novamente
                </p>
              </div>
            )}
          </div>
        )}

        {/* Dica */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
            <div>
              <p className="text-sm font-medium text-blue-900 mb-1">
                Códigos de teste disponíveis:
              </p>
              <p className="text-xs text-blue-700">
                789123456789 • 789234567890 • 789345678901
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}