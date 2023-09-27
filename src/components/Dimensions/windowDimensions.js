"use client"
import { useState, useEffect } from 'react';

/*
Function to get the width and height from window.    
*/

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window ;
    return {
        width,
        height
    };
}

/*
Function to get the current width and height of the screen.    
*/

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
