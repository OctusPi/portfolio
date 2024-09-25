<template>
    <section class="mx-auto max-w-2xl p-6 lg:px-8 text-white">
        <div class="mb-6 text-center">
            <h1 class="text-4xl font-bold tracking-tight text-purple-400">Entre em Contato</h1>
            <p class="mt-4 text-lg text-gray-300">
                Se você tem perguntas ou gostaria de entrar em contato, fique à vontade para me enviar uma mensagem
                usando o formulário abaixo.
                Você também pode acessar meu <a class="text-purple-400 hover:underline"
                    href="https://github.com/OctusPi" target="_blank">GitHub</a> ou enviar um email diretamente para
                <a class="text-purple-400 hover:underline" href="mailto:octuspi@gmail.com">octuspi@gmail.com</a>.
            </p>
        </div>
        <form @submit.prevent="submitForm" class="space-y-6 p-6 rounded-lg shadow-lg">
            <div class="flex flex-col">
                <label for="name" class="text-lg font-medium text-purple-400">Nome</label>
                <input type="text" id="name" v-model="formData.name" placeholder="Seu nome"
                    class="mt-2 p-3 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required />
            </div>
            <div class="flex flex-col">
                <label for="email" class="text-lg font-medium text-purple-400">Email</label>
                <input type="email" id="email" v-model="formData.email" placeholder="Seu email"
                    class="mt-2 p-3 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required />
            </div>
            <div class="flex flex-col">
                <label for="message" class="text-lg font-medium text-purple-400">Mensagem</label>
                <textarea id="message" v-model="formData.message" placeholder="Escreva sua mensagem..."
                    class="mt-2 p-3 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required></textarea>
            </div>
            <div class="text-center">
                <button type="submit"
                    class="px-6 py-3 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    Enviar
                </button>
            </div>
        </form>
    </section>
</template>


<script setup>
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    message: ''
})

const submitForm = () => {
    alert(`Obrigado, ${formData.value.name}! Sua mensagem foi enviada com sucesso.`)
    // Aqui você pode implementar a lógica para enviar a mensagem por email ou a um backend
    formData.value.name = ''
    formData.value.email = ''
    formData.value.message = ''
}
</script>
