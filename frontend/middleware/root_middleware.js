import { applyMiddleware } from 'redux';
import HomeMiddleware from '../middleware/home_middleware';


const RootMiddleware = applyMiddleware(
  HomeMiddleware
);

export default RootMiddleware;
