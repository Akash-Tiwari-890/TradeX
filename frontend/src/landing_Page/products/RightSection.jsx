import React from 'react';
function RightSection({imgUrl , productName , productDescription , learnMore }) {
    return ( 
        <div className="container mt-5 ">
            <div className="row">
               
                 <div className="col-6 p-5 mt-3">

                    <h1>{productName}</h1>
                    <p>{productDescription}</p>


                    <div className= "mt-3 p-3">

                     <a href={learnMore} >Learn More</a>
                        
                    </div>

                  
                    
                 </div>
                  <div className="col-6">
                    <img src={imgUrl}/>
                </div>
            </div>
        </div>
    
        
     );
}

export default RightSection;