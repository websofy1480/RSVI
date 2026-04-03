export interface internship {
  _id?: string;
  title: string;
  image: string;
  description: string;
  image_publicId?: string | null
};

export interface InternshipProps {
  internshipData?: internship[];
  perksData?: internship[];
};