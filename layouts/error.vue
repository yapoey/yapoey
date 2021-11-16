<template>
    <div class="container text-center" style="padding: 100px 0 60px">
        <h3 class="text-center" v-if="error.statusCode === 404">😰 Lost?</h3>
        <h1 v-else>An error occurred</h1>
        <nuxt-link class="btn radius-btn mt-3" to="/">Home page</nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'blog' // you can set a custom layout for the error page
    }
</script>
