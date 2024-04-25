import React, {useState} from 'react'; 

function MenuHamburguer({items}) { 
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => { 
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="menu">
            <div className="hamburguer-icon" onClick={toggleMenu}> 
                &#9776;
            </div>
            <ul className={`menu-items ${menuOpen ? 'open' : ''}`}> 
                {items.map((item, i) => ( 
                    <li key={i}> 
                        <a href={item.url}>{item.text}</a> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuHamburguer;
