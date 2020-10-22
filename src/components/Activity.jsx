import React from 'react';
import { connect } from 'react-redux';

const Activity = ({cats}) => {
    const catArray = Object.keys(cats);
    return (
    <ul>
        {catArray.map((cat, index) => {
            return (
            <li key={cat}>
            {cats[cat].name} is {cats[cat].activity}
            </li>
        )})}
        
    </ul>)
};

const mapStateToProps = state => {
    const { cats } = state;
    return cats;
}

export default connect(mapStateToProps, null)(Activity);