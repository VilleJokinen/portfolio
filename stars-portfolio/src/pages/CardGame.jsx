import '../CardGame.css'
import PlayButton from '../PlayButton';
import Card from '../Card'
import {useState} from 'react'
import '../style.css'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);



const playerCard = {
  image: "https://placekitten.com/120/100",
  stats: [
    { name: 'Looks', value: getRandomInt(1, 999) }, 
    { name: 'Speed', value: getRandomInt(1, 999) },
    {name: 'Weight', value: getRandomInt(1, 999) },
  ]

}

const opponentCard = {
  image: "https://placekitten.com/120/100",
  stats: [{ name: 'Looks', value: 18 },
          {name: 'Speed', value: 12}]
}

const createCard = index => ({
    image: `http://placekitten.com/120/100?image=${index}`,
    stats: [
    { name: 'Looks', value: getRandomInt(1, 999) }, 
    { name: 'Speed', value: getRandomInt(1, 999) },
    {name: 'Weight', value: getRandomInt(1, 999) },
  ],
    id: crypto.randomUUID()
})

const deck = Array(16).fill(null).map((_,index)=>createCard(index))
const half = Math.ceil(deck.length / 2)

const dealCards = () => {
  shuffle(deck)
  return {
    player: deck.slice(0, half),
    opponent: deck.slice(half)
  }
}

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export default function CardGame() {
  
  const[result, setResult] = useState('')
  const[cards, setCards] = useState(dealCards)
  
  const [gameState, setGameState] = useState('play');

  const [selectedStat, setSelected] = useState(0);

  if(gameState !== 'game_over' && (!cards.opponent.length  || !cards.player.length)){
    setResult(()=>{
      if(!cards.opponent.length) return 'You won!';
      else if(!cards.player.length) return 'You lost!';
      return 'Draw';
    });
    setGameState('game_over');
  }


  function compareCards() {


    const playerStats = cards.player[0].stats[selectedStat];
    const opponentStats = cards.opponent[0].stats[selectedStat];

    if (playerStats.value > opponentStats.value) {
      setResult('win')
    }
    else if (playerStats.value < opponentStats.value) {
      setResult('loss')    }
    else {
      setResult('draw')
    }

    setGameState('result')

  }

  function nextRound() {
    setCards(cards => {
      const playedCards = [{ ...cards.player[0] }, { ...cards.opponent[0] }]
      const player = cards.player.slice(1)
      const opponent = cards.opponent.slice(1)
      if (result === 'draw') {
        return {
          player,
          opponent
        }
      }
      if (result === 'win')
      {
        return {
          player: [...player, ...playedCards],
          opponent
        };
      }
      if (result === 'loss')
      {
        return {
          opponent: [...opponent, ...playedCards],
          player
        };
      }
      return cards;
      
    })
    setGameState('play')
    setResult('')

  }
  
  function restartGame(){
    setCards(dealCards);
    setResult('');
    setGameState('play');
  }


  return (
    <div>
      <h1>Card Game</h1>
      <div className='game'>
        <div className='hand player'>
          <h2>Player</h2>
          <ul className='card-list'>
            {cards.player.map((playerC,index) => (
              <li className='card-list-item player' key={playerC.id}>
                <Card card={index === 0 ? playerC : null} handleSelect={statIndex => gameState === 'play' && setSelected(statIndex)} selectedStat={selectedStat} />

              </li>
            ))}
          </ul>
        </div>
        

        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          {
            gameState === 'play' ? (<PlayButton text={'Play'} handleClick={compareCards} />)

            :
              
            gameState === 'game_over' ? (<PlayButton text={'Restart'} handleClick={restartGame} />) : (<PlayButton text={'Play'} handleClick={nextRound} />)

          }
        </div>
        <div className='hand'>
          <h2>Opponent</h2>
          <ul className='card-list opponent'>
            {cards.opponent.map((opponentC, index) => (
              <li className='card-list-item opponent' key={opponentC.id}>
                <Card card={result && index === 0 ? opponentC : null}/>

              </li>
            ))}
          </ul>
        </div>  
        

      </div>
      
    </div>
    
  );
}