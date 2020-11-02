import React, { useRef, useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {FiMonitor} from 'react-icons/fi'
import {FcGallery} from 'react-icons/fc'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});



const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: "#fff",
      backgroundColor:'#ed204b',
      paddingLeft:8,
      paddingRight:8,
      paddingTop:5,
      paddingBottom:5,
      borderRadius:3
    },
  
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{fontSize:16}}>{children}</Typography>
      {onClose ? (
        <IconButton 
        aria-label="close" 
        className={classes.closeButton} 
        onClick={onClose} 
      >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

interface Props{
  open :boolean;
  handleModalClose:() => void;
 

}

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    top: 70
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
  preview:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'650px',
  },
  previewImageContainer:{
    marginTop:15,
    marginLeft:25,
    marginRight:25,
    height:"450px"
  },
  previewImageMain:{
    height:'60%',
    width:'100%',

  },
  previewImageInline:{
    height:'40%',
    display:'flex',
    flexDirection:"row"
  }
});

const SelectMediaModal : React.FC<Props> = ({open,handleModalClose}) => {
  const classes = useStyles()
  const fileRef = useRef<HTMLInputElement>(null);
  const [imagesUrl,setImagesUrl] = useState('')

  const handleFileClick = () =>{
     if(fileRef && fileRef.current){
          fileRef.current.click()
     }
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(fileRef && fileRef.current){
      console.log(URL.createObjectURL(event.target.files[0]))
       setImagesUrl(URL.createObjectURL(event.target.files[0]))
    }
   
  }

  return (
    <div>

      <Dialog 
      onClose={handleModalClose} 
      aria-labelledby="select-medeia-modal" 
      open={open}
      TransitionComponent={Transition}
      classes={{
        paper:classes.dialog
      }}
      maxWidth="xl"
      >
        <DialogTitle id="select-medeia-modal" onClose={handleModalClose}>
          Create Post
        </DialogTitle>
        <DialogContent dividers>
         {
           imagesUrl === '' ?
           <div className={classes.flex}>
              <div className={classes.row1} onClick={handleFileClick} style={{cursor:"pointer"}}>
                  
                    <div className={classes.inlineFlex}>
                
                        <input id="file-upload" type="file" ref={fileRef} style={{display:'none'}} onChange={handleSubmit}/>
                        <FiMonitor  style={{fontSize:25,marginBottom:10}}/>
                        <h3>Upload Photo</h3>
                        <p>Browse from your computer</p>
                    </div>
              </div>
              <div className={classes.row2} style={{cursor:"pointer"}}>
                    <div className={classes.inlineFlex}>
                    <FcGallery style={{fontSize:25,marginBottom:10}}/>
                    <h3>Choose from my photos</h3>
                    <p>Select from your uploads</p>
                    </div>
              </div>
         </div>
         :
         <div className={classes.preview}>
              <div className={classes.previewImageContainer}>
              <img src={imagesUrl}  className={classes.previewImageMain}/>
              <div className={classes.previewImageInline}>
                  
              </div>
              </div>

              <input />
         </div>
         }
         
        </DialogContent>
    
      </Dialog>
    </div>
  );
}

export default SelectMediaModal;
