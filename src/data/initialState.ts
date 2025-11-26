export interface Exam {
    id: string;
    title: string;
    date: string;
    effort: number;
    color: string;
}

export interface Config {
    periodStart: string;
    periodEnd: string;
    dailyStart: string;
    dailyEnd: string;
    excludedWeekdays: string[];
    blockedDates: string[];
}

export interface Meta {
    version: number;
    lastModified: string;
}

export interface AppState {
    meta: Meta;
    config: Config;
    exams: Exam[];
}

export const INITIAL_STATE: AppState = {
    meta: {
        version: 1,
        lastModified: new Date().toISOString(),
    },
    config: {
        periodStart: "",
        periodEnd: "",
        dailyStart: "18:00",
        dailyEnd: "21:00",
        excludedWeekdays: ["0", "6"],
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