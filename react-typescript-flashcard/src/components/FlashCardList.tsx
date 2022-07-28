import React from 'react'
import FlashCard from '../components/FlashCard'
 
 export default function FlashCardList({ flashCards } : any) {
   return (
     <div className='card-grid'>
     {flashCards.map((flashCard: { id: any } ) => {
         return <FlashCard flashCard = {flashCard} key = {flashCard.id} /> 
     })}
     </div>
   )
 }
 