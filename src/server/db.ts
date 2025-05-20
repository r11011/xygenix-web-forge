
import { MongoClient, ServerApiVersion } from 'mongodb';

// Connection URI (this should be moved to an environment variable in production)
const uri = "mongodb+srv://user1:<db_password>@cluster0.tas58em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB");
    return client.db("xygenix_db");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export async function saveVisitorData(data: any) {
  try {
    const database = await connectToDatabase();
    const visitors = database.collection("visitors");
    const result = await visitors.insertOne(data);
    console.log("Visitor data saved with ID:", result.insertedId);
    return result;
  } catch (error) {
    console.error("Error saving visitor data:", error);
    throw error;
  } finally {
    // Close the connection when done
    await client.close();
  }
}

export async function saveContactFormData(formData: any) {
  try {
    const database = await connectToDatabase();
    const contacts = database.collection("contacts");
    const result = await contacts.insertOne({
      ...formData,
      timestamp: new Date()
    });
    console.log("Contact form data saved with ID:", result.insertedId);
    return result;
  } catch (error) {
    console.error("Error saving contact form data:", error);
    throw error;
  } finally {
    // Close the connection when done
    await client.close();
  }
}
