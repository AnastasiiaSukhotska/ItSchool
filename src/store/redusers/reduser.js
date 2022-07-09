import { ACTION_TYPES } from "../actionTypes";

export const reduser = (prevState, {type, payload }) => {
    const now = new Date(); 
    switch (type) {
        case ACTION_TYPES.CREATING_NEW_SCHOOL_ACTION_TYPE: {
            let existedSchool = prevState.schools.find(school => school.id === payload.id);
            if (existedSchool === undefined){
                return {...prevState, schools: [...prevState.schools, payload],
                        history: [...prevState.history, `New school ${payload.name} was created ${now}`] }
            }
           
        }

        case ACTION_TYPES.CHOOSE_SCHOOLE_ACTION_TYPE: {
            return {...prevState, chosenSchool: prevState.schools.find(school => school.id == payload.id)}
        }

        case ACTION_TYPES.SCHOOL_DATA_UPDATING_ACTION_TYPE: {


            if (prevState.chosenSchool) {
                let updatedSchool = {...prevState.chosenSchool, [payload.field]: payload.value}
                return {...prevState, schools: prevState.schools.map(school => school.id == prevState.chosenSchool.id ? updatedSchool : school),
                    history: [...prevState.history, `Field ${payload.field} was updated to ${payload.value} ${now}`]}
             
                }
        
        }
    

        case ACTION_TYPES.REGISTRATION_NEW_COURSE_ACTION_TYPE: {



            if (prevState.chosenSchool) {
                let existedCourse = prevState.chosenSchool.availableCourses.find(course =>course.courseName === payload.courseName);
                if (existedCourse === undefined){
                    let updatedSchool = {...prevState.chosenSchool, availableCourses: [...prevState.chosenSchool.availableCourses, payload]}
                    console.log(updatedSchool );
                    return {...prevState, schools: prevState.schools.map(school => school.id == prevState.chosenSchool.id ? updatedSchool : school),
                        history: [...prevState.history, `New course ${payload.courseName} was created ${now}`]}
                }
            }
        }

        case ACTION_TYPES.LEARNING_GROUP_START_ACTION_TYPE: {  
            console.log(payload.teacherName);
            if (prevState.chosenSchool, payload.teacherName) {
                let existedCourse = prevState.chosenSchool.availableCourses.find(course =>course.courseName === payload.courseName);
                if (existedCourse !== undefined && existedCourse.availableTeachersAmount>0) {
                    let updatedSchool = {...prevState.chosenSchool, startedGroups: [...prevState.chosenSchool.startedGroups, {groupId: payload.groupId, courseName: payload.courseName, teacherName: payload.teacherName, amountOfStudents: payload.amountOfStudents, passedLessons: []}]}
                    console.log(updatedSchool);
                    return {...prevState, schools: prevState.schools.map(school => school.id == prevState.chosenSchool.id ? updatedSchool : school),
                        history: [...prevState.history, `New learning group ${payload.courseName} was started ${now} by ${payload.teacherName}`]}
                }
            }    
        }

        case ACTION_TYPES.LEARNING_GROUP_END_ACTION_TYPE: {

            if(prevState.chosenSchool){
                let chooseSchool2 = prevState.schools.find(school => school.id == prevState.chosenSchool.id);
                let finishedGroupIndex = chooseSchool2.startedGroups.findIndex(group => group.courseName == payload.courseName && group.teacherName == payload.teacherName);
                console.log(payload.courseName, finishedGroupIndex);
                if ( finishedGroupIndex >= 0 ) {
                    console.log(finishedGroupIndex);
                  let  updatedSchool =  {...prevState.chosenSchool, startedGroups: prevState.chosenSchool.startedGroups.splice(finishedGroupIndex, 1)};
                    console.log(updatedSchool);
                  return {...prevState, schools: prevState.schools.map(school => school.id === prevState.chosenSchool.id ? updatedSchool : school),
                    history: [...prevState.history, `Learning group ${payload.courseName} was ended ${now} by ${payload.teacherName}`]}  
                }
            }
            
        }
/*
        case ACTION_TYPES.LESSON_DONE_ACTION_TYPE: {
            if(prevState.chosenSchool) {
                let chooseSchool2 = prevState.schools.find(school => school.id == prevState.chosenSchool.id);
                console.log(chooseSchool2);
                let editedLearningGroup = chooseSchool2.startedGroups.find(group => group.groupId === payload.groupId);
                if (editedLearningGroup) {
                   let existedLesson = editedLearningGroup.find(group => group.title === payload.title && group.topics === payload.topics);
                   if (existedLesson == undefined){
                    let updatedLearningGroup = {...editedLearningGroup, passedLessons: [...editedLearningGroup.passedLessons, {title: payload.title, topics: payload.topics}]};
                    let updatedSchool = {...chooseSchool2, startedGroups: {...chooseSchool2.startedGroups, updatedLearningGroup}}
                    return {...prevState, schools: prevState.schools.map(school => school.id === prevState.chosenSchool.id ? updatedSchool : school),
                    history: [...prevState.history, `Lesson ${payload.title} was passed ${now} in ${editedLearningGroup.courseName}`]}
                   }
                }
            }
        }
        */
        default: {
            return prevState;
        }
    }
}



