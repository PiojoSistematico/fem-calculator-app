export function calculate(
  str1: string,
  str2: string,
  operation: string
): string {
  let answer = Number(str1);
  switch (operation) {
    case "+":
      answer = Number(str1) + Number(str2);
      break;
    case "-":
      answer = Number(str1) - Number(str2);
      break;
    case "x":
      answer = Number(str1) * Number(str2);
      break;
    case "/":
      answer = Number(str1) / Number(str2);
      break;
    default:
      break;
  }
  return answer.toString();
}
