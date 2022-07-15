import { connect } from "react-redux";
import { chooseCourse } from "../store/actionCreators";
import '../styles/Courses.css';
function Courses ({chosenSchool, dispatch, chosenCourse}) {
    return (
        <div className= {chosenSchool ? 'courses-container' : 'courses-container-none'} >
           <h2 className='courses-container__title'>Courses</h2>
           <div>
              {chosenSchool ? (chosenSchool.availableCourses.map(course => (<div key={course.courseName} className= {chosenCourse && (chosenCourse.courseName == course.courseName) ? 'courses-container__item-chosen' : 'courses-container__item-ordinary'}  onClick={() => (dispatch(chooseCourse(course.courseName)))}>{course.courseName}</div>))) : ''}
           </div>
        </div>
    )
}

const mapStateToProps = (state) => ({chosenSchool: state.chosenSchool, chosenCourse: state.chosenCourse});
export default connect(mapStateToProps)(Courses); 