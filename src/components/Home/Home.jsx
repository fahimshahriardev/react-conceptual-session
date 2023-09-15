/* eslint-disable react/jsx-key */

import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {

    

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [remaining, setRemaining] = useState(20000);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])

    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find(item => item.id === actor.id)

        let count = actor.salary;

        if(isExist){
            return alert('Already Added');
        }
        else {
            selectedActors.forEach(item => {
                count = count + item.salary;
               
            });
           
            

            if (count > 20000){
                return alert('Not enough money')
            }

            setTotalCount(count);

            const remaining = 20000 - count;

            setRemaining(remaining);

            setSelectedActors([...selectedActors, actor]);
        }
        
    };
    console.log(selectedActors);

    return (
        <div className='container'>

            <div className='home-container'>

                <div className='card-container'>

                    {
                        allActors.map(actor => (
                            <div key={actor.id} className='card'>
                                <div className='card-image'>
                                    <img className='photo' src={actor.image} alt="" />
                                </div>

                                <h2>{actor.name}</h2>
                                <p>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, eaque?</small>
                                </p>

                                <div className='info'>
                                    <p>Salary: {actor.salary}</p>

                                    <p>{actor.role}</p>

                                </div>

                                <div>
                                    <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                                </div>
                            </div>
                        ))
                    }



                </div>

                <div className='cart'>
                    <Cart selectedActors={selectedActors} totalCount={totalCount} remaining={remaining} ></Cart>
                </div>

            </div>

        </div>
    );
};

export default Home;