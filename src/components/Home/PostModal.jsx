import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditPost from './EditPost';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
    width:"30rem",
  bgcolor: '#0B0E12',
  boxShadow: 104,
  p:"0.5rem",
};

export default function PostModal({proImg,userName,userEmail,text,pic,video,postId}) {
  console.log(postId)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='flex  '>
      <p onClick={handleOpen}>Edit</p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <EditPost postId={postId} proImg={proImg} pic={pic} text={text} video={video} username={userName} email={userEmail}  />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}