import { useState } from 'react';
import './Form.scss';

const Form = ({ getResponse }) => {
    const [prompt, setPrompt] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        const text = e.target.value;
        setPrompt(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setToggle(true);
        getResponse(prompt, toggle);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label> Enter prompt: </label>
                <textarea type="text" name="name" value={prompt} rows="5" cols="30" onChange={handleChange}/>
                <div className="submit"> 
                    <input type="submit" className="submit-btn" value="Submit"/>
                </div>
        </form>
    )
}

export default Form;