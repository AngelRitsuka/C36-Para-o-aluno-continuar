class Form {
  //construindo o formulário
  constructor() {
    //input exibirá uma caixa e o placeholder é um atributo
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    //mensagem de boas vindas simples para o usuário
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  //esse pertence ao CSS para definir os estilos
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //chamando a função, se não ela não funciona haha :D
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
  }
}
