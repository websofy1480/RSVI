interface Category {
  title: string;
  description: string;
  image: string;
}

export interface CategoryProps {
  categories: Category[];
  setCourseTitle: (title: string) => void;
  setCourseDes: (title: string) => void;
}