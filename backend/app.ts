//Import Tools
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

//Import Routes
import authRouter from "./routes/authRouter";
import postsRouter from "./routes/postsRouter";

//Define app
const app = express();

const allowedOrigins = [
	process.env.ORIGIN1 as string,
	process.env.ORIGIN2 as string,
];

//Middleware
app.use(
	cors({
		origin: function (origin: any, callback: any) {
			if (allowedOrigins.includes(origin)) {
				return callback(null, origin);
			}
			return callback(
				"Error CORS, origin: " + origin + ", No autorizado"
			);
		},
		credentials: true,
	})
);
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use('/api', authRouter)
app.use('/api/posts', postsRouter)

//Export app
export default app;