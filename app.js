const app = Vue.createApp({
    data() {
        return {
            bookVisibility: 'public',
            bookName: 'Automate the boring stuffs with python',
            price: 10,
        }
    },
    methods: {
        changeBook(newBook) {
            this.bookName = newBook
        },
        toggleBookVisibility() {
            const status = this.bookVisibility;
            if (status === 'public') {
                this.bookVisibility = 'private'
            } else {
                this.bookVisibility = 'public'
            }
        }
    }
})

app.mount('#app')