
import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import profiles from '../samdata.json'
interface Props{
    imgUrl:string;
    isCurrentUser?:boolean;
    isUsers?:boolean;
    name:string;
}


const StoriesCard : React.FC<Props>= (props) => {
    
    return (
        <div className='story-card' style={{backgroundImage: `url(${props.imgUrl})`}}>
            
           {
               props.isCurrentUser &&  <AiFillPlusCircle  className='add-icon' />
           }
           {
                 props.isUsers &&  <img src={profiles[0].url} className='avatar-img' alt='avatar-img' />
           }
           <h4>{props.name}</h4>
        </div>
    )
}

export default StoriesCard
