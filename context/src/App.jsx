import CountPanel from "./components/CountPanel";
import CountProvider from "./provider/CountProvider";
function App() {
    return (
        <div>
            <CountProvider>
                <CountPanel />
            </CountProvider>
        </div>
    );
}

export default App;
