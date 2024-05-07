import React from 'react';

//created component for groceries list
function GroceriesList(props){
    let grocitems = props.data;
    
	return (
        <div>
            <div>
                <ul>
                    { 
                    grocitems.map((grocitem) => {
                        return (
                            <div className="category-item" key={grocitem.id}>
                                <li>{grocitem.groceriesname}</li>
                            </div>
                        )
                    })
                    }
                    </ul>
            </div>
        </div>
  	)
}

export default GroceriesList;