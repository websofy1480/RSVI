export interface SearchState {
  name?: string;
  title?: string;
  "initiatives type"?: string;
  "award year"?: string;
  question?: string;
}

export const searchKeys: (keyof SearchState)[] = ["name", "title", "initiatives type", "award year", "question"];

export const updateStateField = <T, K extends keyof T>(
  setState: React.Dispatch<React.SetStateAction<T>>, key: K, value: T[K]) => {
  setState((prev) => ({
    ...prev,
    [key]: value,
  }));
};
