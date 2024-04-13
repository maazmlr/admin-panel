import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import noProfile from "../../assets/profile.png"

export default function MediaCard({username,proImg,email}) {
  return (    
    <Card sx={{ width: "23rem",minHeight:"10rem",display:"flex" ,padding :"1rem",background:"#0E151B",borderRadius:"2rem" ,margin:1}}>
      
<img src={proImg || noProfile}
        title="green iguana" alt="" className='h-[80%] w-28 my-2'/>
        
      
      <Box sx={{display:"flex",flexDirection:'column',justifyContent:"space-between",marginLeft:'1rem',width:"16rem"}}>
<div>      
   <Typography gutterBottom component="div" className='text-white text-xl'>
          {username}
        </Typography>
        <p className='text-white text-xs'>{email}</p>
        <p className='text-white text-sm mt-1'>Fluuter dev</p>
        </div> 
      <div className=''>
        <Button sx={{color:"white"}} className='card-btn blue  '>ADD</Button>
        <Button  className='card-btn grey'> Remove</Button>
        </div>      </Box>
    </Card>
  );
}