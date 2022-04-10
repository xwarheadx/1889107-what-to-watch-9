import { filmProcessor } from '../film-processor/film-processor';
import { combineReducers } from '@reduxjs/toolkit';
import { TypeNames } from '../../const';
import { filmData } from '../film-data/film-data';
import { userProcessor } from '../user-processor/user-processor';

export const mainReducer = combineReducers({
  [TypeNames.data]: filmData.reducer,
  [TypeNames.film]: filmProcessor.reducer,
  [TypeNames.user]: userProcessor.reducer,
});
