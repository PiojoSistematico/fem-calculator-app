import { useState } from "react";
import { Button, RadioGroup, Radio, Label, Text } from "react-aria-components";
import { calculate } from "./helpers/calculate";

function App() {
  const [displayedValue, setDisplayedValue] = useState("");
  const [memoryValue, setMemoryValue] = useState("");
  const [operation, setOperation] = useState("");

  const [selectedTheme, setSelectedTheme] = useState("1");

  /* handle the click on a square */
  function handleClick(str: string): void {
    switch (str) {
      case "reset":
        setOperation("");
        setDisplayedValue("");
        break;
      case "del":
        setDisplayedValue((v) => v.slice(0, -1));
        break;
      case "=":
        setDisplayedValue(calculate(memoryValue, displayedValue, operation));
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        if (displayedValue != "") setMemoryValue(displayedValue);
        setDisplayedValue("");
        setOperation(str);
        break;
      default:
        setDisplayedValue((v) => v + str);
        break;
    }
  }

  return (
    <main
      data-theme={selectedTheme}
      className="font-league bg-mainBackground flex flex-col gap-6 items-center justify-center h-screen"
    >
      <header className="flex flex-row justify-between items-center w-96">
        <h1 className="text-text3 text-3xl font-bold">Calc</h1>
        <div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <RadioGroup
            className="bg-mainBackground flex flex-row gap-4 items-center"
            value={selectedTheme}
            onChange={setSelectedTheme}
          >
            <Label className="text-text3 uppercase  font-bold">Theme</Label>
            <div className="bg-toggleBackground flex flex-row gap-2 items-center p-2 rounded-xl">
              <Radio className="group" value="1">
                <div className="w-4 h-4 rounded-full group-data-[selected]:bg-keyBackground2"></div>
              </Radio>
              <Radio className="group" value="2">
                <div className="w-4 h-4 rounded-full group-data-[selected]:bg-keyBackground2"></div>
              </Radio>
              <Radio className="group" value="3">
                <div className="w-4 h-4 rounded-full group-data-[selected]:bg-keyBackground2"></div>
              </Radio>
            </div>
          </RadioGroup>
        </div>
      </header>
      <section
        title="screen"
        className="bg-screenBackground w-96 h-20 text-text3 text-3xl rounded-xl flex items-center justify-end p-6"
      >
        {Number(displayedValue).toLocaleString()}
      </section>
      <section
        title="calculator"
        data-theme={selectedTheme}
        className="bg-toggleBackground w-96 grid grid-cols-4 grid-rows-4 p-6 gap-4 rounded-xl"
      >
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("7")}
        >
          7
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("8")}
        >
          8
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("9")}
        >
          9
        </Button>
        <Button
          className="bg-keyBackground1 text-2xl font-bold text-text3 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow1"
          onPress={() => handleClick("del")}
        >
          del
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("4")}
        >
          4
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("5")}
        >
          5
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("6")}
        >
          6
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("+")}
        >
          +
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("1")}
        >
          1
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("2")}
        >
          2
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("3")}
        >
          3
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("-")}
        >
          -
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick(".")}
        >
          .
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("0")}
        >
          0
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("/")}
        >
          /
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow3"
          onPress={() => handleClick("x")}
        >
          x
        </Button>
        <Button
          className="col-start-1 col-end-3 bg-keyBackground1 text-2xl font-bold text-text3 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow1"
          onPress={() => handleClick("reset")}
        >
          reset
        </Button>
        <Button
          className="col-start-3 col-end-5 bg-keyBackground2 text-2xl font-bold text-text2 uppercase flex items-center justify-center w-18 h-12 rounded-xl border-b-2 border-keyShadow2"
          onPress={() => handleClick("=")}
        >
          =
        </Button>
      </section>
    </main>
  );
}

export default App;
