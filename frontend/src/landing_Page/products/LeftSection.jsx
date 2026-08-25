import React from 'react';
function LeftSection({imgUrl , productName , productDescription ,  tryDemo , learnMore , googlePlay, appStore}) {
    return ( 


        <div className="container mt-5 ">
            <div className="row">
                <div className="col-6">
                    <img src={imgUrl}/>
                </div>
                 <div className="col-6 p-5 mt-3">

                    <h1>{productName}</h1>
                    <p>{productDescription}</p>


                    <div className= "mt-3 p-3">

                          <a href={tryDemo} >Try  demo</a>
                     <a href={learnMore} style={{marginLeft : "16px"}}>Learn More</a>
                        
                    </div>

                    <div  className="d-flex align-items-center gap-3 mt-3">

                          <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg">
                            </img>
                            </a>
                       <a href={appStore}>
                        <img src="media/images/appstoreBadge.svg"></img>
                        </a>

                    </div>
                  
                    
                 </div>
            </div>
        </div>
    
    
    
    );
}

export default LeftSection;