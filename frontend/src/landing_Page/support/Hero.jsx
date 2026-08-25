import React from 'react';
function Hero() {
    return ( 
       <section className="container-fluid" id="supportHero">
         
            <div className="p-5 " id="supportWrapper">
                <h5>Support Portal</h5>
                <a href=""> Track Tickets</a>
                
                
            </div>
            
            <div className="row p-5 mx-5 my-5" >
                <div className="col-6 p-5 ">
                    <h1 className='fs-3'>Search for an answer or browse help topic to create a ticket</h1>
                    <input placeholder='eg how do i'></input> <br></br>
                    <a href="#">Track account openning</a>
                    <a href="#">Track segment activation</a>
                    <a href="#">Intraday margin</a>
                    <a href="#">Kite user manual</a>

                </div>
                <div className="col-6 p-5">
                    <h1>Featured</h1>  

                    <ol>
                        <li>
                             <a href="#">Intraday margin</a>
                        </li>
                         <li>
                             <a href="#">Intraday margin</a>
                        </li>
                    </ol>
                   
                </div>


                
                
            </div>

        </section>

    
);
}

export default Hero;