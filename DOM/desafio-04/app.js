new Vue({
	el: '#desafio',
	data: {
		alternarClasse: false,
		classeCSS: 'valor',
		outraClasseCSS: false,
		cor: 'red'
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
		},
		estiloVue2(){
			return {
				mystic: this.outraClasseCSS,
				instinct: !this.outraClasseCSS
			}
		},
		estiloVue3() {
			return {
				backgroundColor: this.cor,
				width: '100px',
				height: '100px'
			}
		}
	}
})
