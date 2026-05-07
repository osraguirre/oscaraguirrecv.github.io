export interface Skill {
  id: number;
  technology: string;
  level: string;
}

export interface ContactInfo {
  id: number;
  email: string;
  phoneNumber: string;
  linkedin: string;
  github: string;
}

export interface MainInfo {
  id: number;
  name: string;
  lastName: string;
  location: string;
  role: string;
  skills: Skill[];
  contactInfo: ContactInfo[];
}

// Tipo union para manejar tanto array directo como objeto con value
export type ProfilesResponse = MainInfo[] | {
  value: MainInfo[];
  Count: number;
};
