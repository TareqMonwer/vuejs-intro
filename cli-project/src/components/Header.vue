<template>
    <div class="header">
        <h1>{{title}}</h1>
        <h4>{{ subHeading }}</h4>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    },
    data () {
        return {
        subHeading: 'Learning Vue.js from Shaun'
        }
    }
}
</script>


<style sc oped>
.header {
    width: 100%;
    background-color: rgb(187, 187, 187);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
}
</style>