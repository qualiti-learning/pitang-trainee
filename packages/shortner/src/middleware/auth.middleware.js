import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;

const AuthMiddleware = (request, response, next) => {
  const { authorization } = request.headers;

  if (request.url === '/api/login' || (request.url === '/api/users' && request.method === 'POST')) {
    return next();
  }

  if (!authorization) {
    return response.status(401).json({ message: 'Authorization not found' });
  }

  const [, token] = authorization.split(' ');

  try {
    const payload = jsonwebtoken.verify(token, JWT_SECRET);

    request.loggedUser = payload;
  } catch (error) {
    return response.status(401).json({ message: 'Token Invalid' });
  }

  return next();
};

export default AuthMiddleware;
