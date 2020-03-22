
const missMinNum = (arr: number []): number => {
  let res = 0;
  const map = new Map();
  arr.forEach((a: number) => {
    map.set(a, 1);
  });
  while (map.has(res)) {
    res += 1;
  }
  return res;
};

export default missMinNum;
