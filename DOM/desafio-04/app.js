new Vue({
	el: '#desafio',
	data: {
		alternarClasse: false,
		classeCSS: 'valor',
		outraClasseCSS: false,
		cor: 'red',
		barra: 1
	},
	methods: {
		iniciarEfeito() {	
			setTimeout(() => {
                this.alternarClasse = !this.alternarClasse;
			}, 2000);			
		},
		iniciarProgresso() {
			if (this.barra >= 100) {
				this.barra = 0;
			} 
			while(this.barra <= 100){
				setTimeout(() => {
					this.barra++;
				}, 1000);
			}	
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
		},
		estiloVue4() {
			return {
				width: '100%',
				backgroundColor: 'grey',
			}
		},
		estiloVue5() {
			return {
				width: `${this.barra}%`,
  				height: '30px',
  				backgroundColor: 'green'
			}
		}
	}
})
