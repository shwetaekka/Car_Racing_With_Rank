class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.playername=createElement('h3');
    this.reset=createButton('Reset');

    //html elements for displaying result
    this.resultheading = createElement('h2');
    this.positionrank = createElement('h3');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.reset.position(displayWidth-100,20);
    this.playername.position(100,20);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.playername.html("Player Name: "+player.name);
    });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.removePlayers();
        Player.updateCarsAtEnd(0);
      });

    
  }

  displayIResult(rank, name){
    
      this.resultheading.html("The Race Result: ");
      this.resultheading.position(displayWidth/2 - 50, 30);
      this.positionrank.position(displayWidth/2 - 80, 70);

      this.positionrank.html("Congratulations !!! " + name + "! Your position is : " + rank );
      
  }
}
