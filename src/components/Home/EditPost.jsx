import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



export default function EditPost() {



  return (
    <Card sx={{ height:"28rem", background:"#0B0E12", color:"white"}}>
      <CardHeader sx={{color:"white"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <CloseOutlinedIcon className='text-white' />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={<h2 className='text-white'>hello</h2>}
      />
      <CardMedia
        className='rounded-xl'
        component="img"
        sx={{height:"20rem"}}

        image="https://imgs.search.brave.com/BJxacTrU058uTVLLjCrr2xHMj3VuXhnUDGTmnmUb-mg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/YS50cmFuc2Zlcm1h/cmt0LnRlY2hub2xv/Z3kvcG9ydHJhaXQv/YmlnLzI4MDAzLTE2/OTQ1OTAyNTQuanBn/P2xtPTE"
        alt="Paella dish"
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
      <CardActions sx={{background:"#335DD2"}} className='rounded-xl mt-2' disableSpacing>
        <button className='text-center w-full'>Save Changes</button>
        </CardActions>
        
    </Card>
  );
}
