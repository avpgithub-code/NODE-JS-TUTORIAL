import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

// dotenv.config({
//     path: "./.env"
// });
//C:\Users\archi\Documents\ML-DL\NODE-JS-TUTORIAL\index.js
//C:\Users\archi\Documents\ML-DL\NODE-JS-TUTORIAL\backend\src\index.js
//C:\Users\archi\Documents\ML-DL\NODE-JS-TUTORIAL\backend\src\index.js 
//C:\Users\archi\Documents\ML-DL\NODE-JS-TUTORIAL\package.json
//C:\Users\archi\Documents\ML-DL\NODE-JS-TUTORIAL\backend\src\index.js
const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.error("Server error:", error);
            throw error;
        });
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database. Server not started.", error);
        process.exit(1);
    }
}
startServer();