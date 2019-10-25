type ToastVariant = "success" | "fail" | "default";
type Optional<T> = T | undefined | null;

type Nullable<T> = T | null;

type ObjectKey<T = any> = { [key: string]: T };

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
