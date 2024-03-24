export const f = (name: string) => ({ name });
export const g: (name: string) => void = f;
