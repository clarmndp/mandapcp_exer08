import React from 'react';


//created component for gadget list
function GadgetList(props){
    let gaditems = props.data;
    
	return (
        <div>
            <div>
                <ul>
                    { 
                    gaditems.map((gaditem) => {
                        return (
                            <div className="category-item" key={gaditem.id}>
                                <li>{gaditem.gadgetname}</li>
                            </div>
                        )
                    })
                    }
                    </ul>
            </div>
        </div>
  	)
}

export default GadgetList;