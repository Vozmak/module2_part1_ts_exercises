declare module 'str-utils' {
  type exportFunc = (value: string) => string;

  export const strReverse: exportFunc;
  export const strToLower: exportFunc;
  export const strToUpper: exportFunc;
  export const strRandomize: exportFunc;
  export const strInvertCase: exportFunc;
}
