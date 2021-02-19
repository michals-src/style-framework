import React from 'react';
import Form from './Form';

import './_form.scss'


export default {
  title: 'Form/Form',

  parameters: {
    component: Form,
  },
};

export const _Default = () => {
  return (
    <div className="prefix--container">
        
        <div className="prefix-form">

          <div className="prefix--mb-15">
            <form>
                <div className="prefix--form-item">
                    
                  <div className="prefix--form-item-collection">

                    <div className="prefix--select">
                      <select className="prefix--select-input">
                        <option>Select ...</option>
                      </select>
                    </div>

                    <input className="prefix--form-input" type="text" />

                    <button className="prefix--button">Send nudes</button>

                  </div>

                </div>

                <div className="prefix--form-item">
                  <div className="prefix--form-input-addons">
                    <div className="prefix--form-input-addon">
                      <button className="prefix--button prefix--button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                          <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                          <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="prefix--form-input-addon">
                      <button className="prefix--button prefix--button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                          <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                        </svg>
                      </button>
                    </div>
                    <input className="prefix--form-input" type="text" />
                    <div className="prefix--form-input-addon">
                      <button className="prefix--button prefix--button-icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-3d-fill" viewBox="0 0 16 16">
                          <path d="M10.157 5.968h-.844v4.06h.844c1.116 0 1.621-.667 1.621-2.02 0-1.354-.51-2.04-1.621-2.04z"/>
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm5.184 4.368c.646 0 1.055.378 1.06.9.008.537-.427.919-1.086.919-.598-.004-1.037-.325-1.068-.756H3c.03.914.791 1.688 2.153 1.688 1.24 0 2.285-.66 2.272-1.798-.013-.953-.747-1.38-1.292-1.432v-.062c.44-.07 1.125-.527 1.108-1.375-.013-.906-.8-1.57-2.053-1.565-1.31.005-2.043.734-2.074 1.67h1.103c.022-.391.383-.751.936-.751.532 0 .928.33.928.813.004.479-.383.835-.928.835h-.632v.914h.663zM8.126 11h2.189C12.125 11 13 9.893 13 7.985c0-1.894-.861-2.984-2.685-2.984H8.126V11z"/>
                        </svg>
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="prefix--form-item">
                    <label className="prefix--form-label">Password</label>
                    <p className="prefix--form-input-pre-line">Cillum qui sit proident culpa ut magna Lorem mollit amet nisi mollit in.</p>
                    <input className="prefix--form-input" type="password" />
                </div>
            </form>
          </div>

          <div className="prefix--mb-15">
            <form>
                <div className="prefix--form-item">
                    <label className="prefix--form-label">Username</label>
                    <input className="prefix--form-input" type="text" />
                    <p className="prefix--form-input-help-line">Cillum qui sit proident culpa ut magna Lorem mollit amet nisi mollit in.</p>
                </div>
                <div className="prefix--form-item">
                    <label className="prefix--form-label">Password</label>
                    <p className="prefix--form-input-pre-line">Cillum qui sit proident culpa ut magna Lorem mollit amet nisi mollit in.</p>
                    <input className="prefix--form-input" type="password" />
                </div>
            </form>
          </div>

          <div className="prefix--mb-15">
            <form>
            
                <div className="prefix--form-item">
                  <input data-valid="valid" className="prefix--form-input" type="text" />
                  <span className="prefix--form-validation-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>

                <div className="prefix--form-item">
                  <input data-valid="invalid" className="prefix--form-input" type="text" />
                  <span className="prefix--form-validation-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                </div>

                <div className="prefix--form-item">
                  <div className="prefix--select">
                    <select data-valid="valid" className="prefix--select-input">
                      <option>Hello world</option>
                    </select>
                    <span className="prefix--form-validation-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                  </div>
                </div>


                <div className="prefix--form-item">
                  <div className="prefix--select">
                    <select data-valid="invalid" className="prefix--select-input">
                      <option>Hello world</option>
                    </select>
                    <span className="prefix--form-validation-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                  </div>
                </div>

                <div className="prefix--form-item">
                  <div className="prefix--checkbox">
                    <input data-valid="valid" className="prefix--checkbox-input" type="checkbox" />
                    <label className="prefix--checkbox-label">
                      <span>Checkbox</span>
                      <span className="prefix--form-validation-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                    </label>
                  </div>
                </div>

                <div className="prefix--form-item">
                  <div className="prefix--checkbox">
                    <input data-valid="invalid" className="prefix--checkbox-input" type="checkbox" />
                    <label className="prefix--checkbox-label">
                      <span>Checkbox</span>
                      <span className="prefix--form-validation-feedback">Laboris pariatur amet do ea nostrud ullamco et laborum reprehenderit do aliqua dolor.</span>
                    </label>
                  </div>
                </div>

                <div className="prefix--form-item">

                  <div className="prefix--radio-button ">
                      <input data-valid="valid" id="check-text1" name="check-test" type="radio" className="prefix--radio-button-input" />
                      <label for="check-text1" className="prefix--radio-button-label">
                          <div className="prefix--radio-button-check"></div>
                          <span>Radio button</span>
                          <span className="prefix--form-validation-feedback">Wszystko jest ok</span>
                      </label>
                  </div>

                </div>

                <div className="prefix--form-item">

                  <div className="prefix--radio-button">
                    <input data-valid="invalid" name="check-test" className="prefix--radio-button-input" type="radio" />
                    <label for="check-test" className="prefix--radio-button-label">
                      <div className="prefix--radio-button-check"></div>
                      <span>Checkbox</span>
                      <span className="prefix--form-validation-feedback">Field is required</span>
                    </label>
                  </div>

                </div>

            </form>
          </div>

        </div>

    </div>
  )
};

_Default.story = {
    name: 'Form',
};
