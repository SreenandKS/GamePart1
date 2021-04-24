class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.button1 = createButton('Single Player');
    this.button2 = createButton('Multiplayer');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.name1 = createElement('h4');
  }
  hide(){
   
    this.button.hide();
    this.input.hide();
    this.name1.hide();
    this.button1.hide();
    this.button2.hide();
  }

  display(){
    
    this.name1.position(displayWidth/2 - 200,displayHeight/2 - 100);
    this.name1.html("Enter your name");
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.name1.hide();
      
      this.button1.position(displayWidth/2 + 50, displayHeight/2);
      this.button2.position(displayWidth/2 + 300, displayHeight/2);
      this.button2.mousePressed(()=>{
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      })
      
     
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref('/').update({
        CarsAtEnd:0
      }
      )

      var playerInfoRef = database.ref('players');
      playerInfoRef.remove();
    });
  }
}