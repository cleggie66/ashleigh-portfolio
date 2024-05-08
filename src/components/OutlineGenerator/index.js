import { useEffect, useRef, useState } from 'react';

import "./OutlineGenerator.css";
import "./hit-box.css";


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

    const coinArrowFrames = require.context('../../media/arrow-exports/coins', true);
    const davidArrowFrames = require.context('../../media/arrow-exports/david', true);
    const flowersArrowFrames = require.context('../../media/arrow-exports/flowers', true);
    const houseOfBluesArrowFrames = require.context('../../media/arrow-exports/house-of-blues', true);
    const kuArrowFrames = require.context('../../media/arrow-exports/ku', true);
    const mayerArrowFrames = require.context('../../media/arrow-exports/mayer', true);
    const ornamentArrowFrames = require.context('../../media/arrow-exports/ornament', true);
    const paintArrowFrames = require.context('../../media/arrow-exports/paint', true);
    const poloroidArrowFrames = require.context('../../media/arrow-exports/poloroid', true);
    const qrArrowFrames = require.context('../../media/arrow-exports/qr', true);
    const recipeArrowFrames = require.context('../../media/arrow-exports/recipe', true);
    const recordArrowFrames = require.context('../../media/arrow-exports/record', true);
    const ticketsArrowFrames = require.context('../../media/arrow-exports/tickets', true);
    const umbrellaArrowFrames = require.context('../../media/arrow-exports/umbrella', true);


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
        "poloroid": poloroidFrames.keys().map(image => poloroidFrames(image)),
        "qr": qrFrames.keys().map(image => qrFrames(image)),
        "recipe": recipeFrames.keys().map(image => recipeFrames(image)),
        "record": recordFrames.keys().map(image => recordFrames(image)),
        "sketch-1": sketch1Frames.keys().map(image => sketch1Frames(image)),
        "sketch-2": sketch2Frames.keys().map(image => sketch2Frames(image)),
        "tickets": ticketsFrames.keys().map(image => ticketsFrames(image)),
        "umbrella": umbrellaFrames.keys().map(image => umbrellaFrames(image)),
    };

    const arrowObj = {
        "coins": coinArrowFrames.keys().map(image => coinArrowFrames(image)),
        "david": davidArrowFrames.keys().map(image => davidArrowFrames(image)),
        "flowers": flowersArrowFrames.keys().map(image => flowersArrowFrames(image)),
        "house-of-blues": houseOfBluesArrowFrames.keys().map(image => houseOfBluesArrowFrames(image)),
        "ku": kuArrowFrames.keys().map(image => kuArrowFrames(image)),
        "mayer": mayerArrowFrames.keys().map(image => mayerArrowFrames(image)),
        "ornament": ornamentArrowFrames.keys().map(image => ornamentArrowFrames(image)),
        "paint": paintArrowFrames.keys().map(image => paintArrowFrames(image)),
        "poloroid": poloroidArrowFrames.keys().map(image => poloroidArrowFrames(image)),
        "qr": qrArrowFrames.keys().map(image => qrArrowFrames(image)),
        "recipe": recipeArrowFrames.keys().map(image => recipeArrowFrames(image)),
        "record": recordArrowFrames.keys().map(image => recordArrowFrames(image)),
        "tickets": ticketsArrowFrames.keys().map(image => ticketsArrowFrames(image)),
        "umbrella": umbrellaArrowFrames.keys().map(image => umbrellaArrowFrames(image)),
    };

    const intervalTime = 20;
    const frameCount = 14;
    const item = props.outline;
    const disabled = props.disabled;


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
            }, intervalTime * 1.5);
        }
        return () => clearInterval(_intervalRef.current);
    }, [endCounter]);


    return (
        <>
            {
                outlineObj[item] && (
                    <div className="outline">
                        <img src={outlineObj[item][counter]} alt={item} />
                    </div>
                )
            }
            {
                arrowObj[item] && (
                    <div className="arrow">
                        <img src={arrowObj[item][counter]} alt={item} />
                    </div>
                )
            }
            <div
                // style={{ display: disabled ? 'none' : "none" }}
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