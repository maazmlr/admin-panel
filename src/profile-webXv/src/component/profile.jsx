import bgImg from '../assets/bg.png'
import p from '../assets/profile.png'
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useEffect, useState } from 'react';

export default function FirstSec({ emailVal }) {
    const [media, setMedia] = useState();
    const [bg, setBg] = useState();
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const fileType = file.type.split('/')[0]; // 'image' or 'video'
                const formData = new FormData();
                formData.append('image', file);
                setMedia(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange1 = (e) => {
        const file = e.target.files[0];
        console.log(file)

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const fileType = file.type.split('/')[0]; // 'image' or 'video'
                const formData = new FormData();
                formData.append('image', file);
                setBg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            <div>
                <img className='post-bg-img' src={bgImg} alt="p" />
                <label className="camera-icon1">
                    <CameraAltOutlinedIcon style={{ color: "#FAFAFA", fontSize: 24 }} />
                    <input onChange={handleFileChange1} accept="image/x-png, image/gif, image/jpeg" style={{ display: "none" }} type="file" />
                </label>
            </div>

            <div>
                <div>
                    <img className='post-profile-img1' src={p} alt="profile" />
                    <label className="camera-icon">
                        <CameraAltOutlinedIcon style={{ color: "#FAFAFA", fontSize: 24 }} />
                        <input onChange={handleFileChange} accept="image/x-png, image/gif, image/jpeg" style={{ display: "none" }} type="file" />
                    </label>

                </div>
                <button className='edit-btn' style={{position: "absolute", right: "0", marginRight: "250px", marginTop: "8px"}}><CreateOutlinedIcon fontSize='14' style={{marginRight: "5px"}}/>Edit profile</button>
            </div>
            <div className='post-intro'>
                <p className='post-intro-name'>Fahim Abbasi</p>
                <p style={{ fontSize: "20px" }} className='post-time'>@fahimabbasi</p>
                <div style={{ padding: "2rem 0 1rem 0" }}>
                    <p style={{ fontSize: "20px" }} className='post-time'>Product Designer<span style={{ color: "#335DD2" }}>@dotexe</span></p>
                    <p style={{ fontSize: "16px", marginTop: "4px" }} className='post-time'><PinDropOutlinedIcon fontSize='12' />London, UK</p>
                </div>
                <hr style={{ color: "#324151", margin: "0rem 0rem 1rem 0" }} />
            </div>

        </div>
    )
}