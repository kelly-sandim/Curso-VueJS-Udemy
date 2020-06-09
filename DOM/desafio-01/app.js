new Vue({
    el: '#desafio',
    data: {
        nome: 'Kelly Sandim',
        idade: 25,
        linkImagem: 'https://criticalhits.com.br/wp-content/uploads/2020/01/sarada-chidori-boro-boruto-manga-42.jpg'        
    },
    methods: {
        randomNumber: function() {            
            return Math.random()
        }
    }
})