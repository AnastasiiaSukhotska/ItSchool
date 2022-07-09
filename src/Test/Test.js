import { useSelector } from "react-redux";
import store from "../store";
import { chooseSchool, creatingNewCourse, creatingNewSchool, learningGroupsEnd, learningGroupStart, schoolDataUpdated } from "../store/actionCreators";

export function Test () {
 
  
   store.dispatch(creatingNewSchool('Hillel', 'jniniu', '7', '8', 1));
   store.dispatch(creatingNewSchool('Step', 'hbhniu', '6', '3', 2));
   store.dispatch(chooseSchool(1));
   store.dispatch(schoolDataUpdated('name', 'Hil'));
   store.dispatch(creatingNewCourse('React', '6', '7'));
  
   store.dispatch(creatingNewCourse('Angular', '6', '6'));
   store.dispatch(schoolDataUpdated('name', 'Hil'));
   store.dispatch(learningGroupStart(10, 'React', 'Rom', 5));
   store.dispatch(learningGroupStart(5, 'Angular', 'Ban', 5));
   store.dispatch(learningGroupsEnd('React', 'Rom'));
   /*


   store.dispatch(chooseSchool(2));
   store.dispatch(schoolDataUpdated('name', 'Hop'));


   store.dispatch(chooseSchool(1));

   store.dispatch(creatingNewCourse('Front-end', '6', '7'));
   store.dispatch(learningGroupStart('Front-end', 'Jon', 6));
  
   store.dispatch(learningGroupsEnd('Front-end', 'Jon'));
   store.dispatch(chooseSchool(2));
  

  */




 
  
   
   
  console.log(store.getState());
 
  /*
  store.dispatch(creatingNewSchool('Step', 'jnimkjmniu', '5', '8', 4));
  console.log(store.getState());
  store.dispatch(creatingNewSchool('StVep', 'jnimkjmniu', '5', '8', 4));
  console.log(store.getState());
  
  store.dispatch(learningGroupStart('234', 'Jon', '9', 4));
  console.log(store.getState());
  */
  return (
    <div>Hello</div>
  ); 
}