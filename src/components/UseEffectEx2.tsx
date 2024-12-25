import React from 'react'

//! Iteragir com o objeto window
export const UseEffectEx2 = () => {
 
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    console.log('Inside useEffect!');

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <p>Window width: {windowWidth}px</p>
    </>
  );
}