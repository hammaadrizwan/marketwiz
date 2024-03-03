import React from 'react'
import rainfall from "../assets/rainfall.svg"

function Body() {
    return(
        <div className="body">
            <div className='greeting'>
                <h1>Good afternoon, James</h1>
            </div>

            <div className='predictions-card'>
                <div className='weather-economic-pred-card'>
                    <div className='rainfall-pred'>
                        <div className='rainfall-bg'>
                            <div className='rainfall-text-cover'>
                                <div className='rainfall-val'>
                                    <p>14.3</p>
                                </div>
                                <div className='rainfall-text'>
                                    <span className='rainfall-text-span'>
                                        Rainfall Predicted For Today
                                    </span>
                                    <span className='rainfall-measurement-span'>
                                        mm
                                    </span>
                                    <span className='rainfall-extra-span'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='price-predict'>
                        <div className='price-predict-heading'>
                            <div className='price-predict-heading-text'>
                                Predict The Price Of A Product (LKR)
                            </div>
                        </div>
                        <div className='predict-price-inputs'>
                            <div className='predict-price-inputs-header'>
                                <div className='today-price-header'>
                                    Today's Price
                                </div>
                                <div className='no-of-days-price-header'>
                                    No Of Days
                                </div>
                            </div>
                            <div className='predict-price-input-boxes'>
                                <div className='predict-price-input-boxes-cover'>
                                    <div className='predict-price-input-box-lkr-1'>
                                        <div className='predict-price-input-box-lkr-2'>
                                            <span className='predict-price-input-box-lkr-val-span'>
                                                120.00
                                            </span>
                                            <span className='predict-price-input-box-lkr-currency-span'>
                                                LKR
                                            </span>
                                        </div>
                                    </div>
                                    <div className='predict-price-input-box-days'>
                                        <div className='predict-price-input-box-days-cover'>
                                            <div className='predict-price-input-box-days-minus'>
                                                <p>-</p>
                                            </div>
                                            <div className='predict-price-input-box-days-plus'>
                                                <p>3</p>
                                            </div>
                                            <div className='predict-price-input-box-days-plus'>
                                                <p>3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='predict-price-button'>
                                <div className='predict-price-button-cover'>
                                    <div className='predict-price-button-top'/>
                                    <div className='predict-price-button-text'>
                                        Predict
                                    </div>
                                </div>
                                <div className='predict-price-value'>
                                    124.34
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sales-small-table'>
                    <div className='units-small'>
                        <div className='units-small-title-cover'>
                            <div className='units-small-title'>
                                <p>Best Sellers Predicted For Today</p>
                            </div>
                        </div>
                        <div className='units-small-table'>
                            <div className='small-table-first'>
                                <div className='small-table-first-box'/>
                                <div className='small-table-first-text'>
                                    <span className='small-table-first-text-span'>
                                        Ambewela Yoghurt
                                    </span>
                                    <br/>
                                    <span className='small-table-first-val-span'>
                                        80ML
                                    </span>
                                </div>
                                <div className='small-table-first-quantity'>
                                    <p>20</p>
                                </div>
                            </div>
                            <div className='small-table-second'>
                                <div className='small-table-second-box'/>
                                <div className='small-table-second-text'>
                                    <span className='small-table-second-text-span'>
                                        Prima Wheat Flour
                                    </span>
                                    <br/>
                                    <span className='small-table-second-val-span'>
                                        1KG
                                    </span>
                                </div>
                                <div className='small-table-second-quantity'>
                                    <p>18</p>
                                </div>
                            </div>
                            <div className='small-table-third'>
                                <div className='small-table-third-box'/>
                                <div className='small-table-third-text'>
                                    <span className='small-table-third-text-span'>
                                        Harischandra Coffee
                                    </span>
                                    <br/>
                                    <span className='small-table-third-val-span'>
                                        250G
                                    </span>
                                </div>
                                <div className='small-table-third-quantity'>
                                    <p>7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
            <div className='units-full'>
                <div className='units-full-title'>
                    <p>Predicted Units Sold For Today</p>
                </div>

                <div className='download-results'>
                    <div className='download-results-text'>
                        <p>Download Results Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body