
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import  LeftSidebar  from './components/LeftSidebar';
import Header from './components/Header';
import Courses from './components/Courses';
import LearningGroups from './components/LearningGroups';
 
function App() {

  
  
  return (
    <div className="App">
      <Provider store={store}>
        <div className='container'>
         < LeftSidebar className='sidebar-container'/>
          <div className='content-and-header-container'>
            <Header />
            <div className='content-container'>
              <Courses  className='courses-container'/>
              < LearningGroups className='groups-container' />
            </div>
          </div>
       </div>
      </Provider>
    </div>
  );
}

export default App;
