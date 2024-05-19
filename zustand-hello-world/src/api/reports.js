export const fetchReports = async () => {
    const response = await fetch("");
    if (!response.ok) {
        throw new Error("Failed to fetch data from server~");
    }

    return response.json();
};
