import React from 'react';
import './styling/menuCard.css';

const MenuCard=( {menuData})=>
{

    return( 
    <>
        <section className="main-card-container">
            {
                menuData.map((curElem)=>{
                    return(
                            <div className="card-container" key={curElem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{curElem.id}</span>
                                        <span className='card-author subtle'>{curElem.category}</span>
                                        <h2 className='card-title'>{curElem.name}</h2>
                                        <span className='card-description subtle'>
                                            {curElem.description}
                                        </span>
                                    </div>
                                    <img src={curElem.image} alt={curElem.name} className='card-media' />
                                    <span className='card-tag subtle'>Order now</span>
                                </div>       
                            </div>
                    );
                }
                )
            }
        </section>
    </>
    ) 
}

export default MenuCard;