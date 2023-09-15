/* eslint-disable react/prop-types */
import './Cart.css';

const Cart = ({selectedActors, totalCount, remaining}) => {

    return (
        <div>
            <h5>Total Actors:{selectedActors.length}</h5>
            <h5>Total Remaining: {remaining}</h5>
            <h5>Total Count: {totalCount}</h5>

            {
                selectedActors.map(actor => (

                        <li key={actor.id}>{actor.name}</li>
                    
                ))
            }
        </div>
    );
};

export default Cart;