import React from 'react'

import './_form-checkbox.scss'

export default function Checkbox() {

    return (
        <div className="prefix--container">
            
            <div className="prefix--mb-5">
                <div className="prefix--mb-7">
                    <p className="h5">Text input</p> 
                </div>
                
                <div className="prefix--checkbox prefix--mb-5">
                    <input id="check1" type="checkbox" className="prefix--checkbox-input" />
                    <label for="check1" className="prefix--checkbox-label"><span>Checkbox</span></label>
                 </div>

                 <div className="prefix--checkbox prefix--mb-5">
                    <input checked id="check2" type="checkbox" className="prefix--checkbox-input" />
                    <label for="check2" className="prefix--checkbox-label"><span>Checked checkbox</span></label>
                 </div>

                <div className="prefix--checkbox  prefix--mb-5">
                    <input disabled="true" id="check3" type="checkbox" className="prefix--checkbox-input" />
                    <label for="check3" className="prefix--checkbox-label"><span>Diasbled checkbox</span></label>
                 </div>

                <div className="prefix--checkbox  prefix--mb-5">
                    <input checked disabled="true" id="check4" type="checkbox" className="prefix--checkbox-input" />
                    <label for="check4" className="prefix--checkbox-label"><span>Diasbled checked checkbox</span></label>
                 </div>
                
            </div>

        </div>
    )
}