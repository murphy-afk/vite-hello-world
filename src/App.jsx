import './App.css'

// const App = () => <h1>Hello world</h1>;

const Paragraph = () => <p>This is a paragraph</p>;

const Button = () => {
  const onClick = () => {
    console.log('It works');
  }
  return (
    <button onClick={onClick}>This is a button</button>
  )
};

const Greet = ({ name }) => <h1>Hello {name}</h1>;


export { Paragraph, Button, Greet }
