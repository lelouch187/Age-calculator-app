import Form from "./components/Form";
import MyButton from "./components/MyButton";
import Result from "./components/Result";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="App">
          <Form />
          <MyButton />
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
