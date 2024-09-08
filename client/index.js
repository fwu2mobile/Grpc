const grpc = require("@grpc/grpc-js")
const {UserInput} = require('../proto/calculator_pb')
const {CalculatorServiceClient} = require('../proto/calculator_grpc_pb')

function CallSum(client){
    console.log("sum invoked");

    const req = new UserInput().setOp1(999).setOp2(111);

    client.sum(req, (err, res)=>{
        if(err){
            return console.log(err);
        }

        console.log("sum is " + res.getResult());
    })
}

function main(){
    
    const creds = grpc.ChannelCredentials.createInsecure();

    const client = new CalculatorServiceClient('localhost:50051', creds);

    CallSum(client);

    //client.close();
}

main();