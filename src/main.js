require(['mathOperations', 'ts/advancedMathOperations'], function(MathOperations, AdvancedMathOperations) {
  console.log('JS amd: ', MathOperations.sum(1, 2));
  var advancedMathOperations = new AdvancedMathOperations();
  console.log('TS amd: ', advancedMathOperations.multiply(3, 5));
});
