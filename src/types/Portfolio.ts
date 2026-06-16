export interface Experience {
    company: string;
    role: string;
    duration: string;
    points: string[];
    current?:boolean;
}

export interface Education {
    degree: string;
    score: string;
    total: string;
    scoreType: "CGPA" | "Percentage";
    year: string;
    subjects: string[];
}

export interface SkillGroup {
    category: string;
    items : string[]
}

export interface Project {
    title:string;
    stack: string[];
    highlights: string[];
    link?: string;
}

export type Achievement = string[];