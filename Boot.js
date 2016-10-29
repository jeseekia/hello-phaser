var RabbitDefender = {};

RabbitDefender.Boot = function(game){};

RabbitDefender.Boot.prototype = {
//Define functions needed for phaser development

  //Automatically looks for preload at start
  preload: function(){},
  create: function(){

    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = false;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 270;
    this.scale.minHeight = 480;
    this.scale.pageAlignHorizontally = true;
    this.pageAlightVertically = true;
    this.stage.forcePortrait = true;
    this.scale.setScreenSize(true);
    this.input.addPointer();
    this.stage.backgroundColor = '#e67fb9';
  },
};
