// MeditationColumn.js
import React from 'react';
import './MeditationColumn.css';

const MeditationColumn = () => {
    const meditationTips = [
        {
            title: "Morning Mindfulness",
            description: "Start your day with 5 minutes of mindful breathing to center yourself."
        },
        {
            title: "Body Scan Meditation",
            description: "Spend a few minutes focusing on each part of your body to relax and de-stress."
        },
        {
            title: "Gratitude Reflection",
            description: "At the end of the day, reflect on three things you’re grateful for."
        }
    ];

    return (
        <div className="meditation-column">
            <h2>Meditation Tips</h2>
            <ul>
                {meditationTips.map((tip, index) => (
                    <li key={index} className="meditation-tip">
                        <h3>{tip.title}</h3>
                        <p>{tip.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeditationColumn;
