import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {FiMonitor} from 'react-icons/fi'
import {FcGallery} from 'react-icons/fc'
import ImageGalleryModal from './ImageGalleryModal';

const useStyles = makeStyles({

    input:{
      display:"none",
    },
    flex:{
      display:'flex',
      flexDirection:'row',
      height:"180px",
      width:'650px'
    },
    row1:{
      width:'50%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    row2:{
      width:'50%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    inlineFlex:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
  
   
    
    
  });

const SelectImages = (props:any) => {
    const classes = useStyles()

    return (
      <React.Fragment>
        <div className={classes.flex}>
        <div className={classes.row1} onClick={props.handleFileClick} style={{cursor:"pointer"}}>
            
              <div className={classes.inlineFlex}>
          
                  <input id="file-upload" type="file" ref={props.fileRef} style={{display:'none'}} onChange={props.handleSubmit}/>
                  <FiMonitor  style={{fontSize:25,marginBottom:10}}/>
                  <h3>Upload Photo</h3>
                  <p>Browse from your computer</p>
              </div>
        </div>
        <div className={classes.row2} style={{cursor:"pointer"}} onClick={props.handleGalleryOpen}>
              <div className={classes.inlineFlex}>
              <FcGallery style={{fontSize:25,marginBottom:10}}/>
              <h3>Choose from my photos</h3>
              <p>Select from your uploads</p>
              </div>
        </div>
        </div>

        <ImageGalleryModal 
         openGallery={props.openGallery}
         handleGalleryClose={props.handleGalleryClose}
         handleGalleryOpen={props.handleGalleryOpen}
         cardColor={props.cardColor}
         textColor={props.textColor}
        />
        </React.Fragment>
    )
}

export default SelectImages
