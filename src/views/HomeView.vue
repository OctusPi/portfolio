<template>
    <section id="about"
        class="mx-auto flex flex-col lg:flex-row max-w-7xl items-center justify-between p-6 lg:px-8 mb-8">
        <div class="flex-1 text-center lg:text-end order-2 lg:order-none mx-4">
            <h1 class="text-2xl font-bold tracking-tight sm:text-2xl home-enfase">Francisco Rodrigues</h1>
            <p><strong>E-mail:</strong> <a href="mailto:octuspi@gmail.com" class="text-blue-500">octuspi@gmail.com</a>
            </p>
            <p><strong>GitHub:</strong> <a href="https://github.com/OctusPi"
                    class="text-blue-500">github.com/OctusPi</a></p>
        </div>
        <img src="/imgs/bg.jpeg" class="bg-about order-1 lg:order-none my-4 lg:my-0 lg:mx-4">
        <div class="flex-1 text-center lg:text-start order-3 lg:order-none mx-4">
            <h1 class="text-2xl font-bold tracking-tight sm:text-2xl home-enfase">Formação Acadêmica</h1>
            <p><strong>Bacharelado em Sistema de Informação</strong></p>
            <p>Universidade Estácio de Sá - Conclusão: 2021</p>
        </div>
    </section>

    <section id="home" class="mx-auto flex flex-col lg:flex-row max-w-7xl items-center justify-between p-6 lg:px-8 mb-8">
    <div class="w-full my-6 lg:my-0 lg:w-1/2 order-1 lg:order-last">
        <img src="/imgs/decorative-home.svg" alt="Imagem Decorativa" class="mx-auto w-full max-w-md lg:max-w-full" />
    </div>
    <div class="w-full text-center lg:text-left lg:w-1/2 order-2 lg:order-first">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl home-enfase">Tech Power</h1>
        <p class="mt-4 text-xl text-gray-500">"Desenvolver software é como esculpir um caminho na floresta digital. À medida que avançamos, não apenas moldamos o código, mas também o futuro, criando trilhas que outros seguirão, explorando possibilidades e transformando desafios em oportunidades."</p>
    </div>
</section>


    <section id="techs"
        class="mx-auto flex flex-col lg:flex-row max-w-7xl items-center justify-between p-6 lg:px-8 mb-8">
        <div class="w-full text-center lg:text-left lg:w-1/2">
            <ul class="stack-list">
                <li v-for="(t, i) in techs" :key="i">
                    <img :src="t.img" :alt="t.alt">
                </li>
            </ul>
        </div>
        <div class="w-full my-6 lg:my-0 lg:w-1/2">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl home-enfase">Full Stack</h1>
            <p class="mt-4 text-xl text-gray-500">Um profissional capaz de trabalhar em
                todas as camadas de uma aplicação, desde o backend até o frontend. Com habilidades para
                desenvolver e integrar a lógica de negócios no servidor, trabalhar com bancos de dados, construir APIs e
                também criar interfaces de usuário interativas e responsivas.</p>
        </div>
    </section>
</template>

<script setup>
const techs = [
    { alt: 'Logomarca PHP', img: '/imgs/php.png' },
    { alt: 'Logomarca Laravel', img: '/imgs/laravel.svg' },
    { alt: 'Logomarca JS', img: '/imgs/js.png' },
    { alt: 'Logomarca Vue', img: '/imgs/logo.svg' },
    { alt: 'Logomarca Bootstrap', img: '/imgs/bootstrap.png' },
    { alt: 'Logomarca Tailwind', img: '/imgs/tailwind.png' },
    { alt: 'Logomarca Java', img: '/imgs/java.png' },
    { alt: 'Logomarca Android', img: '/imgs/android.png' },
    { alt: 'Logomarca Mysql', img: '/imgs/mysql.png' },
    { alt: 'Logomarca Postgres', img: '/imgs/postgre.png' },
    { alt: 'Logomarca Docker', img: '/imgs/docker.png' },
    { alt: 'Logomarca GitHub', img: '/imgs/github.png' }
]
</script>

<style>
.stack-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.stack-list li {
    margin: 15px;
}

.stack-list img {
    width: 60px;
    height: auto;
}
</style>
