import React from 'react';

function Education() {
    return ( 
           <div className="container mt-5">
            <div className="row " >
                <div className="col-6 mb-5">
                   <img src="media/images/education.svg"></img>
                </div>
                <div className='col-6 mt-5'>
                    <h1 className="fs-2 mt-5">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world
                     covering everything from the basics to advanced trading</p>
                     <a href="#" className='text-decoration-none'>Varsity <i class='fa fa-long-arrow-right'></i> </a>

                    <p className=" mt-5"> the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" className='text-decoration-none'>   TradingQ&A <i class='fa fa-long-arrow-right'></i> </a>

                </div>

            </div>

        </div>
     );
}

export default Education;