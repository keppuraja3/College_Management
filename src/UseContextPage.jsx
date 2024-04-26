import React, { createContext, useContext, useState } from "react";

const UserContent = createContext();

function UseContextPage() {
  const [name, setName] = useState("Vannakkam da mapla");

  return (
    <>
      <UserContent.Provider value={name}>
        <h1>{name}</h1>
        <Child1></Child1>
      </UserContent.Provider>
    </>
  );
}

function Child1() {
  return (
    <>
      <h1>Child 1</h1>
      <Child2></Child2>
    </>
  );
}
function Child2() {
  return (
    <>
      <h1>Child 2</h1>
      <Child3></Child3>
    </>
  );
}
function Child3() {
  return (
    <>
      <h1>Child 3</h1>
      <Child4></Child4>
    </>
  );
}
function Child4() {
  return (
    <>
      <h1>Child 4</h1>
      <Child5></Child5>
    </>
  );
}
function Child5() {
  const r = useContext(UserContent);
  return (
    <>
      <h1>Child 5</h1>
      <p>{r}</p>
    </>
  );
}

export default UseContextPage;
