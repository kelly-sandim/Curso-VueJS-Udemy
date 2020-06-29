new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack(special) {
            this.hurt('monsterLife', 5, 10, special);
            this.hurt('playerLife', 7, 12, false); //player não pode ser ferido com golpe especial
        },
        hurt(prop, min, max, special) {
            const plus = special ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0); //o 0 evita que o PlayerLife seja negativo

        },
        healAndHurt() {
            this.heal(10, 15);
            this.hurt('playerLife', 7, 12, false);
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100); //assim como o de cima, esse 100 impede que a vida do jogador vá mais do que isso
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false;
        }
    }
})