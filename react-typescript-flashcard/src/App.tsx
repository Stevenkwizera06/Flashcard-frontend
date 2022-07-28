import React, {useState} from "react";
import FlashCardList from "./components/FlashCardList";
import './App.css'

function App() {

const [flashCards] = useState(sampleFlashCard)

  return (
   <FlashCardList flashCards = {flashCards} />
  );
}

const sampleFlashCard = [
  {
    id: 1,
    question: 'when did Rwanda get indepence?',
    answer: '1962'
  },
  {
    id: 2,
    question: 'who is the president of Rwanda?',
    answer: 'Paul Kagame '
  },
  {
    id: 3,
    question: 'How many districts in Rwanda ',
    answer: '30 districts '
  },
  {
    id: 4,
    question: 'What is the capital city of Rwanda?',
    answer: 'Kigali'
  }
]

export default App;
