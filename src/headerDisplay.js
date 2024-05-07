import React from 'react';

function headerDisplay({props}){
    let navitems = props.data;

	return (
        <div>
                <ul>
                    { 
                    navitems.map((navitem) => {
                        return <li key = {navitem.id}>{navitem.name}</li>
                        })
                    }
                </ul>
        </div>    
  	)
}

export default headerDisplay