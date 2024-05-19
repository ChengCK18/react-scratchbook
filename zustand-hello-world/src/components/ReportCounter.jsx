import React from "react";
import useStore from "../store/useStore";

const ReportCounter = () => {
    const reports = useStore((state) => state.reports);

    return (
        <div>
            <h2>Total reports:{reports.length}</h2>
        </div>
    );
};

export default ReportCounter;
