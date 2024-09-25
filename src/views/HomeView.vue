<template>
    <section id="home" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="flex-1">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl home-enfase">Tech Power</h1>
            <p class="mt-4 text-xl text-gray-500">"Desenvolver software é como esculpir um caminho na floresta
                digital. À medida que avançamos, não apenas moldamos o código, mas também o futuro, criando trilhas
                que outros seguirão, explorando possibilidades e transformando desafios em oportunidades."</p>
        </div>
        <div class="md:flex-1">
            <img src="/imgs/decorative-home.svg" alt="Imagem Docorativa" />
        </div>
    </section>

    <section id="home" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        <div class="md:flex-1 ms-3">
            <ul class="stack-list">
                <li>
                    <img src="@/assets/imgs/php.png" alt="logo php">
                </li>
                <li>
                    <img src="@/assets/imgs/laravel.svg" alt="logo laravel">
                </li>
                <li>
                    <img src="@/assets/imgs/js.png" alt="logo js">
                </li>
                <li>
                    <img src="@/assets/imgs/logo.svg" alt="logo js">
                </li>
                <li>
                    <img src="@/assets/imgs/bootstrap.png" alt="logo bootstrap">
                </li>
                <li>
                    <img src="@/assets/imgs/tailwind.png" alt="logo tailwind">
                </li>
                <li>
                    <img src="@/assets/imgs/java.png" alt="logo java">
                </li>
                <li>
                    <img src="@/assets/imgs/android.png" alt="logo android">
                </li>
                <li>
                    <img src="@/assets/imgs/mysql.png" alt="logo mysql">
                </li>
                <li>
                    <img src="@/assets/imgs/postgre.png" alt="logo postgre">
                </li>
                <li>
                    <img src="@/assets/imgs/docker.png" alt="logo docker">
                </li>
                <li>
                    <img src="@/assets/imgs/github.png" alt="logo github">
                </li>
            </ul>
        </div>
        <div class="flex-1">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl home-enfase">Full Stack</h1>
            <p class="mt-4 text-xl text-gray-500">Um profissional capaz de trabalhar em
                todas as camadas de uma aplicação, desde o backend até o frontend. Com habilidades para
                desenvolver e integrar a lógica de negócios no servidor, trabalhar com bancos de dados, construir APIs e
                também criar interfaces de usuário interativas e responsivas.</p>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    .stack-list{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .stack-list li{
        margin: 15px;
    }

    .stack-list img{
        width: 60px;
        height: auto;
    }

</style>
