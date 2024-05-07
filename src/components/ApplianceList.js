import React from 'react';

//created component for appliance list
function ApplianceList(props){
    let appitems = props.data;
    
	return (
        <div>
            <div>
                <ul>
                    { 
                    appitems.map((appitem) => {
                        return (
                            <div className="category-item" key={appitem.id}>
                                <li>{appitem.appliancename}</li>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
  	)
}

export default ApplianceList;
