new Vue({
	el: '#desafio',
	data: {
		alternarClasse: false,
		classeCSS: 'valor',
		outraClasseCSS: '',
		instinct: true,
		cor: 'red',
		barra: 0
	},
	methods: {
		iniciarEfeito() {	
			setInterval(() => {
                this.alternarClasse = !this.alternarClasse;
			}, 1000);			
		},
		iniciarProgresso() {
			const temporizador = setInterval(() => {
				this.barra += 5				
				if(this.barra == 100) {
					this.barra = 0,
					clearInterval(temporizador)
				}
			}, 500)			
		},
		estiloVue2(event){
			if(event.target.value == 'true') {
				this.instinct  = true;
			}
			else if(event.target.value == 'false') {
				this.instinct = false;
			}
		},
	},
	computed: {
		estiloVue1() {
			return {
				destaque: this.alternarClasse,
				encolher: !this.alternarClasse			
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
				height: '30px',
				border: '1px solid #000'				
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
