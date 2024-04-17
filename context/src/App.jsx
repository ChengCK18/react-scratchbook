import { useState } from "react";
import CountPanel from "./components/CountPanel";
import CountProvider from "./provider/CountProvider";
function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountProvider>
                <CountPanel />
            </CountProvider>
        </div>
    );
}

export default App;
