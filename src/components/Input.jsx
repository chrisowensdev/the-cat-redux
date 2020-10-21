import React, {useState} from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

const Input = () => {
    const [input, setInput] = useState('');

    const _updateInput = input => {
        setInput(input)
    };

    const _handleClick = () => {
        setName(input);
        setInput({input: ''});
    }
    return (
        <>
            <input type="text" onChange={e => _updateInput(e.target.value)}  value={input}/>
            <button type="button" onClick={_handleClick}>Update Name</button>
        </>
    )
}

export default connect(null, { setName })(Input);