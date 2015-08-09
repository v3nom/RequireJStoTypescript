define(function(){
  return function(){
    var self = {};

    self.log = function(msg){
      console.log('Log: ',msg);
    };
    
    return self;
  }
});
