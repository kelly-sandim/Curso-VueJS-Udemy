new Vue({
    el: '#desafio',
    data: {
        nome: 'Kelly Sandim',
        idade: 25        
    },
    methods: {
        saudacao: function() {
            this.titulo = "Bom dia!!!"
            return this.titulo
        }
    }
})