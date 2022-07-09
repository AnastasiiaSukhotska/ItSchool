class LearningGroup {
    constructor (courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
    }

    passedLessons = [];

    doneLesson(title, topics) {
        let passedLesson = this.passedLessons.find(lesson => lesson.title == title && lesson.topics == topics);
        if (passedLesson == undefined ){
            this.passedLessons = this.passedLessons.push(new Lesson(title, topics))
        }
        return this.passedLessons;
    }
}