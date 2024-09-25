<template>
    <section class="mx-auto max-w-7xl justify-between p-6 lg:px-8">
        <div class="mb-6">
            <ul class="stack-list">
                <li @mouseover="() => view = techs.php">
                    <img src="@/assets/imgs/php.png" alt="logo php">
                </li>
                <li @mouseover="() => view = techs.laravel">
                    <img src="@/assets/imgs/laravel.svg" alt="logo laravel">
                </li>
                <li @mouseover="() => view = techs.js">
                    <img src="@/assets/imgs/js.png" alt="logo js">
                </li>
                <li @mouseover="() => view = techs.vue">
                    <img src="@/assets/imgs/logo.svg" alt="logo js">
                </li>
                <li @mouseover="() => view = techs.bootstrap">
                    <img src="@/assets/imgs/bootstrap.png" alt="logo bootstrap">
                </li>
                <li @mouseover="() => view = techs.tailwind">
                    <img src="@/assets/imgs/tailwind.png" alt="logo tailwind">
                </li>
                <li @mouseover="() => view = techs.java">
                    <img src="@/assets/imgs/java.png" alt="logo java">
                </li>
                <li @mouseover="() => view = techs.js">
                    <img src="@/assets/imgs/android.png" alt="logo android">
                </li>
                <li @mouseover="() => view = techs.mysql">
                    <img src="@/assets/imgs/mysql.png" alt="logo mysql">
                </li>
                <li @mouseover="() => view = techs.postgres">
                    <img src="@/assets/imgs/postgre.png" alt="logo postgre">
                </li>
                <li @mouseover="() => view = techs.docker">
                    <img src="@/assets/imgs/docker.png" alt="logo docker">
                </li>
                <li @mouseover="() => view = techs.github">
                    <img src="@/assets/imgs/github.png" alt="logo github">
                </li>
            </ul>
        </div>
        <div>
            <h1 class="text-8xl font-bold tracking-tight sm:text-8xl" :class="view?.style">{{ view?.title }}</h1>
            <p class="mt-4 text-xl text-gray-500">{{ view?.desc }}</p>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue'

    const techs = ref({
        'php':{style:'php', title: 'PHP 8.3', desc:'A mais recente versão da linguagem de programação popular para desenvolvimento web, trazendo melhorias de desempenho, novos recursos de sintaxe e maior segurança. Ele é amplamente utilizado para criar aplicações server-side robustas.'},
        'laravel':{style:'laravel', title: 'Laravel 11', desc:'Framework PHP de alta popularidade, oferece uma estrutura elegante e expressiva para o desenvolvimento de aplicações web. Ele simplifica tarefas como roteamento, sessões e autenticação, tornando o desenvolvimento mais rápido e organizado.'},
        'js':{style:'js', title: 'JavaScript', desc:'Linguagem de programação essencial para desenvolvimento web frontend, permitindo a criação de interfaces dinâmicas e interativas. Ela pode ser usada tanto no cliente (navegador) quanto no servidor, por meio do Node.js.'},
        'vue':{style:'vue', title: 'Vue.js', desc:'Framework JavaScript progressivo utilizado para criar interfaces de usuário reativas e componentes reutilizáveis. Com sua composição API, Vue.js facilita a criação de aplicações frontend complexas com gerenciamento eficiente de estado e dados.'},
        'java':{style:'java', title: 'Java Mobile', desc:'Desenvolvimento de aplicativos móveis, especialmente no Android. Com o Java, desenvolvedores podem criar aplicativos nativos com acesso direto ao hardware e sistemas operacionais dos dispositivos.'},
        'bootstrap':{style:'bootstrap', title: 'Bootstrap', desc:'Framework CSS que facilita o design responsivo e adaptável para a web. Ele oferece uma coleção de componentes prontos e estilos que aceleram o desenvolvimento frontend.'},
        'tailwind':{style:'tailwind', title: 'Tailwind', desc:'Abordagem utilitária ao design de interfaces web, permitindo um controle mais granular e personalizado dos estilos, sem a necessidade de criar classes CSS personalizadas. Ele é altamente flexível e focado em produtividade.'},
        'mysql':{style:'mysql', title: 'MySQL', desc:'Sistema de gerenciamento de banco de dados relacional amplamente utilizado, conhecido por sua simplicidade e velocidade. Ele é muito popular em aplicações web por ser fácil de configurar e usar, especialmente em conjunto com linguagens como PHP.'},
        'postgres':{style:'postgres', title: 'PostgreSQL', desc:'Sistema de gerenciamento de banco de dados relacional avançado, conhecido por seu suporte a operações complexas e por seguir rigorosamente os padrões SQL. Ele é preferido em aplicações que exigem um gerenciamento mais complexo de dados, como transações e consultas sofisticadas, além de suportar JSON e tipos de dados geográficos.'},
        'docker':{style:'docker', title: 'Docker', desc:'Gerenciamento de contêineres, ambientes isolados que contêm aplicações e suas dependências, facilitando a portabilidade, o desenvolvimento e a implantação de software de forma eficiente e consistente em diferentes plataformas.'},
        'github':{style:'github', title: 'GitHub Actions', desc:'Ferramenta de integração contínua e entrega contínua (CI/CD) integrada ao GitHub. Ela permite a automação de fluxos de trabalho de desenvolvimento de software diretamente dentro dos repositórios do GitHub, facilitando a criação, teste e deploy de aplicações em diferentes ambientes de forma automatizada.'}
    })

    const view = ref({style:'php', title: 'PHP 8.3', desc:'A mais recente versão da linguagem de programação popular para desenvolvimento web, trazendo melhorias de desempenho, novos recursos de sintaxe e maior segurança. Ele é amplamente utilizado para criar aplicações server-side robustas.'})
</script>

<style scoped>

    .stack-list img:hover{
        cursor: pointer;
    }

    .php{
        background: -webkit-linear-gradient(180deg, #314589, rgb(186, 200, 244));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .laravel{
        background: -webkit-linear-gradient(180deg, rgb(225, 148, 148), #ff4646);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .js{
        background: -webkit-linear-gradient(180deg, #fef5b7, #f6dc35);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .vue{
        background: -webkit-linear-gradient(180deg, #defff1, #29845b);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .bootstrap{
        background: -webkit-linear-gradient(180deg, #dab5fa, #592e82);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .tailwind{
        background: -webkit-linear-gradient(180deg, #1b5aa8, #06B5D4);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .java{
        background: -webkit-linear-gradient(180deg, #c27516, #f6cd99);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .mysql{
        background: -webkit-linear-gradient(180deg, #c27516, #f6cd99);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .postgres{
        background: -webkit-linear-gradient(180deg, #89c3f2, #336791);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .docker{
        background: -webkit-linear-gradient(180deg, #0159a1, #419de8);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .github{
        background: -webkit-linear-gradient(180deg, #4b3f89, #5C6BC0);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>