import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function MediaCard() {
  return (    
    <Card sx={{ width: "23rem",minHeight:"10rem",display:"flex" ,padding :"1rem",background:"#0E151B",borderRadius:"2rem" ,margin:1}}>
      
<img src="https://s3-alpha-sig.figma.com/img/14bf/2706/c31209d5ad5324dd7e5f3ab55fe4d6ac?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ggfT65IaFIodFCLYbE0bFijrGcq3RZU4NI92kSpMGW76hepgF7ufooMrFWk3avrifK3PbMxtmUbFn2PRLoucb0dbKCJwvrfBChcfTRgfFzxQM-0vn5QnkZu9TQf4MTg6JH~BYbHr7BP641W7pRVCdrB9K3OMcRP-moF6gH~uy7MfaF3pMo6WZ7wYnHRLxYb0wsgLxKrhgk0gYO8wLmqBnLoE5fA34E9agaODeBee7vwmdunKhM2oHKWjcKQrSCezUqlOs7slRxGNx1clOGhJIybuWpAUKM6jEBiyQbjn6DzJr1Vm95dcvrL694IfmPLFVOWVFyErowSqikNKgBC6iw__"
        title="green iguana" alt="" className='h-[80%] w-28 my-2'/>
        
      
      <Box sx={{display:"flex",flexDirection:'column',justifyContent:"space-between",marginLeft:'1rem',width:"16rem"}}>
<div>      
   <Typography gutterBottom component="div" className='text-white text-xl'>
          Lizard
        </Typography>
        <p className='text-white text-xs'>@jordan</p>
        <p className='text-white text-sm mt-1'>Fluuter dev</p>
        </div> 
      <div className=''>
        <Button className='card-btn blue  '>ADD</Button>
        <Button  className='card-btn grey'> Remove</Button>
        </div>      </Box>
    </Card>
  );
}