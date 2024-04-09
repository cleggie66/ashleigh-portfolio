import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setPage, resetPage } from '../../store/pages';

import OutlineGenerator from "../OutlineGenerator";

import coins from "../../media/png-exports/coins.png";
import collage from "../../media/png-exports/collage.png";
import collage2 from "../../media/png-exports/collage-2.png";
import cover from "../../media/png-exports/cover.png";
import david from "../../media/png-exports/david.png";
import flowers from "../../media/png-exports/flowers.png";
import houseOfBlues from "../../media/png-exports/house-of-blues.png";
import ku from "../../media/png-exports/ku.png";
import mayer from "../../media/png-exports/mayer.png";
import ornament from "../../media/png-exports/ornament.png";
import paint from "../../media/png-exports/paint.png";
import plant from "../../media/png-exports/plant.png";
import poloroid from "../../media/png-exports/poloroid.png";
import qr from "../../media/png-exports/qr.png";
import recipe from "../../media/png-exports/recipe.png";
import record from "../../media/png-exports/record.png";
import sketch1 from "../../media/png-exports/sketch-1.png";
import sketch2 from "../../media/png-exports/sketch-2.png";
import tickets from "../../media/png-exports/tickets.png";

import umbrella from "../../media/png-exports/umbrella.png";
import "./Homepage.css";


function HomePage() {
    const pageState = useSelector(state => state.pages);
    const visibility = pageState.home;

    const homePageItems = [
        {
            name: "ornament",
            src: ornament,
            zoom: "zoom",
            outline: "outline-behind",
            textAnimation: "slide-right",
            title: "Culture",
            description: `A handmade ornament from Lucia, a swedish Christmas festival.`
        },
        {
            name: "tickets",
            src: tickets,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Have Some Fun",
            description: "Spontaneity is essential in the pursuit of life!"
        },
        {
            name: "poloroid",
            src: poloroid,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Hey!",
            description: "I’m Ashleigh Cleghorn, welcome to my design portfolio. A portfolio usually showcases the projects or work of a designer. I believe that a portfolio should also showcase the person behind that work - interests, experiences, skills, and personality all combine to create a one-of-a-kind designer."
        },
        {
            name: "sketch-1",
            src: sketch1,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Notebook Doodles",
        },
        {
            name: "qr",
            src: qr,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Explore + Enjoy",
            description: "Chicago is a vibrant city that has plenty to offer, I enjoy exploring new restaurants and experiences."
        },
        {
            name: "sketch-2",
            src: sketch2,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Notebook Doodles",
        },
        {
            name: "umbrella",
            src: umbrella,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Aloha",
            description: "The beautiful scenery in Hawaii reminds me that nature is meant to be appreciated and preserved.",
        },
        {
            name: "house-of-blues",
            src: houseOfBlues,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Social Life",
            description: "There’s nothing better than community and friendship. I am grateful for every experience I get to enjoy alongside the very cool people in my life.",
        },
        {
            name: "david",
            src: david,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Art Appreciation",
            description: "Historical art is particularly inspiring for its timeless beauty and profound ability to remain relevant no matter the number of years that pass.",
        },
        {
            name: "plant",
            src: plant,
            zoom: "zoom",
            outline: "outline-behind",
            textAnimation: "slide-right",
            title: "Notebook Doodles",
        },
        {
            name: "coins",
            src: coins,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Travel ✈️",
            description: "Visiting new places and experiencing other cultures is an opportunity to learn, enjoy, and gain inspiration.",
        },
        {
            name: "flowers",
            src: flowers,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Nature's Beauty",
            description: "The intricate details of flowers and plants inspire me, I admire the remarkable complexity and beauty of nature's design.",
        },
        {
            name: "record",
            src: record,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Collecting Music",
            description: `Trips to the record store have been my favorite since I was a kid. Vinyl records are a reminder that some art is best enjoyed in physical form.`
        },
        {
            name: "recipe",
            src: recipe,
            zoom: "zoom",
            textAnimation: "slide-left",
            title: "Creating in Kitchen",
            description: "Cooking with family are some of my best memories. I love the art of cooking, making a full meal from simple ingredients.",
        },
        {
            name: "ku",
            src: ku,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Rock Chalk!",
            description: "I enjoyed the years I spent studying at KU. 🏀",
        },
        {
            name: "cover",
            src: cover,
        },
        {
            name: "mayer",
            src: mayer,
            zoom: "zoom",
            textAnimation: "slide-right",
            title: "Live Music",
            description: "The excitement of a concert lies in knowing each event is unique, filled with surprises and moments that can never be replicated exactly the same way again.",
        },
        {
            name: "paint",
            src: paint,
            zoom: "no-zoom",
            textAnimation: "slide-right",
            title: "Try Something New",
            description: "I created this canvas in a spray-paint workshop. I had never used spray-paint prior to this class, but that didn’t stop me from enjoying and having fun! This experience reminded me that trying new things keeps life fresh, learning is a lifetime journey.",
        },
    ]

    return (
        <>
            {
                homePageItems.map((item) => {
                    return (
                        <div className={`image-layer ${item.zoom} ${item.outline}`}>
                            <div className={`${item.name} ${visibility}`}>
                                <div className={`item-text-box ${item.textAnimation}`}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <img src={item.src} alt="0" className="core" />
                                <OutlineGenerator outline={item.name} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomePage;