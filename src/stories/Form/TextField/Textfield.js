import React from 'react'

import './_form-input.scss'

export default function Textfield() {

    return (
        <div className="prefix--container">
            
            <div className="prefix--mb-5">
                <p className="h5">Text input</p>
                <input type="text" value="Esse veniam nisi et sint ullamco ad aute reprehenderit cillum labore magna do nisi adipisicing." name="form-textfield" className="prefix--form-input" />
            </div>
            <div className="prefix--mb-5">
                <p className="h5">Text input disabled</p>
                <input type="text" value="Aliquip commodo dolor qui proident esse Lorem minim." name="form-textfield" className="prefix--form-input" disabled />
            </div>
            <div className="prefix--mb-12">
                <div className="prefix--mb-5">
                    <p className="h5">Text input & labels</p>
                </div>
                <label className="prefix--form-label" for="form-text-storybook">Simple label</label>
                <div className="prefix--form-input-preline">form-text-input-preline</div>
                <input  className="prefix--form-input" id="form-text-storybook" type="text" name="form-textfield" />
                <div className="prefix--form-input-overline">form-text-input-overline</div>
            </div>
            <div className="prefix--mb-5">
                <p className="h5">Readonly</p>
                <input readonly="true" value="Aliqua mollit labore officia reprehenderit sint incididunt mollit eiusmod nulla minim ex occaecat proident." type="text" name="form-textfield" className="prefix--form-input" />
            </div>
            <div className="prefix--mb-5">
                <p className="h5">Text input sizes</p>
                <input placeholder="Magna elit magna ad reprehenderit aute qui labore consequat consectetur cupidatat." type="text" name="form-textfield" className="prefix--form-input prefix--form-text-input-sm prefix--form-text-readonly" />
                <input type="text" name="form-textfield" className="prefix--form-input prefix--form-text-readonly" />
                <input type="text" name="form-textfield" className="prefix--form-input prefix--form-text-input-lg prefix--form-text-readonly" />
            </div>

        </div>
    )
}