import { filmProcessor } from '../film-processor/film-processor';
import { combineReducers } from '@reduxjs/toolkit';
import { Names } from '../../const';
import { filmData } from '../film-data/film-data';
import { userProcessor } from '../user-processor/user-processor';

export const mainReducer = combineReducers({
  [Names.data]: filmData.reducer,
  [Names.film]: filmProcessor.reducer,
  [Names.user]: userProcessor.reducer,
});
