import React from 'react';
import './SaleCountdown.css';

const SaleCountdown = () => {
    return (
        <section className="sale-countdown">
            <div className="sale-overlay"></div>
            <div className="container sale-content">
                <h2 className="sale-title">DAKAR RALLY <span className="line"></span></h2>

                <div className="timer-container">
                    <span className="starts-in text-accent">starts in</span>
                    <div className="timer-box bg-accent">
                        <span className="time-value">5D</span>
                        <span className="time-separator">:</span>
                        <span className="time-value">2HR</span>
                        <span className="time-separator">:</span>
                        <span className="time-value">00M</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaleCountdown;
