import React from 'react';
import Comment from './Comment';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Container = styled.div``;

const NewComment = styled.div` 
    display: flex; 
    align-items: center; 
    gap: 10px;
`;

const Avatar = styled.img` 
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Input = styled.input` 
    border: none; 
    border-bottom: 1px solid ${({theme})=>theme.soft}; 
    color: ${({theme})=>theme.text}; 
    background-color: transparent;
    outline: none; 
    padding: 5px; 
    width: 100%;
`;

const Button = styled.button` 
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: skyblue;
    color: white;
`;

const Comments = ({ videoId }) => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [comments, setComments] = useState([]);
    const [val, setVal] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`/comments/${videoId}`);
                setComments(res.data);
            } catch (err) {}
        };
        fetchComments();
    }, [videoId,dispatch]);

    const handleComment = async() => {
        await axios.post("/comments",{
            userId: currentUser._id,
            videoId: videoId, 
            desc: val
        });
    }

    return (
        <Container>
            <NewComment>
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoH44jc98NhOcARL3uaZZWbSvvxCms3BNvlXwQ=s88-c-k-c0x00ffffff-no-rj-mo" />
                <Input placeholder="Add a comment..." value={val} onChange={(e)=>setVal(e.target.value)} />
                <Button onClick={handleComment}>SUBMIT</Button>
            </NewComment>
            {comments.map((comment)=>(
                <Comment key={comment._id} comment={comment} />
            ))}
        </Container>
    )
}

export default Comments