class ITSchool{
    constructor(name, description, maxGroups, maxPeopleGroup){
        this.name = name;
        this.description = description;
        this.maxGroups = maxGroups;
        this.maxPeopleGroup = maxPeopleGroup;
    }

    availableCourses = [];
    startedGroups = [];

    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        let existedCourse = this.availableCourses.find(course =>course.courseName === courseName);
        if (existedCourse === undefined) {
            this.availableCourses = this.availableCourses.push(new Course (courseName, totalLessons, availableTeachersAmount));
        }
        return this.availableCourses;
    }


    startLearningGroup(courseName, teacherName, amountOfStudents) {
        let existedCourse = this.availableCourses.find(course =>course.courseName === courseName);
        if (existedCourse !== undefined && existedCourse.availableTeachersAmount>0 ) {
            this.startedGroups = this.startedGroups.push(new LearningGroup (courseName, teacherName, amountOfStudents));   
            existedCourse.availableTeachersAmount = existedCourse.availableTeachersAmount - 1;
    
        }
        return this.startedGroups;
    }

    endLearningGroup(courseName, teacherName) {
        let finishedGroupIndex = this.startedGroups.findIndex(group => group.courseName == courseName && group.teacherName == teacherName);
        if ( finishedGroupIndex >= 0 ) {
            this.startedGroups.splice(finishedGroupIndex, 1);
            let existedCourse = this.availableCourses.find(course =>course.courseName === courseName);
            existedCourse.availableTeachersAmount = existedCourse.availableTeachersAmount + 1;

        }
        return this.startedGroups;

    }

    getLearningGroupByCourseName(courseName) {
        let learningGroups = this.startedGroups.map(groups => groups.courseName == courseName);
        return learningGroups;

    }

}