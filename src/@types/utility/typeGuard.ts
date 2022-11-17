export function isString(target) {
  return typeof target === "string";
}

export function isEmpty(target) {
  if (isString(target)) {
    return target.length === 0;
  }
  if (Array.isArray(target)) {
    return target.length === 0;
  }
}

export const required = (target: string): boolean => {
  return target.length > 0;
};
