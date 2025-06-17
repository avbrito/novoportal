import React from 'react';
import './index.css';

export const BottomFlipCard = ({ flip, setFlip }) => {
    return (
        <div className="flip-toggle-container">
            <span className={`toggle-label ${flip ? '' : 'active'} text-blue-black`}>Verso</span>

            <label className="switch">
                <input 
                    type="checkbox" 
                    checked={flip} 
                    onChange={() => setFlip(prev => !prev)} 
                />
                <span className="slider"></span>
            </label>

            <span className={`toggle-label ${flip ? 'active' : ''} text-blue-black`}>Frente</span>
        </div>
    );
};
