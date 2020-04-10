import React from 'react';
import '../assets/card.scss'
import PropTypes from "prop-types";

export const Card = ({creditCards}) => {

    return (
        <div>
            {creditCards &&
            <div>
                {creditCards.map((card) => {
                        return <div className='card-wrapper' key={card.uuid} >
                            <div className='card'>
                                <p className="title">{card.name}</p>
                                <p className="apr">Apr: <strong>{card.apr}%</strong></p>
                                <p className="b-t">Balance Transfer Offer
                                    Duration: <strong>{card.balanceTransferDuration} Months</strong></p>
                                <p className="purchase">Purchase Offer
                                    Duration: <strong>{card.purchaseOfferDuration} Months</strong></p>
                                <p className="credit">Credit Available: <strong>£{card.credit}</strong></p>
                            </div>
                        </div>
                    }
                )}
            </div>
            }
        </div>

    );

};

Card.propTypes = {
    creditCards: PropTypes.array.isRequired
};
