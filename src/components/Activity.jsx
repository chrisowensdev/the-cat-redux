import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions';

const Activity = ({cats, addCat}) => {
    const catArray = Object.keys(cats);
    const [catName, setCatName] = useState("");
    const [activity, setActivity] = useState("");

    const _handleName = (name) => {
        setCatName(name);
    };

    const _handleActivity = (e) => {
        setActivity(e.target.value);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        addCat({ name: catName, activity });
        setCatName("");
        setActivity("");
    };
    
    return (
    <>

    <form onSubmit={(e) => _handleSubmit(e)}>
        <input
            type="text"
            placeholder="Name"
            onChange={(e) => _handleName(e.target.value)}
            value={catName}
        />
        is
        <select
            name="activity"
            value={activity}
            onChange={(e) => _handleActivity(e)}
        >
            <option defaultValue>Choose an Activity</option>
            <option value="eating">Eating</option>
            <option value="napping">Napping</option>
            <option value="playing">Playing</option>
        </select>
        <button type="submit">Submit</button>
    </form>


    <ul>
        {catArray.map((cat) => {
            return (
            <li key={cat}>
            {cats[cat].name} is {cats[cat].activity}
            </li>
        )})}
        
    </ul>
    </>
    )
};

const mapStateToProps = state => {
    const { cats } = state;
    console.log(cats);
    return cats;
}

export default connect(mapStateToProps, {addCat})(Activity);