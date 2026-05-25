import { useState } from "react";

function Component() {
  //   const [state, setState] = useState('hello');
  const [, triggerRender] = useState();

  let state = "hello";

  function handleButtonClick() {
    // setState("hi");
    state = "hi";
    triggerRender();
  }

  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleButtonClick}>h1</button>
    </>
  );
}

export default Component;
