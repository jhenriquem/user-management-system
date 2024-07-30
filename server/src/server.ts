import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "../routes/userRoutes";
import limiter from "../middlewares/rateLimit";
import authAPIkey from "../middlewares/authAPIKey";
import { randomBytes } from "crypto";
import morgan from "morgan";
import connectionDB from "../database/config";

export default class Server {
  private app: Application;
  private port: number | string;
  private paths = {
    user: "/api/user",
  };

  constructor() {
    dotenv.config();

    this.app = express();
    this.port = process.env.PORT || 8080;

    this.connectDB();

    // Allows the client to connect to the api through a hosting service
    this.app.set("trust proxy", 3)

    //calls functions related to api and jwt keys
    this.generateApiKey();
    this.generateSecretKeyOfJWT()

    this.middlewares();
    this.routes();
  }

  async connectDB() {
    try {
      await connectionDB();
    } catch (error) {
      console.error("Database connection failed:", error);
      process.exit(1);
    }
  }

  generateSecretKeyOfJWT() {
    if (!process.env.SECRET_KEY_JWT) {
      const generatedKey = randomBytes(12).toString('hex');
      console.log("You have not defined a secret key for the jwt. One will be generated automatically:");
      console.log(generatedKey);
      process.env.SECRET_KEY_JWT = generatedKey;
    } else {
      console.log("You have defined an secret key.");
    }
  }
  generateApiKey() {
    if (!process.env.API_KEY) {
      const generatedKey = randomBytes(20).toString('hex');
      console.log("You have not defined a key for the API. One will be generated automatically:");
      console.log(generatedKey);
      process.env.API_KEY = generatedKey;
    } else {
      console.log("You have defined an API key.");
    }
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(limiter);
    this.app.use(authAPIkey);
  }

  routes() {
    this.app.use(this.paths.user, userRouter);
  }

  online() {
    this.app.listen(this.port, () => {
      console.log(`Server is online on port ${this.port}`);
    }).on('error', (err: any) => {
      console.error(`Error: ${err.message}`);
    });
  }
}

