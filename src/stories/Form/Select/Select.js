import React from 'react'

import './_form-select.scss'

export default function Select() {

    return (
        <div className="prefix--container">
            
            <div className="prefix--select prefix--mb-5">
                <select className="prefix--select-input">
                    <option>Value 1</option>
                </select>
            </div>
            
            <div className="prefix--select">
                <select disabled className="prefix--select-input">
                    <option>Value 1</option>
                </select>
            </div>

        </div>
    )
}