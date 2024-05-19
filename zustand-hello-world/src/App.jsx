import { useState } from "react";
import ReportCounter from "./components/ReportCounter";
import ReportControl from "./components/ReportControl";
const App = () => {
    return (
        <>
            <ReportCounter />
            <ReportControl />
        </>
    );
};

export default App;
