import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.scss'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';




function Navbar(props) {



    const {logoAndre} = useContext(ThemeContext);

   
    

    return ( 

        <nav>
            <div className='logo'> <img src={logoAndre} alt="Logo"/> </div>
            <div className='links--nav'> 
            
            <ul>
                <li> <Link to="/"><a className='animacao-underline' href='http://www.google.com'>Inicio</a> </Link>  </li>
                <li> <a className='animacao-underline' href='http://www.google.com'>Habilidades</a> </li>
                <li> <a className='animacao-underline' href='http://www.google.com'>Experiências</a> </li>
                <li> <Link to="/projects"> <a className='animacao-underline' href='http://www.google.com'>Projetos</a> </Link> </li>
                <li> <Link to="/contacts"><a className='animacao-underline' href='http://www.google.com'>Contatos</a></Link> </li>

            </ul>

             </div>
            <div className='button--darkmode no-select' > {props.children} </div>
        </nav>

     );
}

export default Navbar;