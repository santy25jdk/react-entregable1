import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const getRandomFromArray = array => {
    const indexRandom = Math.floor(array.length * Math.random())
    return array[indexRandom];
  }
  
  const [quoteRandom, setquoteRandom] = useState(getRandomFromArray(quotes))
  const [colorRandom, setcolorRandom] = useState(getRandomFromArray(colors))

  const handleClick = () =>{
    setquoteRandom(getRandomFromArray(quotes));
    setcolorRandom(getRandomFromArray(colors));
  }
  

  const objStyle = {
    backgroundColor: colorRandom
  }
  
  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRandom={quoteRandom}
        click={handleClick}
        colorRandom={colorRandom}
        />
    </div>
  )
}

export default App
