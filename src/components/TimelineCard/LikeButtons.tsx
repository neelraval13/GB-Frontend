import React from 'react'
import Popover from '@material-ui/core/Popover';
import { coolEmoji, inLoveEmoji, likeIcon, wowEmoji } from '../../constants/app.icons';
import Tooltip from '@material-ui/core/Tooltip';

interface Props{
    isMenuOpen:boolean;
    anchorEl:HTMLElement | null;
    handleMenuClose:() => void;
}


const LikeButtons : React.FC<Props> = ({isMenuOpen,anchorEl,handleMenuClose}) => {
    return (
   
        <Popover
		
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        PaperProps={{
          style:{borderRadius:30}
        }}
    
      >
        <div className='reaction-container'>
        <Tooltip title="Like" placement="top">
            <img src={`${likeIcon}`} className='reactions-img'/>
        </Tooltip>
        <Tooltip title="Love" placement="top">
        <img src={inLoveEmoji} className='reactions-img'/>
        </Tooltip>
        <Tooltip title="Wow" placement="top">
        <img src={wowEmoji} className='reactions-img'/>
        </Tooltip>
        <Tooltip title="Cool" placement="top">
        <img src={coolEmoji} className='reactions-img'/>
        </Tooltip>
       
        
       
         
         
        </div>
          
      </Popover>
    )
}

export default LikeButtons
