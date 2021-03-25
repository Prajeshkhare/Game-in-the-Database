class form {
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement("h3");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        //DOM Document Object Model
        //"h" define as a heading
        var title = createElement('h2');
        title.html("car racing game");
        title.position(130,0);
        
        //var input = createInput("Name");
        
        //var button = createButton("play");
        
        //var greeting = createElement('h3');

        this.input.position(130,160);
        this.button.position(250,200);
        
        //update the playerCount and name of the player when user log in by pressing play button
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.update();
            player.index=playerCount
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(130,160);
        })

        }

}