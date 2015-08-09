/// <amd-dependency path="utils/logger" name="Logger" />

//declare var Logger:Logger;

class AdvancedMathOperations{
  logger;
  constructor(){
    this.logger = new Logger();
  }

  multiply(a:number, b:number){
    this.logger.log(`Operation ${a} * ${b}`)
    return a*b;
  }
}

export =AdvancedMathOperations;
