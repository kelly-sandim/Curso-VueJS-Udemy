import Vue from 'vue'
export default new Vue({
    methods: {
        mostrarDetalhes(usuario) {            
            this.$emit('usuarioSelecionado', usuario)
        },
        quandoUsuarioForEscolhido(callback) {
            this.$on('usuarioSelecionado', callback)
        }
    }
})