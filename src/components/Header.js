import { connect } from "react-redux";
import '../styles/Header.css';
function Header({chosenSchool}) {
    const countStudents = (arr) => {
        let studentAmount = 0;
        for (let i=0; i<arr.length; i++){
            studentAmount+=arr[i].amountOfStudents;
        }
        console.log(studentAmount);
        return studentAmount;
    }

    return(
        <div className='header-container'>
             <div className={chosenSchool ? 'header-container-welcome-sign-none' : 'header-container-welcome-sign'}> {chosenSchool ? '' : 'Welcome to ITSchoolsClient!'}</div>
          <div className='header-container__title-description'>
             <h1 className='header-container__title'>{chosenSchool ? chosenSchool.name : ''}</h1>
             <p className='header-container__description'>{ chosenSchool ? chosenSchool.description : '' }</p>
          </div>
          <div className='header-container__aditional-information'> 
              <p className='header-container__group-count'>{chosenSchool ? (`Group count: ${(chosenSchool.startedGroups.length)}/${chosenSchool.maxGroups}`): ''} </p>
              <p className='header-container__student-count'>{chosenSchool ? (`Total amount of students: ${countStudents(chosenSchool.startedGroups)}`) : ''}</p>
          </div>
        </div>
    )
}

const mapStateToProps = (state) => ({chosenSchool: state.chosenSchool});
export default connect(mapStateToProps)(Header); 