//Import tools
import Post from "../models/Post";

// getAllPost --> Line 10
// createPost --> Line 20
// getPost --> Line 34
// deletePost --> Line 47
// updatePost --> Line 60

// getAllPost Controller
export const getAllPost = async (req: any, res: any) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createPost Controller
export const createPost = async (req: any, res: any) => {
	try {
		const { title, category, description, url } = req.body;

		const post = new Post({ title, category, description, url });
		await post.save();

		res.json(post);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getPost Controller
export const getPost = async (req: any, res: any) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post)
			return res.status(404).json({ message: "Post no encontrado" });
		res.send(post);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// deletePost Controller
export const deletePost = async (req: any, res: any) => {
	try {
		const post = await Post.findByIdAndDelete(req.params.id);

		if (!post)
			return res.status(404).json({ message: "Post no encontrado" });
		res.send(post);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// updatePost Controller
export const updatePost = async (req: any, res: any) => {
	try {
		const updatedPost = await Post.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedPost)
			return res.status(404).json({ message: "Post no encontrado" });
		res.json(updatedPost);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};