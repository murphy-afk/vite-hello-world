import { useState } from 'react';
import './App.css'

// const App = () => <h1>Hello world</h1>;
const Greet = ({ name }) => <h1>Hello {name}</h1>;

const Paragraph = ({ content, className }) => <p className={className}>{content}</p>;

const Button = ({ btnName }) => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    if (count === 0) {
      alert("thanks for cliking");
      setCount(count + 1);
    }
    else if (count === 10) {
      alert("STOP CLICKING THE BUTTON!!!!");
      setCount(1);
    }
    else {
      console.log("Button works", count);
      setCount(count + 1);
    }
  }
  return (
    <div>
      <button onClick={onClick}>{btnName}</button>
      <p>Clicks: {count}</p>
    </div>
  )
};

const Image = ({ id }) => {
  const url = `https://picsum.photos/id/${id}/200/300`;
  const log = (e) => console.log(`photo url: ${e.target.src}`);

  return (
    <img onClick={log} src={url} alt="pic" />
  )
}
export { Paragraph, Button, Greet, Image }
