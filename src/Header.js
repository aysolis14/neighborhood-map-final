import React from 'react'
import Toggle from './Toggle.js'

const Header = (props) => {
    return (
        <div>
            <nav id="topbar">
                <div className="text-center container-fluid">
                    Neighborhood Map
                    <div className="col-xs-2" tabIndex="0">
                        <Toggle toggle={props.toggle}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;