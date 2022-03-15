import React, { useState } from 'react'

const Tabs = (props) => {

    const [selectedTab, setselectedTab] = useState(0)

    return (
        <div>
            <div>
                {
                    props.tabs.map((tabs, i) => {

                    const tabStyle = {
                            border: '1px solid black',
                            margin: '5px',
                            padding: '5px 8px',
                            cursor: 'pointer'
                        }

                        if(selectedTab === i){
                            tabStyle.backgroundColor = 'black';
                            tabStyle.color = 'white'
                        }

                        return <span
                            onClick={(e) => {
                                setselectedTab(i);
                            }}
                            key={i}
                            style={ tabStyle }>
                            {tabs.header}
                        </span>
                    })
                }
            </div>
            <div>
                <h3>{props.tabs[selectedTab].content}</h3>
            </div>
        </div>
    )
}

export default Tabs