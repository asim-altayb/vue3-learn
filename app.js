const app = Vue.createApp({
    data(){
        return {
            title: 'The Final Epimre',
            author: 'Asim',
            age: 29
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        }
    }
})

app.mount('#app')