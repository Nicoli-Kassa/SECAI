# SECAI - Sistema de Escaneamento e Controle Automático de Insumos

## 📋 Sobre o Projeto

O SECAI é uma solução inovadora desenvolvida para a DASA que utiliza um dispositivo portátil de escaneamento integrado ao SAP para permitir o registro imediato do consumo de insumos hospitalares no momento da coleta.

**Problema**: A gestão manual e tardia de insumos hospitalares compromete a visibilidade em tempo real do estoque, aumenta erros de inventário e gera custos adicionais.

**Solução**: Sistema que proporciona agilidade, rastreabilidade e segurança operacional através do escaneamento automatizado integrado ao SAP.

### 🎯 Principais Benefícios

- **Eficiência Operacional**: Elimina anotações manuais, devolvendo tempo aos profissionais de saúde
- **Acuracidade**: Registro em tempo real com trilha de auditoria confiável
- **Gestão Inteligente**: Visibilidade imediata do consumo e previsão de demandas
- **Redução de Custos**: Menos desperdício e maior precisão no planejamento de compras
- **Segurança Assistencial**: Disponibilidade garantida de insumos críticos

---

## 🏗️ Estrutura do Projeto

```
frontend/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CardBaixoEstoque.jsx
│   │   ├── CardItensCriticos.jsx
│   │   ├── CardVencendo.jsx
│   │   ├── Inventario.jsx
│   │   ├── PainelCards.jsx
│   │   └── SideBar.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Escaneamento.jsx
│   │   └── RelatoriosAnalises.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server de última geração
- **ESLint** - Ferramenta de linting para manter a qualidade do código
- **CSS3** - Estilização personalizada

---

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

---

## 📱 Páginas e Componentes

### Páginas

#### 1. Dashboard (`Dashboard.jsx`)
Visão geral do almoxarifado com:
- Indicadores em cards (total de insumos, itens críticos, estoque baixo)
- Inventário completo com busca e filtros
- Painel lateral com alertas e status

#### 2. Escaneamento (`Escaneamento.jsx`)
Interface simplificada para dispositivo portátil:
- Leitura de códigos de barras/QR Code
- Opção de entrada manual
- Design inspirado em self-checkout para facilitar adoção

#### 3. Relatórios e Análises (`RelatoriosAnalises.jsx`)
Visão gerencial com:
- Gráficos de consumo diário e por setor
- Distribuição por categoria
- Tabela de movimentações recentes
- Exportação em PDF/Excel

### Componentes

- **Card.jsx**: Componente base para exibição de métricas
- **CardBaixoEstoque.jsx**: Alerta de itens com estoque baixo
- **CardItensCriticos.jsx**: Destaque para itens em nível crítico
- **CardVencendo.jsx**: Lista de itens próximos ao vencimento
- **Inventario.jsx**: Tabela completa de insumos
- **PainelCards.jsx**: Container de cards de indicadores
- **SideBar.jsx**: Barra de navegação lateral

---

## 🎨 Design UX

O protótipo foi desenvolvido com foco em:

- **Simplicidade**: Interface clara e intuitiva
- **Clareza Visual**: Uso de cores universais (verde = ok, amarelo = atenção, vermelho = crítico)
- **Navegação Rápida**: Adequado ao ambiente hospitalar onde tempo é crítico
- **Facilidade de Aprendizado**: Design inspirado em experiências familiares de autosserviço

--- 

## 📝 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

---
 
