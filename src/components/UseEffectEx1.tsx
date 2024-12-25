import React from "react";

//! Iteragir com o DOM
export const UseEffectEx1 = () => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <input
        placeholder="Inserir valor"
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
};
