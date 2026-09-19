// Conteúdo do portfólio centralizado: edite aqui para atualizar o site.

export const profile = {
    name: 'Francisco Rodrigues',
    role: 'Desenvolvedor Full Stack',
    headline: 'Construo sistemas web e apps Android que resolvem problemas reais, do banco de dados à interface.',
    summary: [
        'Desenvolvedor Full Stack com mais de 10 anos de experiência criando sistemas web e aplicativos mobile Android. Participei de diversos projetos em produção, de sistemas escolares a aplicativos de acessibilidade para o setor público.',
        'Experiência sólida em backend com PHP (Laravel) e frontend com Vue.js (Composition API), além de bancos de dados relacionais, análise de dados e automação de deploy. Familiaridade com padrões de projeto, estrutura de dados e desenvolvimento de APIs RESTful.'
    ],
    email: 'octuspi@gmail.com',
    github: 'https://github.com/OctusPi',
    location: 'Campos Sales, CE · Brasil',
    photo: '/imgs/bg.jpeg',
    // Mostra o selo "Disponível para novas oportunidades" no topo
    openToWork: true,
    careerStart: 2014
}

export const sections = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'stack', label: 'Stack' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
]

export const highlights = [
    'Padrões de projeto aplicados a soluções escaláveis e manuteníveis',
    'Estrutura de dados aplicada em soluções de alta performance',
    'APIs RESTful seguindo boas práticas de design',
    'Automação de deploy com GitHub Actions (CI/CD)',
    'Ambientes Docker e Docker Compose para deploy de aplicações',
    'Publicação de aplicativos Android na Google Play Store'
]

export const education = {
    course: 'Bacharelado em Sistemas de Informação',
    school: 'Universidade Estácio de Sá',
    year: 2021
}

export const stack = [
    {
        group: 'Backend',
        items: [
            { name: 'PHP 8.3', img: '/imgs/php.png', desc: 'Aplicações server-side robustas com os recursos modernos da linguagem.' },
            { name: 'Laravel', img: '/imgs/laravel.svg', desc: 'Roteamento, autenticação, filas e APIs RESTful com código organizado.' }
        ]
    },
    {
        group: 'Frontend',
        items: [
            { name: 'JavaScript', img: '/imgs/js.png', desc: 'Interfaces dinâmicas e interativas no navegador.' },
            { name: 'Vue.js 3', img: '/imgs/logo.svg', desc: 'Componentes reativos e reutilizáveis com Composition API.' },
            { name: 'Tailwind CSS', img: '/imgs/tailwind.png', desc: 'Interfaces responsivas com estilização utilitária.' },
            { name: 'Bootstrap', img: '/imgs/bootstrap.png', desc: 'Layouts responsivos com componentes prontos.' }
        ]
    },
    {
        group: 'Mobile',
        items: [
            { name: 'Java', img: '/imgs/java.png', desc: 'Aplicativos Android nativos com acesso ao hardware do dispositivo.' },
            { name: 'Android', img: '/imgs/android.png', desc: 'Apps publicados na Google Play Store.' }
        ]
    },
    {
        group: 'Dados',
        items: [
            { name: 'MySQL', img: '/imgs/mysql.png', desc: 'Bancos relacionais rápidos para aplicações web.' },
            { name: 'PostgreSQL', img: '/imgs/postgre.png', desc: 'Consultas complexas, transações e SQL nativo.' }
        ]
    },
    {
        group: 'DevOps',
        items: [
            { name: 'Docker', img: '/imgs/docker.png', desc: 'Ambientes isolados e deploy consistente com Docker Compose.' },
            { name: 'GitHub Actions', img: '/imgs/github.png', desc: 'Pipelines de integração e entrega contínua (CI/CD).' }
        ]
    }
]

export const experience = [
    {
        role: 'Desenvolvedor Full Stack',
        company: 'Projetos web e mobile',
        period: '2014 — Presente',
        current: true,
        desc: 'Desenvolvimento e manutenção de sistemas em produção para web e Android, do levantamento de requisitos ao deploy automatizado.',
        tags: ['PHP', 'Laravel', 'Vue.js', 'Java', 'Docker', 'CI/CD']
    },
    {
        role: 'Analista de Dados',
        company: 'Prefeitura de Campos Sales — CE',
        period: '2010 — 2020',
        desc: 'Análise e tratamento da base de dados do Cadastro Único por 10 anos, garantindo a qualidade das informações usadas em programas sociais.',
        tags: ['Análise de dados', 'SQL', 'Cadastro Único']
    }
]

