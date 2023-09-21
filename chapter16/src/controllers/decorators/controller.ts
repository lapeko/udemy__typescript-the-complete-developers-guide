export const controller = (path: string) => (constructor: Function) => {
  console.log("====>", path);
};
