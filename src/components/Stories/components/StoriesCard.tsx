import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
interface Props{
    imgUrl:string;
    isCurrentUser?:boolean
}


const StoriesCard : React.FC<Props>= (props) => {
    
    return (
        <div className='story-card'>
            <img src={props.imgUrl}  className='story-thumbnail' />
           {
               props.isCurrentUser &&  <AiFillPlusCircle  className='add-icon' />
           }
        </div>
    )
}

export default StoriesCard
