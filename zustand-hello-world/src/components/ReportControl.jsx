import useStore from "../store/useStore";

const ReportControl = () => {
    const addReport = useStore((state) => state.addReport);
    const clearReport = useStore((state) => state.clearReports);
    return (
        <div>
            <button onClick={addReport}>Add</button>
            <button onClick={clearReport}>Clear</button>
        </div>
    );
};

export default ReportControl;
