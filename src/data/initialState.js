export const INITIAL_STATE = {
    meta: {
        version: 1,
        lastModified: new Date().toISOString(),
    },
    config: {
        periodStart: "",
        periodEnd: "",
        dailyStart: "18:00",
        dailyEnd: "21:00",
        excludedWeekdays: [],
        blockedDates: [],
    },
    exams: [
        {
            id: "1",
            title: "UX & Webtechnologien",
            date: "2026-02-28",
            effort: 5,
            color: "#33FF57"
        }
    ],
};