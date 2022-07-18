import { createStore } from 'redux';
import { reduser } from './redusers/reduser';


const initState = { schools: [{name: 'hillel', description: 'This is the best IT school for you', id: 34, maxGroups: 10, startedGroups: [{amountOfStudents: 5 , teacherName: 'Jon', courseName: 'Front-End', passedLessons: [], groupStarted: '12.03.2022', groupId: 43}, {amountOfStudents: 5, teacherName: 'Mike', courseName: 'Front-End', passedLessons: [], groupStarted: '17.05.2022', groupId: 67 }], availableCourses: [{courseName: 'Front-End'}]}, {name: 'demo school', id: 65, description: 'IT is easy!', maxGroups: 8, startedGroups: [{courseName: 'Angular', amountOfStudents:5, teacherName: 'Jane', passedLessons: [{title: 'Hello'}, {title: 'First lesson'}], groupStarted: '10.06.2022', groupId: 76 }, {amountOfStudents: 15, teacherName: 'Sam', courseName: 'React', passedLessons: [{title:'New'}], groupStarted: '09.04.2022', groupId: 87}], availableCourses: [{courseName: 'React'}, {courseName: 'Angular'}]}], 
    chosenSchool: '',
    chosenCourse: '',
    history: [],
 };
const store = createStore (reduser, initState);
export default store;