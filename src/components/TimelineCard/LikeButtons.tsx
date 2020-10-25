import React from 'react'
import Popover from '@material-ui/core/Popover';

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
        
    
      >
        <div>
        <span style={{fontSize:30}}>&#128077;</span>
          <span style={{fontSize:30}}>&#x1F60D;</span>
          <span style={{fontSize:30}}>&#128518;</span>
          <span style={{fontSize:30}}>&#128545;</span>
          <span style={{fontSize:30}}>&#129395;</span>
        </div>
          
      </Popover>
    )
}

export default LikeButtons
