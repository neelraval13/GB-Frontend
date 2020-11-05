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

import SelectImages from './SelectImages';
import PostPreview from './PostPreview';
import CustomDialogTitle from './CustomDialogTitle';
import { connect } from 'react-redux';
import SelectLocation from './SelectLocation';
import TagFriends from './TagFriends';
import SelectPostSettings from './SelectPostSettings';
import { randomIdGenerate } from '../../../utils/utils';

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
  theme:string;
  cardColor:string;
  textColor:string;
  

}

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    top: 50
  },
  
});

interface ImagesObj{
  url:string;
  id:string;
}

const SelectMediaModal : React.FC<Props> = ({open,handleModalClose,cardColor,textColor,theme}) => {
  const classes = useStyles()

  //Input Files Refs

  const fileRef = useRef<HTMLInputElement>(null);
  const extrafileRef = useRef<HTMLInputElement>(null);

  //Tabs State
  const [openLocation,setOpenLocation] = useState(false)
  const [openTagFriends,setOpenTagFriends] = useState(false)
  const [openPostSettings,setOpenPostSettings] = useState(false)
  const [openGallery,setOpenGallery] = useState(false)

  //Post Detail State
  const [imagesUrl,setImagesUrl] = useState<ImagesObj[]>([])
  const [description,setDescription] = useState("")
  
  const handleInputChange = (text:string) =>{
    setDescription(text)
  } 

  const handleGalleryOpen = () =>{
    setOpenGallery(true)
  }

  const handleGalleryClose = () =>{
    setOpenGallery(false)
  }

  const handleLocationOpen = () =>{
      setOpenLocation(true)
  }
  const handleLocationClose = () =>{
    setOpenLocation(false)
  }
  const handleTagFriendsOpen = () =>{
      setOpenTagFriends(true)
  }
  const handleTagFriendsClose = () =>{
    setOpenTagFriends(false)
  }
  const handleOpenPostSettings = () =>{
    setOpenPostSettings(true)
  }
  const handleClosePostSettings = () =>{
    setOpenPostSettings(false)
  }

  const handleFileClick = () =>{
     if(fileRef && fileRef.current){
          fileRef.current.click()
     }
  }


  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(fileRef && fileRef.current){
      console.log(URL.createObjectURL(event.target.files[0]))
       setImagesUrl([{
         "url":URL.createObjectURL(event.target.files[0]),
         id:randomIdGenerate(4)
       }])
    }
   
  }

  const handleAddtionalImagesSubmit = (event:any) =>{
    event.preventDefault();
    if(extrafileRef && extrafileRef.current){
      console.log(URL.createObjectURL(event.target.files[0]))
       setImagesUrl([...imagesUrl,{
        "url":URL.createObjectURL(event.target.files[0]),
        id:randomIdGenerate(4)
      }])
    }
  }

  const handleRemoveImages = (id:string) =>{
      const data = imagesUrl.filter(img => img.id != id)
      setImagesUrl(data)
  }
  const handleOnClose = () =>{
    setImagesUrl([])
    handleModalClose()
    handleClosePostSettings()
    handleLocationClose()
    handleTagFriendsClose()
  }


  return (
    <div>

      <Dialog 
      onClose={handleOnClose} 
      aria-labelledby="select-medeia-modal" 
      open={open}
      TransitionComponent={Transition}
      classes={{
        paper:classes.dialog
      }}
      PaperProps={{
        style:{
          backgroundColor:cardColor,
          color:textColor
        }
      }}
      maxWidth="xl"
      >
       {
          !(openLocation) && !(openPostSettings) && !(openTagFriends) ?
          <DialogTitle id="select-medeia-modal" onClose={handleOnClose}>
          Create Post
        </DialogTitle>
        :

        (openLocation) && <CustomDialogTitle theme={theme} handleBack={handleLocationClose} title="Select Location"/> ||
        (openTagFriends) && <CustomDialogTitle theme={theme} handleBack={handleTagFriendsClose} title="Tag Friends"/> ||
        (openPostSettings) && <CustomDialogTitle theme={theme} handleBack={handleClosePostSettings} title="Select Privacy"/>
       }
        <DialogContent dividers style={{padding:"5px"}}>
         {
          !(openLocation) && !(openPostSettings) && !(openTagFriends) && imagesUrl.length === 0 ?
           
          <SelectImages 
          fileRef={fileRef} 
          handleFileClick={handleFileClick} 
          handleSubmit={handleSubmit}
          openGallery={openGallery}
          handleGalleryClose={handleGalleryClose}
          handleGalleryOpen={handleGalleryOpen}
          cardColor={cardColor}
          textColor={textColor}
          />

         :
         !(openLocation) && !(openPostSettings) && !(openTagFriends) ?

          <PostPreview 
          extrafileRef={extrafileRef} 
          handleAddtionalImagesSubmit={handleAddtionalImagesSubmit} 
          imagesUrl={imagesUrl} 
          handleOpenLocation={handleLocationOpen}
          handleTagFriendsOpen={handleTagFriendsOpen}
          handleOpenPostSettings={handleOpenPostSettings}
          theme={theme}
          handleInputChange={handleInputChange}
          description={description}
          mainImageId={imagesUrl[0].id}
          removeImages={handleRemoveImages}
          />

          :

          (openLocation) && <SelectLocation theme={theme}/> ||
          (openTagFriends) && <TagFriends theme={theme}/> ||
          (openPostSettings) && <SelectPostSettings theme={theme}/>

         }
         
        </DialogContent>
    
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state:any) =>{
  return{
    theme:state.settings.theme
  }
}

export default connect(mapStateToProps)(SelectMediaModal);
