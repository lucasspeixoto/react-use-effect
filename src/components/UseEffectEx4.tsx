import React from 'react'

//! Iteragir com eventos do teclado
export const UseEffectEx4 = () => {

  React.useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (key !== 'Enter') return;

      console.log('Enter pressed!')
    };

    document.addEventListener('keydown', keyHandler);

    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <h3>UseEffectEx4</h3>
  )
}
