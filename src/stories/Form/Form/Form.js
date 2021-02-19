import React from 'react'

import './_form.scss'

export default function Form() {

    return (
        <div className="prefix--container">

            <form>

                <div className="prefix--form-item">
                    <label className="prefix--form-label">Username</label>
                    <input className="prefix--form-input" type="text" />
                </div>
                <div className="prefix--form-item">
                    <label className="prefix--form-label">Password</label>
                    <input className="prefix--form-input" type="text" />
                </div>

            </form>

        </div>
    )
}