import { useState } from "react";

const Home = () => {
    const [item, setItem] = useState(42);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    const useInput = (initialValue, validator) => {
        const [value, setValue] = useState(initialValue);
        const onChange = (event) => {
            if (event.target.value.length <= 10)
                setValue(event.target.value);
        }
        return { value, onChange };
    };
    const name = useInput("");
    return (
        <div>
            <h1> Hello React Hooks </h1>
            <div className="useState">
                <h2> useState item: {item} </h2>
                <button onClick={incrementItem}> + </button>
                <button onClick={decrementItem}> - </button>
            <hr />
            </div>
            <div className="useInput">
                <input {...name} placeholder="Name"></input>
                
            </div>
            <div>

            </div>
        </div>
    )
}
export default Home;
