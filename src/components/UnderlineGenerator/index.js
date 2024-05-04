import { useEffect, useRef, useState } from 'react';

import "./UnderlineGenerator.css";
import "./UnderlineHitbox.css";

import testSrc from "../../media/title-underline-exports/title-1-underline/title-1-underline14.png"
import { useDispatch } from 'react-redux';
import { resetPage, setPage } from '../../store/pages';


function UnderlineGenerator(props) {
    const dispatch = useDispatch();

    const changePage = (page) => {
        dispatch(setPage(page));

        setTimeout(() => {
            dispatch(resetPage())
        }, 1000);
    };

    const title1UnderlineFrames = require.context('../../media/title-underline-exports/title-1-underline', true);
    const title2UnderlineFrames = require.context('../../media/title-underline-exports/title-2-underline', true);
    const title3UnderlineFrames = require.context('../../media/title-underline-exports/title-3-underline', true);
    const title4UnderlineFrames = require.context('../../media/title-underline-exports/title-4-underline', true);
    const title5UnderlineFrames = require.context('../../media/title-underline-exports/title-5-underline', true);
    const title6UnderlineFrames = require.context('../../media/title-underline-exports/title-6-underline', true);
    const title7UnderlineFrames = require.context('../../media/title-underline-exports/title-7-underline', true);
    const title8UnderlineFrames = require.context('../../media/title-underline-exports/title-8-underline', true);
    const titleCardRectangleUnderlineFrames = require.context('../../media/title-underline-exports/title-card-rectangle-text-underline', true);
    const titleCardSquareUnderlineFrames = require.context('../../media/title-underline-exports/title-card-square-text-underline', true);


    const underlineObj = {
        "project1": title1UnderlineFrames.keys().map(image => title1UnderlineFrames(image)),
        "project2": title2UnderlineFrames.keys().map(image => title2UnderlineFrames(image)),
        "project3": title3UnderlineFrames.keys().map(image => title3UnderlineFrames(image)),
        "project4": title4UnderlineFrames.keys().map(image => title4UnderlineFrames(image)),
        "project5": title5UnderlineFrames.keys().map(image => title5UnderlineFrames(image)),
        "project6": title6UnderlineFrames.keys().map(image => title6UnderlineFrames(image)),
        "project7": title7UnderlineFrames.keys().map(image => title7UnderlineFrames(image)),
        "project8": title8UnderlineFrames.keys().map(image => title8UnderlineFrames(image)),
        "titleRectangle": titleCardRectangleUnderlineFrames.keys().map(image => titleCardRectangleUnderlineFrames(image)),
        "titleSquare": titleCardSquareUnderlineFrames.keys().map(image => titleCardSquareUnderlineFrames(image)),

    };

    const intervalTime = 20;
    const frameCount = 14;
    const item = props.underline;
    const pageTarget = props.onClickPage;

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
                underlineObj[item] && (
                    <img src={underlineObj[item][counter]} alt={item} className="underline" />
                )
            }
            <div
                className="underline-hit-box"
                onClick={() => changePage(pageTarget)}
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

export default UnderlineGenerator;