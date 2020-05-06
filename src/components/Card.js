import React from 'react';

//building the function instead of the class way for now
//const Card = (props) => {
//    const { name, email, id} = props;

const Card = ({ name, email, id}) => {
    return (
        <div className='bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5'>  {/* tc is text center */}
            <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
            <div>
                <h2>{ name }</h2>   {/*we write an expression in curly bracket in JSX*/}
                <p>{ email }</p>
            </div>
        </div>
        //This HTML like syntax is JSX, we need to import React so 
        //our program understands JSX
    );
}

export default Card;