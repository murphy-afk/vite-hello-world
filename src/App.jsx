import './App.css'

function App() {
  return (
    <h1>Hello world</h1>
  )
}

function Paragraph() {
  return (
    <p>This is a paragraph</p>
  )
}
function Button() {
  return (
    <button>Button</button>
  )
}

const Greet = (name) => {
  name = "You";
  return (
    console.log(`Hello ${name}`)
  )
}

export { App, Paragraph, Button, Greet }
