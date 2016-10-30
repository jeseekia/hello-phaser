var RabbitDefender = {};

RabbitDefender.Boot = function(game){};

RabbitDefender.Boot.prototype = {
//Define functions needed for phaser development

  //Automatically looks for preload at start
  preload: function(){
    this.load.image('preloaderbar','images/loader_bar.png');
    this.load.image('titleimage','images/title_image.png');

  },
  create: function(){

    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = false;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 270;
    this.scale.minHeight = 480;
    this.scale.pageAlignHorizontally = true;
    this.pageAlightVertically = true;
    this.stage.forcePortrait = true;
    this.scale.updateLayout(true);
    this.input.addPointer();
    this.stage.backgroundColor = '#e67fb9';

    this.state.start('Preloader');
  },
};
