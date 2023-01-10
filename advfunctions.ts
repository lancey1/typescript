export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutationFunction: MutationFunction = (v: number) => v*80;

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

type AdderFunc = (v: number) => number

export function createAdder (num:number): AdderFunc {
    return (v:number) => num + v;
}

const addOne = createAdder(1)
console.log(addOne(55))