<template>
    <img src="/imgs/bg.jpeg" class="bg-about">
    <div class="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
        <h1
            class="text-4xl font-bold home-enfase mb-4">
            Francisco Marciano Ferreira Rodrigues
        </h1>
        <p><strong>E-mail:</strong> <a href="mailto:octuspi@gmail.com" class="text-blue-500">octuspi@gmail.com</a></p>
        <p><strong>Data de nascimento:</strong> 23/09/1991</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/OctusPi" class="text-blue-500">github.com/OctusPi</a>
        </p>

        <h2
            class="text-2xl font-semibold home-enfase mt-6">
            Formação Acadêmica
        </h2>
        <p><strong>Bacharelado em Sistema de Informação</strong></p>
        <p>Universidade Estácio de Sá - Conclusão: 2021</p>

        <h2
            class="text-2xl font-semibold home-enfase mt-6">
            Resumo Profissional
        </h2>
        <p>Desenvolvedor Full Stack com mais de 10 anos de experiência no desenvolvimento de sistemas web e aplicativos
            mobile Android. Ao longo da carreira, participei de diversos projetos em produção, desde sistemas escolares
            até aplicativos para acessibilidade.</p>
        <p>Experiência sólida em backend com PHP (Laravel) e frontend com Vue.js (Composition API), além de atuação com
            bancos de dados relacionais, análise de dados e automatização de processos de deploy. Familiaridade com
            padrões de projeto, estrutura de dados e desenvolvimento de APIs RESTful.</p>

        <h2
            class="text-2xl font-semibold home-enfase mt-6">
            Habilidades Técnicas
        </h2>
        <ul class="list-disc ml-6">
            <li>Linguagens: PHP 8.3, JavaScript, TypeScript, Java</li>
            <li>Frameworks: Laravel, Vue.js 3 (Composition API)</li>
            <li>Banco de Dados: MySQL, PostgreSQL, Consultas SQL Nativas</li>
            <li>DevOps: Docker, Docker Compose, GitHub Actions</li>
            <li>Mobile: Desenvolvimento de aplicativos Android com Java</li>
            <li>APIs: Desenvolvimento de APIs RESTful</li>
            <li>Padrões de Projeto: Aplicação de padrões de projeto em soluções escaláveis</li>
            <li>Outras: Estrutura de dados, Análise de dados, Continuous Integration (CI), Continuous Deployment (CD)
            </li>
        </ul>

        <h2
            class="text-2xl font-semibold home-enfase mt-6">
            Experiência Profissional
        </h2>
        <div>
            <p><strong>Analista de Dados</strong></p>
            <p>Prefeitura de Campos Sales - CE (2010 - 2020)</p>
            <p>Atuação como Analista da base de dados do Cadastro Único, trabalhando com análise e tratamento de dados
                por 10 anos.</p>
        </div>
        <div class="mt-4">
            <p><strong>Desenvolvedor Full Stack</strong> (2014 - Presente)</p>
            <p>Desenvolvimento e manutenção de diversos sistemas em produção, tanto para web quanto mobile. Projetos de
                destaque incluem:</p>
            <ul class="list-disc ml-6">
                <li>Sistema Educa Plus: Sistema para avaliações escolares, análise de desempenho e geração de relatórios
                    com base nos descritores educacionais do MEC.</li>
                <li>Sistema Busca Ativa Escolar: Ferramenta de monitoramento da frequência escolar, com notificações em
                    tempo real para coordenadores e responsáveis.</li>
                <li>Aplicativo Carteira Digital Tempo de Crescer: Aplicativo voltado para crianças com deficiência,
                    garantindo acesso prioritário a serviços públicos no município de Campos Sales - CE.</li>
                <li>Sistema Metaprocesso: Plataforma para gestão de compras governamentais, com todo o processo guiado
                    para criação, homologação e publicação de processos de aquisição.</li>
            </ul>
        </div>

        <h2
            class="text-2xl font-semibold home-enfase mt-6">
            Projetos Recentes
        </h2>
        <ul class="list-disc ml-6">
            <li>Educa Plus: Implementação de backend em Laravel e Vue.js para interface web.</li>
            <li>Busca Ativa Escolar: Desenvolvimento full stack e integração de notificações automáticas.</li>
            <li>Carteira Digital Tempo de Crescer: Desenvolvimento do aplicativo Android utilizando Java.</li>
            <li>Metaprocesso: Criação de um sistema robusto para a gestão completa de processos de compras
                governamentais.</li>
        </ul>

        <h2
            class="text-2xl font-semibold home-enfase mt-6">
            Experiência Complementar
        </h2>
        <ul class="list-disc ml-6">
            <li>Aplicação de padrões de projeto para criar soluções escaláveis e manuteníveis.</li>
            <li>Estrutura de dados aplicada em soluções de alta performance.</li>
            <li>Desenvolvimento de APIs RESTful seguindo boas práticas de design.</li>
            <li>Experiência com automação de deploy utilizando GitHub Actions.</li>
            <li>Configuração e gerenciamento de ambientes Docker e Docker Compose para deploy de aplicações.</li>
            <li>Publicação de aplicativos Android na Google Play Store.</li>
        </ul>
    </div>

    
</template>

<style scoped>
    .bg-about{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 50%;
    }
</style>