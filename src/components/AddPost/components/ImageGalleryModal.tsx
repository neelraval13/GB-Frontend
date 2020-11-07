import React from 'react';
import { createStyles, Theme, withStyles, WithStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import clsx from 'clsx';

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
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles({
    dialog: {
      position: 'absolute',
      top: 50
    },
    imageGrid:{
        width:'750px',
        height:'500px',
        display:"flex",
        flexDirection:'row',
        flexWrap:'wrap',
       

    },
    gridImageContainer:{
        width:'230px',
        height:'200px',
        margin:'10px',
        position:'relative'
    },
    gridImage:{
        width:'100%',
        height:'100%',
        objectFit:'fill',
       
    },
    imageSelect:{
        position:'absolute',
        top:'-3px',
        right:'-20px'
    },
    radioBtn:{
        color:'white',
        
        '&$checked':{
            color:'red'
        }
    },
    icon: {
        borderRadius: '50%',
        width: 20,
        height: 20,
        backgroundColor: '#fff',

      },
      checkedIcon: {
        color:'#ed204b',
        backgroundColor: '#ed204b',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
        display: 'block',
        width: 20,
        height: 20,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
        },

      },
      cancelBtn:{
        color:'#fff',
        width:'160px',
        height:"50px",
        backgroundColor:'#FF5E3A',
        marginRight:'20px'
      },
      confirmBtn:{
        color:'#fff',
        width:'160px',
        height:"50px",
        backgroundColor:'#ed204b'
      }
    
  });



export default function ImageGalleryModal(props:any) {
    const [selected,setSelected] =  React.useState('')
    const classes = useStyles()

    const handleRadioChange = (text:string) => {
        setSelected(text)
      };
    const data = [
        {
            img:'https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'1'
        },
        {
            img:'https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'0'
        },
        {
            img:'https://images.unsplash.com/photo-1541874760634-a0da8ee7415b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'9'
        },
        {
            img:'https://images.unsplash.com/photo-1541936879-c80db20ab951?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'8'
        },
        {
            img:'https://images.unsplash.com/photo-1541874760634-a0da8ee7415b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'2'
        },
        {
            img:'https://images.unsplash.com/photo-1541874760634-a0da8ee7415b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'3'
        },
        {
            img:'https://images.unsplash.com/photo-1541936879-c80db20ab951?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'5'
        },
        {
            img:'https://images.unsplash.com/photo-1541874760634-a0da8ee7415b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id:'4'
        },
    ]

  return (
    <div>
      <Dialog 
      onClose={props.handleGalleryClose} 
      aria-labelledby="customized-dialog-title" 
      open={props.openGallery}
      classes={{
        paper:classes.dialog
      }}
      PaperProps={{
        style:{
          backgroundColor:props.cardColor,
          color:props.textColor
        }
      }}
      maxWidth="xl"
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleGalleryClose}>
          Choose From My Photos
        </DialogTitle>
        <DialogContent dividers >
        <RadioGroup  name="privacy_option" value={selected} >
         <div className={classes.imageGrid}>
        
                {
                    data.map(img =>{
                        return  <div className={classes.gridImageContainer} onClick={() => handleRadioChange(img.id)}>
                                    <img src={img.img} className={classes.gridImage}/>
                                    <div className={classes.imageSelect}>
                                    <FormControlLabel value={img.id} control={<Radio className={classes.radioBtn}   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      />} label="" />
                                </div>
                        </div>
                    })
                }
         

         </div>
         </RadioGroup>

         
        </DialogContent>
        <DialogActions style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button  onClick={props.handleGallleryClose} className={classes.cancelBtn}>
            Cancel
          </Button>
          <Button  onClick={props.handleGallleryClose} className={classes.confirmBtn}>
            Confirm Photo
          </Button>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}
