import React from 'react';
import ReactDOM from 'react-dom';

export default function App(props) {
    return (
        <div>
            <section>
                <div className="cards">
                    <div>
                        <img className="cardsImg" src={props.img} />
                    </div>
                    <div className="rate cardsTexts">
                        <img className="cardStar" src="./images/star 1.png"></img>
                        <span ><p>({props.rate})</p></span>
                        <span>{props.review} </span>
                        <span>{props.country}</span>
                    </div>
                    <p className="cardsTexts">
                        {props.title}
                    </p>
                    <p className="cardsTexts">
                        <b>From {props.price}</b>/person
                    </p>
                </div>
            </section>
        </div>
    );
}
