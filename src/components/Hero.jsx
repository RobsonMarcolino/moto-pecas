import React from 'react';
import heroVideo from '../assets/hero_video.webm';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <video autoPlay loop muted playsInline className="hero-video">
                <source src={heroVideo} type="video/webm" />
            </video>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <span className="hero-subtitle text-accent animate-fade-up">Discover</span>
                <h1 className="hero-title animate-fade-up delay-1">
                    THE ULTIMATE <br /> MOTO PEÇAS
                </h1>

            </div>

            <div className="hero-bottom-text text-accent">
                explore products
            </div>
        </section>
    );
};

export default Hero;
