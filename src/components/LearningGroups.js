import { connect } from "react-redux";
import '../styles/Groups.css';
import { GroupItem}  from "./GroupItem";
function LearningGroups ({chosenSchool, chosenCourse}) {
    return ( 
        <div className= {chosenSchool ? 'groups-container' : 'groups-container-none'}>
           <h2 className='group-container-title'>{`Learning Groups ${chosenCourse.courseName ? chosenCourse.courseName : ''}`}</h2>
           {chosenCourse ? chosenSchool.startedGroups.filter(group => group.courseName == chosenCourse.courseName).map(group => (<GroupItem key={group.groupId} group={group}/>)) : chosenSchool.startedGroups ? chosenSchool.startedGroups.map(group => (<GroupItem key={group.groupId} group={group}/>)) : ''}
        </div>
    )
}
const mapStateToProps = (state) => ({chosenSchool: state.chosenSchool, chosenCourse: state.chosenCourse});
export default connect(mapStateToProps)(LearningGroups); 