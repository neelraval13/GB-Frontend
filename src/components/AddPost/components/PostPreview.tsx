import React, { Ref } from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PostAction from './PostAction';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    dialog: {
      position: 'absolute',
      top: 50
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
      height:"380px",
      overflowY:'scroll',
    },
    previewImageMain:{
      height:'60%',
      width:'100%',
  
    },
    previewImageInline:{
      height:'40%',
      display:'flex',
      flexDirection:"row",
      flexWrap:'wrap'
    },
    previewSecondary:{
      width:"150px",
      height:"120px",
      objectFit:'contain',
      borderRadius:5,
      marginRight:"15px",
      marginTop:"10px",
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
    }
  });

  interface Props{
      imagesUrl:Array<{url:string;id:string;}>;
      handleAddtionalImagesSubmit:(event:any) => void;
      handleOpenLocation:() => void;
      handleTagFriendsOpen:() => void;
      handleOpenPostSettings:() => void;
      extrafileRef:React.RefObject<HTMLInputElement>;
  }



const PostPreview : React.FC<Props> = props => {
    const classes = useStyles()
    return (
        <div className={classes.preview}>
              <div className={classes.previewImageContainer}>
                <img src={props.imagesUrl[0].url}  className={classes.previewImageMain}/>
                <div className={classes.previewImageInline}>

                    {
                      props.imagesUrl.map(data =>{
                        return <img src={data.url}  className={classes.previewSecondary}/>
                      })
                    }
                   
                   
                    <div className={classes.addBtnContainer}>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" ref={props.extrafileRef} onChange={props.handleAddtionalImagesSubmit} />
                        <label htmlFor="icon-button-file" className={classes.label}>
                          <IconButton color="secondary" aria-label="upload picture" component="span" className={classes.addBtn}>
                            <AddOutlinedIcon />
                          </IconButton>
                        </label>
                    </div>
                </div>
              </div>
              <PostAction 
               handleOpenLocation={props.handleOpenLocation}
               handleTagFriendsOpen={props.handleTagFriendsOpen}
               handleOpenPostSettings={props.handleOpenPostSettings}
              />

         </div>
    )
}

export default PostPreview
