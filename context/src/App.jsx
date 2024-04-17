import CountPanel from "./components/CountPanel";
// import CountProvider from "./provider/CountProvider";
import { CustHookCountProvider } from "./context/CustHookCountContext";

function App() {
    return (
        <div>
            <CustHookCountProvider>
                <CountPanel />
            </CustHookCountProvider>
        </div>
    );
}

export default App;
