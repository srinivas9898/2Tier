
let connectToMDB = async ()=>{

    try{
       await mongoose.connect("mongodb+srv://srinivas:srinivas@2402batch.nnuu6pa.mongodb.net/?retryWrites=true&w=majority&appName=2402Batch");
        console.log("connect to MSB successfully")

    }catch(err){
       console.log("unable to connect to mdb");
    }
};
connectToMDB();