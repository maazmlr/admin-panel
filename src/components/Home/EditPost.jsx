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
// import axios from 'axios';
// import url from '../../url';
// import Cookies from 'js-cookie';






// const CustomCard = ({ type,postId, proImg, username, email, content,video,text,pic }) => {
//   const token=Cookies.get("token")
//   async function editPost(){
//     try {
      
    
//     console.log(postId);
//     const res=await axios.put(`${url}editPost`,{
//       postId,
//       text:""
//     },{
//     headers:{
//       token
//     }
//     })
//   }

//     catch (error) {
//       console.log(error)
//     }

    
//   }


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
//         <button className='text-center w-full' onClick={()=>editPost}>Save Changes</button>
//       </CardActions>
//     </Card>
//   )
// }

// export default CustomCard;



import React, { useState } from 'react';
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
import axios from 'axios';
import url from '../../url';
import Cookies from 'js-cookie';

const CustomCard = ({ type, postId, proImg, username, email, content, video, text, pic }) => {
  const token = Cookies.get("token");
  const [newText, setNewText] = useState(text || '');

  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };

  const editPost = async () => {
    try {
      console.log(postId);
      const res = await axios.put(`${url}editPost`, {
        post_Id:postId,
        text: newText
      }, {
        headers: {
          token
        }
      });
      console.log('Post updated successfully:', res.data);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <Card sx={{ maxheight: "28rem", background: "#0B0E12", color: "white" }}>
      <CardHeader
        sx={{ color: "white" }}
        avatar={
          <img
            src={proImg}
            alt=""
            className="h-12 w-12 rounded-full"
          />
        }
        action={
          <IconButton aria-label="settings">
            <CloseOutlinedIcon className='text-white' />
          </IconButton>
        }
        title={username}
        subheader={<h2 className='text-white'>{email}</h2>}
      />
      {text && (
        <CardContent>
          <input
            type="text"
            value={newText}
            onChange={handleTextChange}
            className="bg-transparent px-2 py-1 rounded-md w-full"
          />
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
        <button className='text-center w-full' onClick={editPost}>Save Changes</button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
