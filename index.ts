//function to create a user table in your db

//connect to db -aiven db
import { Client } from 'pg'

const client = new Client({
  connectionString:"DATABASE_URL"
});


//----creating TABLE user-----
async function createAdminTable() {

    await client.connect()

    const result = await client.query(`
      
         // CREATE TABLE admin (
        // id SERIAL PRIMARY KEY,
        // username VARCHAR(50) UNIQUE NOT NULL,
        // email VARCHAR(255) UNIQUE NOT NULL,
        // password VARCHAR(255) NOT NULL,
        // created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
        


       ` );
        console.log(result)
}
createAdminTable();

  

//-----inserting data----

// async function insertData(username: string, email: string, password: string) {
// const client = new Client({
//      connectionString:"postgresql://neondb_owner:UbS3uApW4Olh@ep-bitter-cloud-a5v9hzb2.us-east-2.aws.neon.tech/neondb?sslmode=require"
//   });


// try {
//     await client.connect(); // Ensure client connection is established
//     // Use parameterized query to prevent SQL injection
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//     const values = [username, email, password];
//     const res = await client.query(insertQuery, values);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// // Example usage
// insertData('username5', 'user5@example.com', 'user_password').catch(console.error);

 
//---query to fetch data---


// async function getUser(email: string) {
//     const client = new Client({
//         connectionString:"postgresql://neondb_owner:UbS3uApW4Olh@ep-bitter-cloud-a5v9hzb2.us-east-2.aws.neon.tech/neondb?sslmode=require"
//     });
    

//   try {
//     await client.connect(); // Ensure client connection is established
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const values = [email];
//     const result = await client.query(query, values);
    
//     if (result.rows.length > 0) {
//       console.log('User found:', result.rows[0]); // Output user data
//       return result.rows[0]; // Return the user data
//     } else {
//       console.log('No user found with the given email.');
//       return null; // Return null if no user was found
//     }
//   } catch (err) {
//     console.error('Error during fetching user:', err);
//     throw err; // Rethrow or handle error appropriately
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// // Example usage
// getUser('user5@example.com').catch(console.error);



//---relationship-----


