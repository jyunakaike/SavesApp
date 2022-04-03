import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// React Icons
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { FaMoneyCheckAlt } from 'react-icons/fa';

import "./style.css";

export const Navbar = () => {
    const [active, setActive] = useState("2");

    const clickNav = (item) => {
        if(item !== active){
            setActive(item);
        }
    }

    return (
        <nav className='Navbar-container ' >
            <ul>
                <li className={`List ${(active === "1")?"active":""}`} onClick={()=> { clickNav("1")}}> <Link to="/incomes"> <RiMoneyDollarCircleFill className='Navbar-icon' /> <p>Incomes</p></Link>  </li>
                <li className={`List ${(active === "2")?"active":""}`} onClick={()=> { clickNav("2")}}> <Link to="/"> <IoAnalyticsOutline className='Navbar-icon' /> <p> Detail</p> </Link> </li>
                <li className={`List ${(active === "3")?"active":""}`} onClick={()=> { clickNav("3")}}> <Link to="/expense"> <FaMoneyCheckAlt className='Navbar-icon' /> <p>Expenses</p> </Link>  </li>

                <div className='Indicator'></div>
            </ul>
        </nav>
    )
}
