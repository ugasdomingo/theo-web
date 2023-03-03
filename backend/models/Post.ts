//Import tools
import { Schema, model } from "mongoose";

//Create Post Schema
const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		category: {
            type: String,
			required: true,
		},
		url: {
            type: String,
            required: true,
		},
		description: {
            type: String,
		},
	},
	{
		versionKey: false,
	}
);

export default model("Post", postSchema);