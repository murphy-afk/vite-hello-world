import './App.css'

const App = () => <h1>Hello world</h1>;

const Paragraph = () => <p>This is a paragraph</p>;

const Button = () => {
  const onClick = () => console.log('It works');
  return (
    <button onClick={onClick}>Button</button>
  )
}

const Greet = ({ name }) => <p>Hello {name}</p>

export { App, Paragraph, Button, Greet }
