import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
    return (
        <div>
            <div className="elementor-button p-3 py-2">
                <Link className="elementor-button-text text-white text-decoration-none fw-bold" to={props.Link}>
                    {props.btnname}
                </Link>
            </div>
            <br />
        </div>
    )
}

export default Button