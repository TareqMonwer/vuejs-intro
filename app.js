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

const users = Vue.createApp({
    data() {
        return {
            users: null
        }
    },
    methods: {
        getUserUrl(userID) {
            return `https://jsonplaceholder.typicode.com/users/${userID}`
        },
        toggleEvenClass(event, userID) {
            if (userID % 2 == 0) {
                if (event.target.classList.contains('even')) {
                    event.target.classList.remove('even')
                } else {
                    event.target.classList.add('even');
                }
            }
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => (this.users = data))
    }
})


// mounts
app.mount('#app')
users.mount('#users')