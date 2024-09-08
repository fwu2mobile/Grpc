// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_Result(arg) {
  if (!(arg instanceof calculator_pb.Result)) {
    throw new Error('Expected argument of type calculator.Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_Result(buffer_arg) {
  return calculator_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_UserInput(arg) {
  if (!(arg instanceof calculator_pb.UserInput)) {
    throw new Error('Expected argument of type calculator.UserInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_UserInput(buffer_arg) {
  return calculator_pb.UserInput.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  sum: {
    path: '/calculator.CalculatorService/sum',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.UserInput,
    responseType: calculator_pb.Result,
    requestSerialize: serialize_calculator_UserInput,
    requestDeserialize: deserialize_calculator_UserInput,
    responseSerialize: serialize_calculator_Result,
    responseDeserialize: deserialize_calculator_Result,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
