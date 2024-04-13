// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';




// // export default function EditPost({proImg,email,username,pic,video,text}) {



// //   return (
//     // <Card sx={{ height:"28rem", background:"#0B0E12", color:"white"}}>
//     //   <CardHeader sx={{color:"white"}}
//     //     avatar={
//     //       <img
//     //       src={proImg}
//     //       alt=""
//     //       className="h-12 w-12 rounded-full"
//     //     />
          
//     //     }
//     //     action={
//     //       <IconButton aria-label="settings">
//     //         <CloseOutlinedIcon className='text-white' />
//     //       </IconButton>
//     //     }
//     //     title={username}
//     //     subheader={<h2 className='text-white'>{email}</h2>}
//     //   />
//     //   <CardMedia
//     //     className='rounded-xl'
//     //     component="img"
//     //     sx={{height:"20rem"}}
//     //     title={text}
//     //     image={pic}
//     //     alt="Paella dish"
//     //   />

//     //   <CardActions sx={{background:"#335DD2"}} className='rounded-xl mt-2' disableSpacing>
//     //     <button className='text-center w-full'>Save Changes</button>
//     //     </CardActions>
        
//     // </Card>


// const CustomCard = ({ type, proImg, username, email, content,video,text,pic }) => {
//   return (
//     <Card sx={{ maxheight:"28rem", background:"#0B0E12", color:"white"}}>
//       <CardHeader
//         sx={{color:"white"}}
//         avatar={
//           <img
//             src={proImg}
//             alt=""
//             className="h-12 w-12 rounded-full"
//           />
//         }
//         action={
//           <IconButton aria-label="settings">
//             <CloseOutlinedIcon className='text-white' />
//           </IconButton>
//         }
//         title={username}
//         subheader={<h2 className='text-white'>{email}</h2>}
//       />
//       {text && (
//         <CardContent>
//           <p>{text}</p>
//         </CardContent>
//       )}
//       { pic && (
//         <CardMedia
//           className='rounded-xl'
//           component="img"
//           sx={{height:"20rem"}}
//           title={content}
//           image={pic}
//           alt="Paella dish"
//         />
//       )}
//       {video && (
//         <CardMedia
//           component="video"
//           sx={{height:"20rem"}}
//           title={content}
//           src={video}
//           controls
//         />
//       )}
//       <CardActions sx={{background:"#335DD2"}} className='rounded-xl mt-2' disableSpacing>
//         <button className='text-center w-full'>Save Changes</button>
//       </CardActions>
//     </Card>
//   )
// }

// export default CustomCard;


import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const CustomCard = ({ type, proImg, username, email, content, video, text, pic }) => {
  const handleEdit = () => {
    // Add your edit logic here
    console.log('Editing content:', content);
  };

  return (
    <Card sx={{ maxheight: "28rem", background: "#0B0E12", color: "white" }}>
      <CardHeader
        sx={{ color: "white" }}
        avatar={<img src={proImg} alt="" className="h-12 w-12 rounded-full" />}
        action={
          <IconButton aria-label="settings" onClick={handleEdit}>
            <CloseOutlinedIcon className='text-white' />
          </IconButton>
        }
        title={username}
        subheader={<h2 className='text-white'>{email}</h2>}
      />
      {text && (
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      )}
      {pic && (
        <CardMedia
          className='rounded-xl'
          component="img"
          sx={{ height: "20rem" }}
          title={content}
          image={pic}
          alt="Paella dish"
        />
      )}
      {video && (
        <CardMedia
          component="video"
          sx={{ height: "20rem" }}
          title={content}
          src={video}
          controls
        />
      )}
      <CardActions sx={{ background: "#335DD2" }} className='rounded-xl mt-2' disableSpacing>
        <button className='text-center w-full'>Save Changes</button>
      </CardActions>
    </Card>
  )
}

export default CustomCard;
