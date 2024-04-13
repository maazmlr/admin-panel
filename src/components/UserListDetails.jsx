import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {  Typography } from '@mui/material';


const UsersListDetails=({userName,proImg,email})=>{
    return(
        <>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={proImg} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText  primary={
                    <Typography className='font-sm ' sx={{color:"white"}}  color="primary">
                        {userName}
          </Typography>

        } secondary={
          <Typography className=' ' sx={{color:"white",fontSize:"0.8rem"}}  color="primary">
                        {email}
          </Typography>

        } />
      </ListItem>
        </>
    )
}
export default UsersListDetails