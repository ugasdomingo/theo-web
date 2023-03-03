// Import Tools
import { UserModel } from "../models/User";
import { generateRefreshToken, generateToken } from "../utils/tokensManager";
import jwt from "jsonwebtoken";

// Register --> Line 13
// Login --> Line 38
// Refresh --> Line 61
// Logout --> Line 85


// Register Controller
export const register = async (req: any, res: any) => {
	const { name, email, password  } = req.body;

	try {
		//Validate unique user
		const uniqueEmail = await UserModel.findOne({ email });
		if (uniqueEmail)
			return res.status(400).json({ message: "Usuario ya Existe" })
		;

		//Create new user
		const user = new UserModel({ name, email, password });
		await user.save();

		//Email Validation

		//Generate Token & RefreshToken
		const response = { ...generateToken(user.id), role: user.role };
		generateRefreshToken(user.id, res);
		return res.json(response);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Error en el servidor" });
	}
};

// Login Controller
export const login = async (req: any, res: any) => {
	const { email, password } = req.body;
	try {
		//Validate User
		const user = await UserModel.findOne({ email });
		if (!user)
			return res.status(400).json({ message: "Credenciales Inválidas" });

		//Validate Password
		const validatePassword = await user.comparePassword(password);
		if (!validatePassword)
			return res.status(400).json({ message: "Credenciales Inválidas" });

		//Generate Token & RefreshToken
		const response = { ...generateToken(user.id), role: user.role };
		generateRefreshToken(user.id, res);
		return res.json(response);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Error en el servidor" });
	}
};

// Refresh Controller
export const refresh = async (req: any, res: any) => {
	//Payload for req.uid
	interface JwtPayload {
		uid: string;
	}

	try {
		let refreshTokenCookie = req.headers.cookie;
		refreshTokenCookie = refreshTokenCookie.split("=")[1];

		if (!refreshTokenCookie)
			throw new Error("Debes hacer login para ver esta página");

		const { uid } = jwt.verify(
			refreshTokenCookie,
			process.env.JWT_REFRESH as string
		) as JwtPayload;
		return res.json(generateToken(uid));
	} catch (error: any) {
		return res.status(401).json({ message: error.message });
	}
};

// Logout Controller
export const logout = async (req: any, res: any) => {
	res.clearCookie("refreshToken");
	res.json({ mesage: "Logout" });
};



