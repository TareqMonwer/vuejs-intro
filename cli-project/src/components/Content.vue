<template>
    <div class="main-content">
        <h3 ref="mc_headline">{{ mc_headline }}</h3>
        <button @click="handleMCHeadline">Change text</button>
    </div>
</template>


<script>
export default {
    name: 'Conent',
    data () {
        return {
            mc_headline: 'Some Text for Content.'
        }
    },
    methods: {
        handleMCHeadline(){
            this.$refs.mc_headline.textContent = 'Changed Content!!'
        }
    }
}
</script>