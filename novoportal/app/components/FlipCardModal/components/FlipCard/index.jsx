'use client';

import { ArrowLeftBlue} from "../../../../components/Icons/ArrowLeftBlue"

export const FlipCard = ({ children, setShowFlipCard }) => {
    return (
        <div className='flip-card-box-container'>
            <header className="flip-card-header">
                <button type="button" onClick={() => setShowFlipCard((prev) => !prev)}>
                     <ArrowLeftBlue /> 
                </button>
                <h2 className="text-blue-black font-sans text-2xl">Cartão digital</h2>
            </header>
            <div className="flip-card-body">
                {children}
            </div>
        </div>
    )
}