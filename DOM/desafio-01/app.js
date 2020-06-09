new Vue({
    el: '#desafio',
    data: {
        nome: 'Kelly Sandim',
        idade: 25        
    },
    methods: {
        randomNumber: function() {            
            return Math.random()
        }
    }
})