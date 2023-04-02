import Button from "./components/Buttons/ButtonOne";

function App() {
  return (
    <div className="App flex flex-col gap-4">
      <div className="flex gap-4 p-4 dark dark:bg-slate-900">
        <Button>Primary</Button>
        <Button>Secondary</Button>
      </div>
      <div className="flex gap-4 p-4 ">
        <Button>Primary</Button>
        <Button disabled>Secondary</Button>
      </div>
    </div>
  );
}

export default App;
