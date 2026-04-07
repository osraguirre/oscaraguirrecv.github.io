export interface MainInfo {
    id: number;
    name: string;
    lastName: string;
    location: string;
    role: string;
    skills: {
        id: number;
        technology: string;
        level: string;
        profile: string;
    };
}