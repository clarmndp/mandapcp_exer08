import React from 'react';

//created a component for clothing list
function ClothingList(props){
    let clothitems = props.data;
    
	return (
        <div>
            <div>
                <ul>
                    { 
                    clothitems.map((clothitem) => {
                        return (
                            <div className="category-item" key={clothitem.id}>
                                <li>{clothitem.clothingname}</li>
                            </div>
                        )
                    })
                    }
                    </ul>
            </div>
        </div>
  	)
}

export default ClothingList;