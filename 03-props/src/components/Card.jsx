import React from "react";
 const Card = (props) => {
    console.log(props);

    return (
        <div className='Card'>
        <img src= {props.img} alt='profile' />
        <h1>{props.user}, {props.age}</h1>
        <p>learning the react</p>
        <button>View profile</button>
        </div>

    )
 }

 export default Card;