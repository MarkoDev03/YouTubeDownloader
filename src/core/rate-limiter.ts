import rateLimit from 'express-rate-limit'
import { Vars } from '../common/vars';

const limiter = rateLimit({
	windowMs: 60 * 60 * 1000,
	max: Vars.MAX_REQ_PER_HOUR,
	standardHeaders: true,
	legacyHeaders: false
})

export default limiter;
