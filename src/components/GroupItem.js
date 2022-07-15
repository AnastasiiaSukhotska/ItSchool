import '../styles/GroupItem.css';


export function GroupItem ({group}) {
    return (
        <div className='item-container'>
            <h3 className='item-container__title'>{`Learning Group ${group.groupId}`}  </h3>
            <div className='boxes-container'>
                <div className='boxes-container__box'>
                    <div className='box__big-sign'>{group.teacherName}</div>
                    <div className='box__small-sign'>teacher</div>
                </div>
                <div className='boxes-container__box'>
                    <div className='box__big-sign'>{`${group.passedLessons.length}/29`}</div>
                    <div className='box__small-sign'>passed lessons</div>
                </div>
                <div className='boxes-container__box'>
                    <div className='box__big-sign'>{`${group.amountOfStudents}/15`}</div>
                    <div className='box__small-sign'>students</div>
                </div>
                <div className='boxes-container__box'>
                    <div className='box__big-sign'>{group.groupStarted}</div>
                    <div className='box__small-sign'>group started</div>
                </div>
            </div>
            <div className='done-lessons-representation-container'> 
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
                <div className='done-lessons-representation-element'></div>
            </div>
        </div>
    )
}

