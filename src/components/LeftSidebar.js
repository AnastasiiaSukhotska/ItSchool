import { connect } from "react-redux";
import '../styles/LeftSidebar.css';
import { chooseSchool } from "../store/actionCreators";

export function LeftSidebar ({schools, chosenSchool, dispatch}) {
    return (
        <div className='left-sidebar-container'>
        {schools.map(school => <button key={school.id} onClick={() => dispatch(chooseSchool(school.id))} className= {chosenSchool && (chosenSchool.id == school.id) ? 'left-sidebar-container__switch-chosen-school-button-chosen' : 'left-sidebar-container__switch-chosen-school-button-ordinary'}  > {school.name.substr(0,1 )} </button>)}
        </div>
    )
}

const mapStateToProps = (state) => ({schools: state.schools, chosenSchool: state.chosenSchool});

export default connect(mapStateToProps)(LeftSidebar); 