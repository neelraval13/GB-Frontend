import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function WelcomeScreen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>

      <Backdrop className={classes.backdrop} open={open} >
      <div style={{width:'100%'}}>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      grabCursor={true}
      effect="cube"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true, 
      }}
    >
      <SwiperSlide><div style={{width:'400px',height:'400px',backgroundColor:'white'}}>
          </div></SwiperSlide>
       <SwiperSlide><div style={{width:'400px',height:'400px',backgroundColor:'white'}}>
          </div></SwiperSlide>
          <SwiperSlide><div style={{width:'400px',height:'400px',backgroundColor:'white'}}>
          </div></SwiperSlide>
    </Swiper>
      </div>
      </Backdrop>
    </div>
  );
}
