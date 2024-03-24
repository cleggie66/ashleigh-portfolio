import { useEffect, useRef, useState } from 'react';

function OutlineGenerator(props) {
    const coinFrames = require.context('../../media/outline-exports/coins', true);
    const coverFrames = require.context('../../media/outline-exports/cover', true);
    const davidFrames = require.context('../../media/outline-exports/david', true);
    const flowersFrames = require.context('../../media/outline-exports/flowers', true);
    const houseOfBluesFrames = require.context('../../media/outline-exports/house-of-blues', true);
    const kuFrames = require.context('../../media/outline-exports/ku', true);
    const mayerFrames = require.context('../../media/outline-exports/mayer', true);
    const ornamentFrames = require.context('../../media/outline-exports/ornament', true);
    const paintFrames = require.context('../../media/outline-exports/paint', true);
    const plantFrames = require.context('../../media/outline-exports/plant', true);
    const poloroidFrames = require.context('../../media/outline-exports/poloroid', true);
    const qrFrames = require.context('../../media/outline-exports/qr', true);
    const recipeFrames = require.context('../../media/outline-exports/recipe', true);
    const recordFrames = require.context('../../media/outline-exports/record', true);
    const sketch1Frames = require.context('../../media/outline-exports/sketch-1', true);
    const sketch2Frames = require.context('../../media/outline-exports/sketch-2', true);
    const ticketsFrames = require.context('../../media/outline-exports/tickets', true);
    const umbrellaFrames = require.context('../../media/outline-exports/umbrella', true);

    const outlineObj = {
        "coins": coinFrames.keys().map(image => coinFrames(image)),
        "cover": coverFrames.keys().map(image => coverFrames(image)),
        "david": davidFrames.keys().map(image => davidFrames(image)),
        "flowers": flowersFrames.keys().map(image => flowersFrames(image)),
        "house-of-blues": houseOfBluesFrames.keys().map(image => houseOfBluesFrames(image)),
        "ku": kuFrames.keys().map(image => kuFrames(image)),
        "mayer": mayerFrames.keys().map(image => mayerFrames(image)),
        "ornament": ornamentFrames.keys().map(image => ornamentFrames(image)),
        "paint": paintFrames.keys().map(image => paintFrames(image)),
        "plant": plantFrames.keys().map(image => plantFrames(image)),
        "qr": qrFrames.keys().map(image => qrFrames(image)),
        "poloroid":  poloroidFrames.keys().map(image => poloroidFrames(image)),
        "recipe": recipeFrames.keys().map(image => recipeFrames(image)),
        "record": recordFrames.keys().map(image => recordFrames(image)),
        "sketch-1": sketch1Frames.keys().map(image => sketch1Frames(image)),
        "sketch-2": sketch2Frames.keys().map(image => sketch2Frames(image)),
        "tickets": ticketsFrames.keys().map(image => ticketsFrames(image)),
        "umbrella": umbrellaFrames.keys().map(image => umbrellaFrames(image)),
    };

    const intervalTime = 20;
    const frameCount = 14;
    const letter = props.outline;

    const _intervalRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);
    const [endCounter, setEndCounter] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (startCounter) {
            _intervalRef.current = setInterval(() => {
                setCounter((counter) => {
                    if (counter < frameCount) {
                        return counter + 1
                    } else {
                        clearInterval(_intervalRef.current);
                        return frameCount;
                    }
                });
            }, intervalTime);
        }
        return () => clearInterval(_intervalRef.current);
    }, [startCounter]);

    useEffect(() => {
        if (endCounter) {
            _intervalRef.current = setInterval(() => {
                setCounter((counter) => {
                    if (counter > 0) {
                        return counter - 1
                    } else {
                        clearInterval(_intervalRef.current);
                        return 0;
                    }
                });
            }, intervalTime);
        }
        return () => clearInterval(_intervalRef.current);
    }, [endCounter]);

    return (
        <>
            <div className={`outline`}>
                <img src={outlineObj[letter][counter]} alt={letter} />
            </div>
            <div
                className="hit-box"
                onMouseOver={() => {
                    setStartCounter(true)
                    setEndCounter(false)
                }}
                onMouseOut={() => {
                    setStartCounter(false)
                    setEndCounter(true)
                }}
            />
        </>
    );
};

export default OutlineGenerator;