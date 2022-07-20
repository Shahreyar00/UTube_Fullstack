import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {format} from "timeago.js";

const Container = styled.div` 
    width: ${(props)=>(props.type==="sm"?"100px" : "230px")}; 
    margin-bottom: ${(props)=>(props.type==="sm"?"10px":"35px")};
    cursor: pointer; 
    display: ${(props)=>props.type==="sm" && "flex"};

    @media screen and (max-width:640px){
        width: 180px;
    }

    @media screen and (max-width:480px){
        width: 100%;
    }
`;

const Image = styled.img` 
    width: 100%;
    height: ${(props)=>(props.type==="sm"?"140px":"150px")}; 
    background-color: #999; 
    flex: 1;

    /* @media screen and (max-width:640px){
        height: 15px;
    } */
`;

const Details = styled.div` 
    display: flex; 
    margin-top: ${(props)=>props.type!=="sm" && "12px"}; 
    gap: 12px;
    flex: 1;
`;

const ChannelImage = styled.img` 
    width: 34px;
    height: 34px;
    border-radius: 50%; 
    background-color: #999; 
    display: ${(props)=>props.type==="sm" && "none"};
`;

const Texts = styled.div` `;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme})=>theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 9px 0px;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get(`/users/find/${video.userId}`);
            setChannel(res.data);
        };
        fetchChannel();
    }, [video.userId]);


    return (
        <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
            <Container>
                <Image 
                    type={type}
                    // src="https://img.youtube.com/vi/mLUTB5TwM4o/maxresdefault.jpg" //thumbnail
                    src={video.imgUrl}
                />
                <Details type={type}>
                    <ChannelImage 
                        type={type} 
                        // src="https://yt3.ggpht.com/ytc/AKedOLQuONFgFu1BtXgGqGhmOmc8c8JqTVDADFLTOKyt4g=s176-c-k-c0x00ffffff-no-rj"//channel image
                        src={channel.img}
                    />
                    <Texts>
                        <Title>{video.title}</Title>
                        <ChannelName>{channel.name}</ChannelName>
                        {/* <Info>123,345 views • 2 day ago</Info> */}
                        <Info>{video.views} views • {format(video.createdAt)}</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card