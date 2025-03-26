import React, { useState } from 'react';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import './styling/navbar.css';


const Restaurant=()=>{

    const [menuData, setMenuData] = useState(Menu);

    const filterBreakfast= (category)=>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    const filterLunch= (category)=>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    const filterSnacks= (category)=>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    const filterDinner= (category)=>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    const filterAll= (category)=>{
        setMenuData(Menu);
    }

    return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={()=> filterBreakfast("Breakfast")}>Breakfast</button>
                <button className='btn-group__item' onClick={()=> filterLunch("Lunch")}>Lunch</button>
                <button className='btn-group__item' onClick={()=> filterSnacks("Snacks")}>Snacks</button>
                <button className='btn-group__item' onClick={()=> filterDinner("Dinner")}>Dinner</button>
                <button className='btn-group__item' onClick={()=> filterAll("All")}>All</button>
            </div>
        </nav>
        <MenuCard menuData={menuData}/>
    </>
    )
}

export default Restaurant