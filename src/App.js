import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import data from './data.js'
export default class App extends React.Component { 
    render() {
        const cards = data.map(card => { 
            return (
                <Cards
                    key={card.id}
                    rate={card.stats.rating}
                    country={card.location}
                    price={card.price}
                    title={card.title}
                    img={card.coverImg}
                    review={card.stats.reviewCount}
                />
            );
        })
        return (
            <div>
                <Navbar />
                <Header />
                <div className="allcards">
                    {cards}
               </div>
            </div>
        );
    }
}