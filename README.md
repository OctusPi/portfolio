# Portfólio Vue.js com Tailwind CSS

Este é um portfólio utilizando Vue.js (Composition API) e Tailwind CSS para a criação de uma interface moderna e responsiva. O projeto está configurado com um ambiente básico de desenvolvimento e segue as melhores práticas para desenvolvimento front-end com Vue e Tailwind.

## Índice

- Sobre
- Pré-requisitos
- Instalação
- Como usar
- Estrutura de Diretórios
- Comandos Disponíveis
- Customizando o Tailwind
- Contribuindo
- Licença

## Sobre

- Vue 3 com Composition API
- Tailwind CSS para um design responsivo e moderno
- Configuração de desenvolvimento rápida usando Vite para bundling e live-reload

## Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- Node.js (versão 18+)
- npm ou yarn

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

git clone https://github.com/seu-usuario/seu-projeto.git

2. Navegue até o diretório do projeto:

cd seu-projeto

3. Instale as dependências:

npm install

ou, se estiver usando yarn:

yarn install

## Como usar

Após a instalação, inicie o servidor de desenvolvimento com o comando:

npm run dev

ou

yarn dev

O projeto estará disponível em http://localhost:3000.

## Estrutura de Diretórios

├── public/              # Arquivos públicos
├── src/                 # Código-fonte do projeto
│   ├── assets/          # Arquivos de mídia e CSS
│   ├── components/      # Componentes Vue.js reutilizáveis
│   ├── views/           # Páginas Vue.js
│   ├── App.vue          # Componente raiz
│   ├── main.js          # Ponto de entrada da aplicação
├── tailwind.config.js   # Configurações do Tailwind CSS
├── package.json         # Configurações do projeto e dependências
└── vite.config.js       # Configurações do Vite

## Comandos Disponíveis

- npm run dev ou yarn dev: Inicia o servidor de desenvolvimento com hot-reload.
- npm run build ou yarn build: Gera os arquivos para produção.
- npm run preview ou yarn preview: Pré-visualiza o projeto gerado para produção.

## Customizando o Tailwind

O arquivo tailwind.config.js permite que você personalize a configuração do Tailwind CSS, incluindo:

- Paleta de cores
- Breakpoints
- Spacing
- Fonts

Exemplo de configuração customizada:

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#64748B',
      },
    },
  },
  plugins: [],
}

Para mais detalhes, consulte a documentação oficial do Tailwind CSS: https://tailwindcss.com/docs.

## Contribuindo

Contribuições são bem-vindas! Se você quiser colaborar com o projeto:

1. Faça um fork do repositório
2. Crie uma branch com sua feature: git checkout -b minha-feature
3. Faça o commit das suas mudanças: git commit -m 'Adiciona minha feature'
4. Envie sua branch: git push origin minha-feature
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a MIT License.
