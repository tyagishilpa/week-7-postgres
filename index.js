"use strict";
//function to create a user table in your db
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//connect to db -aiven db
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:my_password@ep-bitter-cloud-a5v9hzb2.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
//----creating TABLE user-----
function createAdminTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
      
         
        
        CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE0 )
       `);
        console.log(result);
    });
}
createAdminTable();
// CREATE TABLE admin (
// id SERIAL PRIMARY KEY,
// username VARCHAR(50) UNIQUE NOT NULL,
// email VARCHAR(255) UNIQUE NOT NULL,
// password VARCHAR(255) NOT NULL,
// created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
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
