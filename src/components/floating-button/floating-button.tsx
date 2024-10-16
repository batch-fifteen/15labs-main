import React, { useEffect, useState } from 'react';
import FloatingImage from '../../assets/floatingbutton.svg';

interface FloatingButtonProps {
    homeRef: React.RefObject<HTMLDivElement>;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({ homeRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const buttonStyle = {
        position: 'fixed' as 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#151D48',
        color: 'white',
        border: 'none',
        borderRadius: '20%',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        display: isVisible ? 'block' : 'none'
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049',
    };

    return (
        
        <div ref={homeRef} style={buttonStyle}>
            <img src={FloatingImage} alt="Floating Button"/>
        </div>
    );
}

export default FloatingButton;