// Projeto em destaque (em desenvolvimento)
export const spotlight = {
    name: 'ClinicBox',
    tagline: 'Plataforma completa para gestão de clínicas, do totem de senhas ao laudo assinado.',
    status: 'Em desenvolvimento',
    features: [
        { title: 'Fila e senhas', desc: 'Totem de emissão, prioridades (60+, 80+, gestantes), chamada por guichê, painel de TV e impressão ESC/POS.' },
        { title: 'Prontuário (PEP)', desc: 'Triagem com classificação de risco, atendimentos com assinatura imutável (SHA-256), adendos e linha do tempo unificada.' },
        { title: 'Exames', desc: 'Formulários de laudo configuráveis, fila por especialidade, anexos cifrados, laudos com versão e retificação.' },
        { title: 'Laboratórios', desc: 'Pedidos em FHIR R4 por API, webhook assinado (HMAC), recebimento de resultados e aviso automático de cancelamento.' },
        { title: 'Financeiro', desc: 'Abertura e fechamento de caixa com conferência, lançamentos com estorno e fluxo de caixa.' },
        { title: 'Administração', desc: 'RBAC com 25 permissões, especialidades sigilosas, impressoras, serviços da fila e auditoria.' },
        { title: 'Multi-tenant', desc: 'Criação e suspensão de clínicas, cada uma com banco de dados e chave de criptografia próprios.' }
    ],
    tags: ['FHIR R4', 'HMAC', 'RBAC', 'SHA-256', 'Multi-tenant', 'ESC/POS']
}

// Sistemas no ar
export const projects = [
    {
        name: 'BeautyBox',
        url: 'https://beautybox.octuspi.com/',
        desc: 'Gestão para salões e negócios de beleza.',
        features: ['Agenda inteligente com horários e profissionais', 'Serviços e comissões, do atendimento ao repasse', 'Caixa e vendas com faturamento em tempo real'],
        tags: ['SaaS', 'Beleza']
    },
    {
        name: 'DeliveryBox',
        url: 'https://deliverybox.octuspi.com/',
        desc: 'Toda a operação do delivery em um lugar só, com cardápio digital.',
        features: ['Pedidos em tempo real, do balcão ao cardápio online', 'Entregas com zonas, entregadores e status de rota', 'Financeiro integrado: caixa, contas e recebimentos'],
        tags: ['SaaS', 'Delivery']
    },
    {
        name: 'Gestor CESC',
        url: 'https://gestorcesc.com.br/',
        desc: 'Sistema de gestão escolar.',
        features: ['Matrículas e enturmação centralizadas', 'Frequência diária com folha de chamada', 'Notas, resultados finais e boletins em PDF'],
        tags: ['Educação']
    },
    {
        name: 'Tempo de Crescer',
        url: 'https://tempodecrescer.octuspi.com/',
        desc: 'Fila de atendimentos, agenda de sessões e laudos técnicos para crianças atendidas.',
        features: ['Fila e agenda com prioridades sempre atualizadas', 'Histórico completo de cada criança', 'Acesso controlado por perfil'],
        tags: ['Saúde', 'Setor público']
    },
    {
        name: 'Regulação Campos Sales',
        url: 'https://regulacaocampossales.octuspi.com/auth',
        desc: 'Central de regulação para a equipe acompanhar filas e decidir com dados.',
        features: ['Fila em tempo real com priorização automática', 'Trilha auditável de cada decisão', 'Indicadores de espera e produtividade por unidade'],
        tags: ['Saúde', 'Setor público']
    }
]

// Projetos anteriores, sem link público
export const pastProjects = [
    { name: 'Educa Plus', desc: 'Avaliações escolares e relatórios de desempenho baseados nos descritores do MEC.' },
    { name: 'Busca Ativa Escolar', desc: 'Monitoramento de frequência com notificações em tempo real para coordenadores e responsáveis.' },
    { name: 'Metaprocesso', desc: 'Gestão de compras governamentais, da criação à homologação e publicação.' },
    { name: 'Carteira Digital Tempo de Crescer', desc: 'App Android que garante acesso prioritário a serviços públicos para crianças com deficiência.' }
]
