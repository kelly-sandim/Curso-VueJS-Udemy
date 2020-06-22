new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert("Você clicou no botão, por isso apareci!");
        },
        updatePData(e) {
            this.valor = e.target.value;
        }
    }
})