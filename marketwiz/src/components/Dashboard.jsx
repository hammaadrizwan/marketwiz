import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ReactLoading from 'react-loading';
import Lottie from "react-lottie";
import Footer from './Footer'
import * as animationData from '../Animation - 1710403906479.json';

function Dashboard() {
    const [currentTime, setCurrentTime] = useState(0);
    const [data, setData] = useState([]);
    const [sortedSales, setSortedSales] = useState([]);
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    
    if (!userDetails || !userDetails.name) {
        // Redirect to login page or display message
        return (<div className='error-404'><p className='error-404-text'>404 Bad Request</p></div>);
    }
    
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    const [done, setDone] = useState(false);
    useEffect(() => {
      fetch('/api/ml')
        .then(res => res.json())
        .then(data => {
          setData(data);
          const sortedData = data.sales.sort((a, b) => b.Units_Sold - a.Units_Sold);
          setSortedSales(sortedData);
          setDone(true);
        });
    }, []);

    useEffect(() => {
      fetch('/api/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time_type);
      });
    }, []);
    


    return (
        <>
            {!done ? 
            (<div className="loader">
                <div className="loader-container">
                    <Lottie options={defaultOptions1} background="#28292B" speed={1} height={300} width={300} />
                    <p>Fetching Data</p>
                </div>
                </div>) : (
      <>
      <Navbar />
      <div className="dashboard">
      <div className='greeting'>
          <h1>Good {currentTime},  {userDetails.name.split(" ")[0]}</h1>
      </div>
  
      <div className='predictions-card-wrapper'>
          <div className='predictions-card'>
              <div className='weather-economic-pred-card'>
                  <div className='rainfall-pred'>
                      <div className='rainfall-bg'>
                          <div className='rainfall-text-cover'>
                              <div className='rainfall-val'>
                                  <p>{data.weather.Rainfall}</p>
                              </div>
                              <div className='rainfall-text'>
                                  <span className='rainfall-text-span'>
                                      Rainfall Predicted For Today
                                  </span>
                                  <span className='rainfall-measurement-span'>
                                      (mm)
                                  </span>
                                  <span className='rainfall-extra-span'/>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className='dashboard-price-predict'>
                      <div className='dashboard-price-predict-title'>
                          <p>Predict The Price of A Product (LKR)</p>
                      </div>
  
                      <form className='dashboard-form-input'>
                          <div className='dashboard-form-input-title'>
                              <label>Todays Price</label>
                              <label>No of Days</label>
                              
                          </div>
                          <div className='dashboard-form-input-frame'>
                              <div className='dashboard-form-input-frame-price'>
                                  <input type='text' className="dashboard-form-input-frame-price-input"
                                  placeholder='120.00'/>
                              </div>
                              <div className='dashboard-form-input-frame-days'>
                              <input type='text' className="dashboard-form-input-frame-days-input"
                                  placeholder='3'/>
                              </div>
                          </div>
                          <div className='dashboard-form-input-frame-footer'>
                            <input type='submit' value='Predict' className='dashboard-form-input-frame-footer-submit'id="buttong-bg"/> 
                            <label className='dashboard-form-input-frame-footer-value'>124.34</label>
                          </div>
  
  
                      </form>
  
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
                                      {sortedSales[0].Product_Name}
                                  </span>
                                  <br/>
                              </div>
                              <div className='small-table-first-quantity'>
                                  <p>{sortedSales[0].Units_Sold}</p>
                              </div>
                          </div>
                          <div className='small-table-second'>
                              <div className='small-table-second-box'/>
                              <div className='small-table-second-text'>
                                  <span className='small-table-second-text-span'>
                                    {sortedSales[1].Product_Name}
                                  </span>
                                  <br/>
                              </div>
                              <div className='small-table-second-quantity'>
                                  <p>{sortedSales[1].Units_Sold}</p>
                              </div>
                          </div>
                          <div className='small-table-third'>
                              <div className='small-table-third-box'/>
                              <div className='small-table-third-text'>
                                  <span className='small-table-third-text-span'>
                                      {sortedSales[2].Product_Name}
                                  </span>
                                  <br/>
                              </div>
                              <div className='small-table-third-quantity'>
                                  <p>{sortedSales[2].Units_Sold}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div className='overflow-y-scroll no-scrollbar table-container '><table>
            <thead>
                    <tr>
                        <th className='table-header'>Product Name</th>
                        <th className='table-header'>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedSales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.Product_Name}</td>
                            <td>{sale.Units_Sold}</td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
      </div>
      </>
      )
      }
    </>
  );
}

export default Dashboard;
