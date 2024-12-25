import React from "react";

function App() {
  const [text, setText] = React.useState('');

  const [value, setValue] = React.useState(0);

  //! Executa sempre
  /* React.useEffect(() => {
    console.log('useEffect chamado');
  }); */

  //! Executa uma única vai (início)
  /* React.useEffect(() => {
    console.log('useEffect chamado');
  }, []); */

  //! Executa sempre que o value alterar
  /* React.useEffect(() => {
    console.log('useEffect chamado');
  }, [value]); */

  return (
   <>
    <h1>useEffect</h1>
     <>
        <h3>Value: {value}</h3>
        <button onClick={() => setValue((v) => v - 1)}>−</button>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
      </>

      <>
        <h3>Text: {text}</h3>
        <input placeholder="Inserir texto" onChange={(e) => setText(e.target.value)} />
      </>
   </>
  );
}

export default App;
