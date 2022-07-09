import { createStore } from 'redux';
import { reduser } from './redusers/reduser';
const initState = { schools: [], chosenSchool: '', history: [] };
const store = createStore (reduser, initState);
export default store;