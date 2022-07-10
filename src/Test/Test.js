import { useSelector } from "react-redux";
import store from "../store";
import { chooseSchool, creatingNewCourse, creatingNewSchool, learningGroupsEnd, learningGroupStart, lessonDone, schoolDataUpdated } from "../store/actionCreators";

export function Test () {
 
  
   store.dispatch(creatingNewSchool('Hillel', 'jniniu', '7', '8', 1));
   store.dispatch(creatingNewSchool('Step', 'hbhniu', '6', '3', 2));
   store.dispatch(chooseSchool(1));
   store.dispatch(schoolDataUpdated('name', 'Hil', 1));
   store.dispatch(schoolDataUpdated('name', 'Hop', 2));
   store.dispatch(creatingNewCourse('React', '6', '7', 1));
   store.dispatch(creatingNewCourse('Angular', '6', '6', 1));
   store.dispatch(creatingNewCourse('Front-end', '6', '7', 2));

   store.dispatch(learningGroupStart(10, 'React', 'Rom', 5, 1));
   store.dispatch(learningGroupsEnd('React', 'Rom', 1));
   /*
   store.dispatch(learningGroupsEnd('React', 'Rom', 1));
   store.dispatch(learningGroupsEnd('React', 'Rom', 1));
   */
   store.dispatch(learningGroupStart(3, 'Front-end', 'Jon', '6', 2));
   store.dispatch(learningGroupsEnd('Front-end', 'Jon', 2));
   store.dispatch(lessonDone('1 lesson', 'Introduction', 10 ,1));
   store.dispatch(lessonDone('2 lesson', 'What is React?', 10 , 1));
  console.log(store.getState());
 

  return (
    <div>Test</div>
  ); 
}