import { useState, useEffect } from 'react';
import './App.css';

/* const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.Age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'John'} lastName = {'Doe'} Age = {'25'}/>
      <Person name={'Sneha'} lastName = {'Venkatesh'} Age = {'25'}/>
      <Person name= "marry" lastName = 'Venkatesh' Age = {'25'}/>
    </div>
  );
}  */

const App = () => {
  const [counter, setCounter] = useState(0); //use State hook [ ] is array destructing if use is used its called hook call secound variable as same as first add set 
  
  useEffect(() => {
    //counter = 100;//never mutatate state maually 
    alert("you have changed counter to " + counter)

  }, [counter]);//dependency array we have set our dependency array to be empty

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
}

export default App;
