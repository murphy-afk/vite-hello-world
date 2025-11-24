import './App.css'

// const App = () => <h1>Hello world</h1>;
const Greet = ({ name }) => <h1>Hello {name}</h1>;

const Paragraph = ({ content, className }) => <p className={className}>{content}</p>;

const Button = ({ btnName }) => {
  let count = 1;
  const onClick = () => {
    if (count > 10) {
      console.log("STOP CLICKING THE BUTTON!!!!");
      count = 1;
    }
    else {
      console.log("Button works", count);
      count++;
    }
  }
  return (
    <button onClick={onClick}>{btnName}</button>
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
