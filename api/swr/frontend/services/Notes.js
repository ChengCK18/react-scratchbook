import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const useNotes = () => {
    const { data, error, isLoading } = useSWR(
        "http://localhost:3001/notes",
        fetcher
    );

    return {
        notes: data,
        isLoading,
        isError: error,
    };
};
export default useNotes;
