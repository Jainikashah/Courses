function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}
const app =Vue.createApp({
    data(){
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 0,
            winner : null,
            logMessages : []
        }
    },
    computed: {
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return {width : '0%'}
            }
            return {width : this.monsterHealth + '%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return {width : '0%'}
            }
            return {width : this.playerHealth + '%'}
        },
        canUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        },
        canHeal(){
            return this.playerHealth > 50;
        }
    },
    watch : {
        playerHealth(value){
            if(value <=0 && this.monsterHealth <= 0){
                this.winner='Draw';
            }else if(value <= 0){
              this.winner = 'Monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner='Draw';

            }else if(value <= 0){
                this.winner='Player';

            }
        }
    },  
    methods : {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5,10);
            this.monsterHealth -= attackValue;
            this.addLogMessage('Player','attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(10,15);
            this.playerHealth -= attackValue;
            this.addLogMessage('Monster','attack', attackValue);

        },
        specialAttack(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('Player','special attack', attackValue);

        },
        healPlayer(){
            const healValue = getRandomValue(10,20);
            if(this.playerHealth < 50){
                if(this.playerHealth + healValue > 100){
                    this.playerHealth = 100;
                } else{
                    this.playerHealth += healValue;
                }
            }
            this.addLogMessage('Player','heal', healValue);

        },
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0; 
            this.logMessages = [];
        },
        surrender(){
            this.winner='Monster';
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy : who,
                actionType : what,
                actionValue: value
            });
        }


    }
});
app.mount('#game');