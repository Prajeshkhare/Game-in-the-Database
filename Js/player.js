class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }

    getCount(){
        //read the player Count from db
        var playerCountRef = database.ref('playerCount');
            playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        //update/change the player Count in db
        database.ref('/').update({
           playerCount:count
        })
    }

    update(){
        //update name of player in db
       var playerIndex = "players/player"+this.index;
       //player1, player2, player3
       database.ref(playerIndex).set({
           name:this.name,
           distance:this.distance
       })
    }

    static getPlayerInfo(){
        var playerInfoRef=database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}