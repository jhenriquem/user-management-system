import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutos
  max: 20, // Limite de 100 requisições por IP por 'windowMs'
  message: 'Too many requests from this IP, please try again after 15 minutes',
  headers: true,
})

export default limiter
