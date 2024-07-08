import jwt from "jsonwebtoken";

export const verifyToken = (token: string): string | object => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded;
  } catch (err) {
    throw new Error('Invalid token');
  }
};
