import React, { useState } from 'react'

export default function FlashCard({ flashCard } : any) {
    const [flip, setFlip] = useState(false)


    return (
        <div className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {flashCard.question}
            </div>
            <div className="back">
                {flashCard.answer}
            </div>
        </div>
    )
}
