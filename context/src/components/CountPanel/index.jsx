import { useContext } from "react";
import { useCustHookCount } from "../../context/CustHookCountContext";

const CountPanel = () => {
    const { count, handleIncrement, rando } = useCustHookCount();

    const handleOnIncrement = (e) => {
        handleIncrement();
    };
    return (
        <div>
            Count Panel Weeeeeeeeeeee {count}
            <button onClick={handleOnIncrement}>{rando}</button>
        </div>
    );
};

export default CountPanel;

// import { useContext } from "react";
// import CountContext from "../../context/CountContext";

// const CountPanel = () => {
//     const { count, setCount, rando } = useContext(CountContext);

//     const handleOnIncrement = (e) => {
//         const temp = count + 1;
//         setCount(temp);
//     };
//     return (
//         <div>
//             Count Panel Weeeeeeeeeeee {count}
//             <button onClick={handleOnIncrement}>{rando}</button>
//         </div>
//     );
// };

// export default CountPanel;
