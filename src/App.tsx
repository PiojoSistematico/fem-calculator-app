import { useState } from "react";
import { Button, RadioGroup, Radio, Label, Text } from "react-aria-components";

function App() {
  const [count, setCount] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState("1");

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
        Calculations
      </section>
      <section
        title="calculator"
        data-theme={selectedTheme}
        className="bg-toggleBackground w-96 h-96 grid grid-cols-4 grid-rows-4 p-6 gap-6 rounded-xl"
      >
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1 uppercase flex items-center justify-center w-16 h-16 rounded-xl"
          onPress={() => console.log("Hello world!")}
        >
          7
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1"
          onPress={() => console.log("Hello world!")}
        >
          8
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl font-bold text-text1"
          onPress={() => console.log("Hello world!")}
        >
          9
        </Button>
        <Button
          className="bg-keyBackground1 text-3xl font-bold text-text3"
          onPress={() => console.log("Hello world!")}
        >
          del
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl"
          onPress={() => console.log("Hello world!")}
        >
          4
        </Button>
        <Button
          className="bg-keyBackground3 text-3xl"
          onPress={() => console.log("Hello world!")}
        >
          5
        </Button>
        <Button
          className="bg-keyBackground3"
          onPress={() => console.log("Hello world!")}
        >
          6
        </Button>
        <Button
          className="bg-keyBackground3"
          onPress={() => console.log("Hello world!")}
        >
          +
        </Button>
        <Button
          className="bg-keyBackground3"
          onPress={() => console.log("Hello world!")}
        >
          1
        </Button>
        <Button
          className="bg-keyBackground3"
          onPress={() => console.log("Hello world!")}
        >
          2
        </Button>
        <Button
          className="bg-keyBackground3"
          onPress={() => console.log("Hello world!")}
        >
          3
        </Button>
        <Button
          className="bg-keyBackground3"
          onPress={() => console.log("Hello world!")}
        >
          -
        </Button>
        <Button
          className="bg-keyBackground1 text-3xl font-bold text-text3 col-start-1 col-end-3"
          onPress={() => console.log("Hello world!")}
        >
          reset
        </Button>
        <Button
          className="bg-keyBackground2 text-3xl font-bold text-text3 col-start-3 col-end-5"
          onPress={() => console.log("Hello world!")}
        >
          =
        </Button>
      </section>
    </main>
  );
}

export default App;
