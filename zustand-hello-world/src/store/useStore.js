import { create } from "zustand";

const useStore = create((set) => ({
    reports: [],
    setReports: (report) => set({ report }),
    addReport: () =>
        set((state) => ({
            reports: [...state.reports, { id: state.reports.length + 1 }],
        })),
    clearReports: () => set({ reports: [] }),
}));

export default useStore;
