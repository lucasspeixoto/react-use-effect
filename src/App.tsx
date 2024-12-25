import React from "react";

function App() {
  const [text, setText] = React.useState('');

  const [value, setValue] = React.useState(0);

  //! Renderiza sempre
  /* React.useEffect(() => {
    console.log("Renderiza App!");
  }); */

  //! Renderiza uma única vez
  /* React.useEffect(() => {
    console.log("Renderiza App!");
  }, []) */

  //! Renderiza quando um estado mudar.
  /* React.useEffect(() => {
    console.log("Renderiza App!");
  }, [value]) */

  return (
   <>
    <h1>useEffect</h1>
     <>
        <h3>Value: {value}</h3>
        <button onClick={() => setValue((v) => v + 1)}>Increment</button>
      </>

      <>
        <h3>Text: {text}</h3>
        <input placeholder="Inserir valor" onChange={(e) => setText(e.target.value)} />
      </>
   </>
  );
}

export default App;
