import React from 'react'
import ToggleButton from './Toggle.js'

const Header = (props) => {
    return (
        <div>
            <nav id="header" className="navbar navbar-expanded-lg navbar-light bg-light">
                <div className="text-center container-fluid">
                    Lubbock Neighborhood Map
                    <div className="col-xs-2" tabIndex="0">
                        <ToggleButton toggle={props.toggle}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;