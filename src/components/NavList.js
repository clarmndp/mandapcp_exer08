import React from 'react';

// created component for navigation bar items
const listStyleul = {
    display: 'flex'
}

const listStyleli = {
    'list-style-type': 'none',
    cursor: 'pointer'
}


function NavList(props){
    let navitems = props.data;
    
	return (
        <div>
            <h2>Lazado</h2>
            <nav>
                <ul style={listStyleul}>
                    { 
                    navitems.map((navitem) => {
                        return <li key = {navitem.id} style = {listStyleli} onClick={() => onItemClick(navitem.id)}>{navitem.name}</li>
                    })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default NavList;