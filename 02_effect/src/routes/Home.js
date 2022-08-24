import { useEffect, useState } from "react";

const Home = () => {
    // useEffect
    const [number, setNumber] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const sayHello = () => { console.log("hello"); }
    useEffect(() => {
        sayHello();
    }, [number]);

    // useTitle
    const useTitle = (initialValue) => {
        const [title, setTitle] = useState(initialValue);
        const upDateTitle = () => {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerText = title;
        }
        useEffect(upDateTitle, [title]);
        return (setTitle);
    };

    // useClick
    

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div>
            <h1> Hello React Hooks useEffect </h1>
            <hr />
            <div className="useEffect">
                <h2> mount test by useEffect </h2>
                <button onClick={() => { setNumber((current) => current + 1);}}> {number} </button>
                <button onClick={() => { setNumberTwo((current) => current + 1);}}> {numberTwo} </button>
            </div>
        </div>
    )
}
export default Home;
