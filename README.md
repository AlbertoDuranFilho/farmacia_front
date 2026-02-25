### 💊 PharmaClick

**"A saúde a um clique de você."**

O PharmaClick é uma aplicação web front-end desenvolvida para o gerenciamento de categorias em um sistema de farmácia. O projeto foca em oferecer uma interface limpa, moderna e intuitiva para que administradores possam organizar os produtos da farmácia de forma eficiente.

#### ✨ Destaques

- **Gerenciamento de Categorias (CRUD):** Fluxo completo para cadastrar, listar, atualizar e deletar categorias de produtos.
- **Interface Moderna:** Estilização responsiva e componentes visuais otimizados para uma melhor experiência do usuário.
- **Navegação Fluida:** Sistema de rotas que permite a transição entre páginas sem recarregamento do navegador.
- **Feedback em Tempo Real:** Notificações personalizadas para informar o sucesso ou erro em cada operação realizada.
- **Consumo de API:** Integração robusta com o backend para persistência dos dados.

#### 💻 Tecnologias Utilizadas

- **React + TypeScript:** Base do projeto para uma interface reativa e tipagem estática, garantindo maior segurança no código.
- **Vite:** Ferramenta de build ultra-rápida para o desenvolvimento front-end moderno.
- **Tailwind CSS:** Framework utilitário para estilização rápida, responsiva e personalizada.
- **React-Router-DOM:** Gerenciamento de rotas e navegação entre as páginas da aplicação.
- **Axios:** Cliente HTTP para realizar requisições à API do backend.
- **PhosphorIcons:** Biblioteca de ícones flexível e consistente para melhorar a semântica visual.
- **ReactJS-popup:** Utilizado para a criação de modais e janelas de confirmação.
- **React-toastify:** Implementação de alertas (toasts) elegantes e não intrusivos.

#### Funcionalidades Implementadas

Atualmente, o projeto foca na gestão administrativa de categorias:

1.  **Listar Categorias:** Visualização de todas as categorias cadastradas em uma tabela ou lista organizada.
2.  **Cadastrar Categoria:** Formulário validado para a criação de novas classificações de produtos.
3.  **Atualizar Categoria:** Edição de nomes ou descrições de categorias já existentes.
4.  **Deletar Categoria:** Remoção de categorias com confirmação visual para evitar exclusões acidentais.

#### 📂 Estrutura do Projeto

- `src/`
  - `components/` — Componentes reutilizáveis (Navbar, Footer, Cards, Modais).
  - `pages/` — Páginas principais da aplicação (Home, Categorias, Formulários).
  - `services/` — Configuração do Axios e chamadas para a API.
  - `models/` — Definição das interfaces TypeScript (Ex: `Categoria.ts`).
  - `App.tsx` — Configuração das rotas e provedores globais.

#### Como executar o projeto

1.  Clone o repositório:
    ```bash
    git clone https://github.com/albertoduranfilho/farmacia-front.git
    ```
2.  Acesse a pasta do projeto:
    ```bash
    cd farmacia-front
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5.  Abra o navegador no endereço indicado pelo Vite.

#### 🚀 Próximos Passos (Roadmap)

- [ ] Implementação do CRUD de Produtos.
- [ ] Sistema de autenticação de usuários (Login/Logout).
- [ ] Barra de busca global para categorias e produtos.
- [ ] Integração com gateway de pagamento (simulado).

---

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/alberto-janeiro"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/67593467?v=44" width="100px;" alt=""/><br /><sub><b>Alberto Durán</b></sub></a><br />❤️</td>
  </tr>
</table>
