import React, { useState } from 'react'
import Higherordercom from './HOC';

const Student2 = (props) => {
    return (
        <div>Student 2
            <h3>{props.num}</h3>
            <button onClick={props.handleEvent}>Count Inc</button>
        </div>
    )
}
export default Higherordercom(Student2)
