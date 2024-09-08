const calculatorPb = require("../proto/calculator_pb");

exports.sum = (call, callback) =>{
    const op1 = call.request.getOp1();
    const op2 = call.request.getOp2();
    const result = op1 + op2;

    console.log("Server summing inputs ", op1, op2 );

    const res = new calculatorPb.Result().setResult(result);

    callback(null, res);

}