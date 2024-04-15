import { StaticImageData } from "next/image";

interface REACT {
  children: React.ReactNode
}

interface EDUCATION {
  year: string; 
  heading: string; 
  org: string; 
  degreeType: string; 
  link: string;
}

interface WORK {
  year: string; 
  heading: string; 
  org: string; 
  stack: string[];
}

interface PROJECT {
  image: StaticImageData;
  name: string; 
  repo: string; 
  website: string; 
  desc: string;
  stacks: string[];
}

export type { REACT, EDUCATION, WORK, PROJECT }