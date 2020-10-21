import React from 'react';
import { connect } from 'react-redux';
import { eat, play, nap } from '../redux/actions';

import Input from './Input';

const Activity = ({ activity, name, eat, play, nap }) => (

    <>
        <h1>What is the cat doing now???</h1>
        <p>{name} cat is {activity}</p>
        <button type="button" onClick={() => eat()}>Eating</button>
        <button type="button" onClick={() => play()}>Playing</button>
        <button type="button" onClick={() => nap()}>Napping</button>
        <Input />
        
    </>
);

const mapStateToProps = state => {
    const { name, activity } = state.activity;
    console.log(state)
    return {name, activity};
}

export default connect(mapStateToProps, {eat, play, nap})(Activity);