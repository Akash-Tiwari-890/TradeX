import React from 'react';
function Stats() {
    return (
        <div className="container p-5 mt-5">
            <div className='row'>

                <div className='col-6'>

                          <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                    <h2 className='fs-4 mb-3'>Customer-first always</h2>
                    <p  className='text-muted'>
                        That's why 1.6+ crore customers trust tradeX with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>

                    <h2 className='fs-4 mb-3'>No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification," or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a>
                    </p>

                    <h2 className='fs-4 mb-3'>The TradeX universe</h2>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className='fs-4 mb-3'>Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just help you trade better, but also make better decisions.
                    </p>

                </div>
                <div className="col-6 p-5" >
                    <img src='media/images/ecosystem.png'  style={{width: "90%"}}></img>
                        <div className="ml-5 text-center">
                        <a classNmae='mx-5'>Explore our products <i class='fa fa-long-arrow-right'></i></a>
                        <a>try Kite demo</a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Stats;