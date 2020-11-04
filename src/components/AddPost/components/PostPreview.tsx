import React, { Ref, useState } from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PostAction from './PostAction';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {MdAddToPhotos} from 'react-icons/md'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    dialog: {
      position: 'absolute',
      top: 50,
      
    },
    input:{
      display:"none",
    },
    preview:{
      display:'flex',
      flexDirection:'column',
      width:'650px',
    },
    previewImageContainer:{
      marginTop:15,
      marginLeft:25,
      marginRight:25,
      maxHeight:"380px",
      overflowY:'scroll',
      "&::-webkit-scrollbar": {
        width: "10px",
        height:"10px !important",
      },
      "&::-webkit-scrollbar-track": {
        background:"#202225",
      },

      "&::-webkit-scrollbar-thumb": {
        background:"#494B4E",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#b30000"
      }  
     
    },
    previewImageMain:{
      width:'100%',
      borderRadius:'10px',
      position: "relative",
    },
    previewImageInline:{
      display:'flex',
      flexDirection:"row",
      flexWrap:'wrap'
    },
    previewSecondary:{
      width:"150px",
      height:"120px",
      borderRadius:5,
      marginRight:"15px",
      marginTop:"10px",
      position: "relative"
    },
    addBtnContainer:{
      marginTop:"10px",
      width:"80px",
      height:"120px",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    label:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    addBtn:{
      backgroundColor:'#f5f5f5'
    },
    fabBtn:{
      width:"140px",
      height:'50px',
      borderRadius:'8px',
      backgroundColor:'white',
      float:'left',
      position:'absolute',
      top: "20px",
      left: "12px",
      color:'black',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      padding:"5px 10px",
      border:'1px solid grey'
    },
    closeBtn:{
      cursor:'pointer',
      position: "absolute",
      float:'right',
      width:"30px",
      height:'30px',
      top: "3px",
      right: "2px",
      backgroundColor:'grey',
      padding:"8px",
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:'30px',
      marginBottom:'-250px',
     "&:hover":{
        backgroundColor:'#d3d3d3',
      }
    }
  });

  interface Props{
      imagesUrl:Array<{url:string;id:string;}>;
      handleAddtionalImagesSubmit:(event:any) => void;
      handleOpenLocation:() => void;
      handleTagFriendsOpen:() => void;
      handleOpenPostSettings:() => void;
      handleInputChange:(text:string) => void;
      removeImages:(id:string) => void;
      extrafileRef:React.RefObject<HTMLInputElement>;
      theme:string;
      description:string;
      mainImageId:string;
  }



const PostPreview : React.FC<Props> = props => {
    const classes = useStyles()
    const [showFab,setShowFab] = useState(false)
   
    return (
        <div className={classes.preview}>
              <div className={classes.previewImageContainer}>
                <div className={classes.previewImageMain}  
                onMouseEnter={() => setShowFab(true)} 
                onMouseLeave={() => setShowFab(false)}>
                    {
                      showFab && <div className={classes.fabBtn} >
                      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" ref={props.extrafileRef} onChange={props.handleAddtionalImagesSubmit} />
                      <label htmlFor="icon-button-file" className={classes.label} style={{cursor:'pointer'}}>
                         <MdAddToPhotos style={{fontSize:20,marginRight:5}} /> Add Photos
                      </label>
                      
                    </div>
                    }
                    <img src={props.imagesUrl[0].url}  
                    style={{width:'100%',height:'250px',objectFit:"fill", borderRadius:'8px'}}                   
                    />
                     <span className={classes.closeBtn} onClick={() => props.removeImages(props.mainImageId)}>
                                       <CloseIcon style={{fontSize:20,color:'black'}}/>         
                     </span>
                </div>
               
                <div className={classes.previewImageInline}>

                    {
                      props.imagesUrl.map(data =>{
                        if(props.mainImageId !== data.id){
                          return (<div className={classes.previewSecondary}>
                            
                            <img src={data.url}  style={{width:'100%',height:'100%',objectFit:'cover', borderRadius:'5px'}} />
                            <span className={classes.closeBtn} onClick={() => props.removeImages(data.id)}>
                                       <CloseIcon style={{fontSize:20,color:'black'}}/>         
                            </span>
                          </div> )
                        }
                      })
                    }
                   
                   
                    {
                      props.imagesUrl.length > 2 && <div className={classes.addBtnContainer}>
                      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" ref={props.extrafileRef} onChange={props.handleAddtionalImagesSubmit} />
                      <label htmlFor="icon-button-file" className={classes.label}>
                        <IconButton color="secondary" aria-label="upload picture" component="span" className={classes.addBtn}>
                          <AddOutlinedIcon />
                        </IconButton>
                      </label>
                  </div>
                    }
                </div>
              </div>
              <PostAction 
               handleOpenLocation={props.handleOpenLocation}
               handleTagFriendsOpen={props.handleTagFriendsOpen}
               handleOpenPostSettings={props.handleOpenPostSettings}
               theme={props.theme}
               handleInputChange={props.handleInputChange}
               description={props.description}
              />

         </div>
    )
}

export default PostPreview
