RabbitDefender.Preloader = function(game){

  this.preloadbar = null;
  this.titletext = null;
  this.ready = false;

};

RabbitDefender.Preloader.prototype = {

  preload: function(){
    this.preloadBar = this.add.sprite(
      this.world.centerX,this.world.centerY,'preloaderbar');
    this.preloadBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(this.preloadBar);
    this.titleText = this.add.image(
      this.world.centerX,this.world.centerY-220,'titleimage');
    this.titleText.anchor.setTo(0.5,0.5);
  },

  create: function(){},

  update: function(){}
};
