import React from 'react';


const Card = ({name,email,id } )=>{
    return(
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <img alt='robot' src= {`http://robohash.org/${id}? 200*200`}/>
            <div>
                <h2>{name} </h2>
                <p>{email} </p>
                <h3>towa eeeeeeh</h3>
                
            </div>
        
        </div>
    );

}
export default Card;