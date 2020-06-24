new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado () {                
            return this.valor === 37 ? "Valor Igual" : "Valor Diferente";
        }
    },
    watch: {
        resultado() {//era pra por resultado mesmo e só dá "gatilho" quando resultado muda de valor
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
    }
});