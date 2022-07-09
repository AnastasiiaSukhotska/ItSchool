import { ACTION_TYPES } from "./actionTypes";

export function creatingNewSchool ( name, description, maxGroups, maxPeopleGroup, id) {
    return { type: ACTION_TYPES.CREATING_NEW_SCHOOL_ACTION_TYPE, payload: {name: name, description: description, maxGroups: maxGroups, maxPeopleGroup: maxPeopleGroup, id, availableCourses: [], startedGroups: []} };
}
export function schoolDataUpdated (field, value, id) {
    return { type: ACTION_TYPES.SCHOOL_DATA_UPDATING_ACTION_TYPE, payload: {field, value, id} };
}

export function creatingNewCourse (courseName, totalLessons, availableTeachersAmount, id ) {
    return { type: ACTION_TYPES.REGISTRATION_NEW_COURSE_ACTION_TYPE, payload: {courseName: courseName, totalLessons: totalLessons, availableTeachersAmount: availableTeachersAmount, id}};
}

export function learningGroupStart (groupId, courseName, teacherName, amountOfStudents, schoolId ) {
    return { type: ACTION_TYPES.LEARNING_GROUP_START_ACTION_TYPE, payload: {groupId, courseName: courseName, teacherName: teacherName, amountOfStudents: amountOfStudents, schoolId}};
}

export function learningGroupsEnd (courseName, teacherName, id) {
    return { type: ACTION_TYPES.LEARNING_GROUP_END_ACTION_TYPE, payload: {courseName: courseName, teacherName: teacherName, id} };
}

export function lessonDone ( title, topics, groupId, id ) {
    return { type: ACTION_TYPES.LESSON_DONE_ACTION_TYPE, payload: {title: title, topics: topics, groupId, id}};
}

export function chooseSchool (id) {
    return { type: ACTION_TYPES.CHOOSE_SCHOOLE_ACTION_TYPE, payload: {id}}
}