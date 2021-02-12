const app = Vue.createApp({
    data() {
        return {
            bookName: 'Automate the boring stuffs with python',
            price: 10,
        }
    },
    methods: {
        changeBook(newBook) {
            this.bookName = newBook
        }
    }
})

app.mount('#app')