import './App.css'

// const App = () => <h1>Hello world</h1>;
const Greet = ({ name }) => <h1>Hello {name}</h1>;

const Paragraph = () => <p>This is a paragraph</p>;

const Button = () => {
  let count = 1;
  const onClick = () => {
    if (count > 10) {
      console.log("STOP CLICKING THE BUTTON!!!!");
    }
    else {
      console.log("Button works", count);
      count++;
    }
  }
  return (
    <button onClick={onClick}>This is a button</button>
  )
};

export { Paragraph, Button, Greet }
