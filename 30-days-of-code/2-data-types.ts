"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

type InputTy = {
  integer?: number;
  float?: number;
  text?: string;
};

type ResponseTy = InputTy & {
  float: string;
};
const inicializateInput = (input: InputTy) => {
  input.integer = parseInt(readLine());
  input.float = parseFloat(readLine());
  input.text = readLine();

  return input;
};

const createResponse = ({ integer, float, text }: InputTy): ResponseTy => {
  const hackerRankText = "HackerRank";
  return {
    integer: Math.ceil(integer + float),
    text: `${hackerRankText} ${text}`,
    float: (float + float).toFixed(1),
  } as ResponseTy;
};

const logOutput = (input: ResponseTy) => {
  console.log(input.integer);
  console.log(input.float);
  console.log(input.text);
};

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  const input: InputTy = inicializateInput({});
  const response: ResponseTy = createResponse(input);
  logOutput(response);
}
