export interface Internship {
  _id: string;
  title: string;
  image: string;
  description: string;
};

export interface InternshipProps {
  internshipData?: Internship[];
  perksData?: Internship[];
};