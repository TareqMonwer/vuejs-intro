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
            users: null,
            posts: [
                { id: 1, isFav: true, title: 'Testing' },
                { id: 2, isFav: false, title: 'Developing' },
                { id: 3, isFav: true, title: 'Coding' },
                { id: 4, isFav: false, title: 'Deploying' },
                { id: 11, isFav: true, title: 'Testing' },
                { id: 22, isFav: false, title: 'Developing' },
                { id: 13, isFav: true, title: 'Coding' },
                { id: 24, isFav: false, title: 'Deploying' }
            ]
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
        },
        toggleFav(postID) {
            let post = this.posts.find(post => post.id === postID)
            post.isFav = !post.isFav;
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => (this.users = data))
    },
    computed: {
        favPosts() {
            return this.posts.filter(post => post.isFav)
        }
    }
})


// mounts
app.mount('#app')
users.mount('#users')