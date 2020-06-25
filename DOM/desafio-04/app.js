new Vue({
	el: '#desafio',
	data: {
		alternarClasse: false,
		classeCSS: 'valor'
	},
	methods: {
		iniciarEfeito() {	
			setTimeout(() => {
                this.alternarClasse = !this.alternarClasse;
			}, 2000);			
		},
		iniciarProgresso() {

		}
	},
	computed: {
		estiloVue1() {
			return {
				destaque: this.alternarClasse,
				encolher: !this.alternarClasse			
			}
		}
	}
})
