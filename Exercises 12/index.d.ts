declare module 'stats' {
  type Comparator<T> = (a:T, b: T) => number;
  type Index = <T>(input: T[], comparator: Comparator<T>) => number;

  export const getMaxIndex: Index;
  export const getMinIndex: Index;
  export const getMedianIndex: Index;

  type Element = <T>(input: T[], comparator: Comparator<T>) => T | null

  export const getMaxElement: Element;
  export const getMinElement: Element;
  export const getMedianElement: Element;

  type GetValue<T> = (item: T) => number
  type Value = <T>(input: T[], getValue: GetValue<T>) => number | null;

  export const getAverageValue: Value;
}
