import React from 'react';


export default {
  title: 'UI/Button',

};

export const _Default = () => {
    const $colors = [ 'blue', 'green', 'orange', 'red' ];

    return (

        <div className="prefix--container">
            <div className="prefix--row">
                <div className="prefix--col-md-6">
                    <div className="prefix--mb-10">
                        <button className="prefix--button">Button</button>
                        <button className="prefix--button-outline">Button</button>
                        <button className="prefix--button-plain">Button</button>
                    </div>

                    {
                        $colors.map( $color => {
                            return (
                                <div className="prefix--mb-10">
                                    <button className={`prefix--button prefix--button-`+$color}>Button</button>
                                    <button className={`prefix--button-outline prefix--button-`+$color}>Button</button>
                                    <button className={`prefix--button-plain prefix--button-`+$color}>Button</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="prefix--col-md-6">
                    <div className="prefix--mb-10">
                        <button className="prefix--button" disabled>Button</button>
                        <button className="prefix--button-outline" disabled>Button</button>
                        <button className="prefix--button-plain" disabled>Button</button>
                    </div>

                    {
                        $colors.map( $color => {
                            return (
                                <div className="prefix--mb-10">
                                    <button disabled className={`prefix--button prefix--button-`+$color}>Button</button>
                                    <button disabled className={`prefix--button-outline prefix--button-`+$color}>Button</button>
                                    <button disabled className={`prefix--button-plain prefix--button-`+$color}>Button</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}