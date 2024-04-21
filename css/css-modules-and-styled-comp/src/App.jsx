import { useState } from "react";
import UselessButton from "./components/UselessButton";
import Heading from "./components/Heading";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Heading>Hey there styled component</Heading>
            <UselessButton />
        </>
    );
}

export default App;
