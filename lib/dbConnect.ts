import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number
};


const connection:ConnectionObject= {};


async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("Database is already connected");
        return;
    }
    try {
     const db=   await mongoose.connect(process.env.MONGO_URI || '');
     console.log(db); // for debuging purpose;
     connection.isConnected=db.connections[0].readyState; // setting connection status to true if connected successfully
     console.log("DB Connected Successfuly");
     
     
    } catch (error) {
        console.log("DB Not connected:",error);
        
        process.exit(1);
        
    }

    
}

export default dbConnect;