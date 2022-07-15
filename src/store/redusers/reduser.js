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
            return {...prevState, chosenSchool: prevState.chosenSchool && (prevState.chosenSchool.id == payload.id) ?  '' : prevState.schools.find(school => school.id == payload.id), chosenCourse: ''}
        }

        case ACTION_TYPES.CHOOSE_COURSE_ACTION_TYPE: {

            if (prevState.chosenSchool){ 
                console.log(prevState.chosenCourse, payload.courseName);
             return {...prevState, chosenCourse: prevState.chosenCourse && (prevState.chosenCourse.courseName === payload.courseName) ? '' : prevState.chosenSchool.availableCourses.find(course =>course.courseName === payload.courseName)}
            }
            
        }

        case ACTION_TYPES.SCHOOL_DATA_UPDATING_ACTION_TYPE: {
            if (prevState.chosenSchool) {
                let updatedElement = prevState.schools.find(school => school.id === payload.id)
                let updatedSchool = {...updatedElement, [payload.field]: payload.value}
                return {...prevState, schools: prevState.schools.map(school => school.id == payload.id ? updatedSchool : school),
                    history: [...prevState.history, `Field ${payload.field} was updated to ${payload.value} ${now}`]}
             
                }
        
        }
    

        case ACTION_TYPES.REGISTRATION_NEW_COURSE_ACTION_TYPE: {
            if (prevState.chosenSchool) {
                let updatedElement = prevState.schools.find(school => school.id === payload.id);
                let existedCourse = updatedElement.availableCourses.find(course =>course.courseName === payload.courseName);
                if (existedCourse === undefined){
                    let updatedSchool = {...updatedElement, availableCourses: [...updatedElement.availableCourses, {courseName: payload.courseName, totalLessons: payload.totalLessons, availableTeachersAmount: payload.availableTeachersAmount}]}
                    return {...prevState, schools: prevState.schools.map(school => school.id == payload.id ? updatedSchool : school),
                        history: [...prevState.history, `New course ${payload.courseName} was created ${now}`]}
                }
            }
        }

        case ACTION_TYPES.LEARNING_GROUP_START_ACTION_TYPE: {  
            if (prevState.chosenSchool, payload.teacherName) {
                console.log(prevState);
                let updatedElement = prevState.schools.find(school => school.id === payload.schoolId);
                console.log(updatedElement);
                let existedCourse = updatedElement.availableCourses.find(course =>course.courseName === payload.courseName);
                if (existedCourse !== undefined && existedCourse.availableTeachersAmount>0) {
                    let changedCourse = {...existedCourse, availableTeachersAmount: existedCourse.availableTeachersAmount - 1};
                    let updatedSchool = {...updatedElement,
                                        startedGroups: [...updatedElement.startedGroups, {groupId: payload.groupId, courseName: payload.courseName, teacherName: payload.teacherName, amountOfStudents: payload.amountOfStudents, passedLessons: [], startedData: new Date()}],
                                        availableCourses: updatedElement.availableCourses.map(course => course.courseName === changedCourse.courseName ? changedCourse : course)}
                    return {...prevState, schools: prevState.schools.map(school => school.id == payload.schoolId ? updatedSchool : school),
                        history: [...prevState.history, `New learning group ${payload.courseName} was started ${now} by ${payload.teacherName}`]}
                }
            }    
        }

        case ACTION_TYPES.LEARNING_GROUP_END_ACTION_TYPE: {

            if(prevState.chosenSchool){
                let updatedElement = prevState.schools.find(school => school.id === payload.id);
                let finishedGroupIndex = updatedElement.startedGroups.findIndex(group => group.courseName == payload.courseName && group.teacherName == payload.teacherName);
                if ( finishedGroupIndex >= 0 ) {
                  let existedCourse = updatedElement.availableCourses.find(course =>course.courseName === payload.courseName);
       
                  let changedCourse = {...existedCourse, availableTeachersAmount: existedCourse.availableTeachersAmount + 1};

                  let  updatedSchool =  {...updatedElement, 
                    startedGroups: updatedElement.startedGroups.splice(finishedGroupIndex, 1),
                    availableCourses: updatedElement.availableCourses.map(course => course.courseName === changedCourse.courseName ? changedCourse : course)};
                  return {...prevState, schools: prevState.schools.map(school => school.id === payload.id ? updatedSchool : school),
                    history: [...prevState.history, `Learning group ${payload.courseName} was ended ${now} by ${payload.teacherName}`]}  
                }
            }
            
        }

        case ACTION_TYPES.LESSON_DONE_ACTION_TYPE: {
            if(prevState.chosenSchool) {
                let updatedElement = prevState.schools.find(school => school.id === payload.id);
                let editedLearningGroup = updatedElement.startedGroups.find(group => group.groupId === payload.groupId);
                if (editedLearningGroup) {
                   let existedLesson = editedLearningGroup.passedLessons.find(group => group.title === payload.title && group.topics === payload.topics);
                   if (existedLesson == undefined){
                    let updatedLearningGroup = {...editedLearningGroup, passedLessons: [...editedLearningGroup.passedLessons, {title: payload.title, topics: payload.topics}]};
                    let updatedSchool = {...updatedElement, startedGroups:  updatedElement.startedGroups.map(group => group.groupId === payload.groupId ? updatedLearningGroup : group)} ;
                    return {...prevState, schools: prevState.schools.map(school => school.id === payload.id ? updatedSchool : school),
                    history: [...prevState.history, `Lesson ${payload.title} was passed ${now} in ${editedLearningGroup.courseName}`]}
                   }
                }
            }
        }
        
        default: {
            return prevState;
        }
    }
}



