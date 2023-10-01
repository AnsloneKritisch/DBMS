const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function connectToMongoDB() 
{
    try 
    {
        await client.connect();
        console.log("Connected to MongoDB");
    } 
    
    catch (error) 
    {
        console.error("Error connecting to MongoDB:", error);
    } 
    
    finally 
    {
        // Close the client when done with the connection
        await client.close();
    }
    
}

connectToMongoDB();
