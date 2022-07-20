import React from "react";
import styled from "styled-components";
import UTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Container = styled.div`
    flex: 1.5;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 200vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    scroll-behavior: smooth;
    top: 0;

    @media screen and (max-width:840px){
        height: 120vh;
        flex: 0.5;
    }
`;

const Wrapper = styled.div`
    padding: 18px 26px;

    @media screen and (max-width:640px){
        padding: 18px 10px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Img = styled.img`
    height: 25px;
`;

const Tagtext = styled.span` 
    @media screen and (max-width:640px){
        display: none;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 3px;
    border-radius: 5px;
    &:hover {
        background-color: ${({ theme }) => theme.soft};
    }
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};

    @media screen and (max-width:640px){
        margin: 5px 0px;
    }
`;

const Login = styled.div`
    @media screen and (max-width:640px){
        display: none;
    }
`;

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;

    @media screen and (max-width:640px){
        display: none;
    }
`;

const Menu = ({ darkMode, setDarkMode }) => {
    const { currentUser } = useSelector((state)=>state.user);

    return (
        <Container>
        <Wrapper>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Logo>
                    <Img src={UTube} />
                    <Tagtext> UTube </Tagtext>
                </Logo>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <HomeIcon />
                    <Tagtext>Home</Tagtext>
                </Item>
            </Link>
            <Link to="trends" style={{textDecoration:"none", color:"inherit"}}>
                <Item>
                    <ExploreOutlinedIcon />
                    <Tagtext>Explore</Tagtext>
                </Item>
            </Link>
            <Link to="subscriptions" style={{textDecoration:"none", color:"inherit"}}>
                <Item>
                    <SubscriptionsOutlinedIcon />
                    <Tagtext>Subscriptions</Tagtext>
                </Item>
            </Link>
            <Item onClick={() => setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon />
                <Tagtext>
                    {darkMode ? "Light" : "Dark"} Mode
                </Tagtext>
            </Item>
            <Hr />
            <Item>
                <VideoLibraryOutlinedIcon />
                <Tagtext>Library</Tagtext>
            </Item>
            <Item>
                <HistoryOutlinedIcon />
                <Tagtext>History</Tagtext>              
            </Item>
            <Hr />
            {!currentUser && 
                <>
                    <Login>
                        Sign in to like videos, comment, and subscribe.
                        <Link to="signin" style={{textDecoration:"none"}}>
                            <Button>
                                <AccountCircleOutlinedIcon />
                                SIGN IN
                            </Button>
                        </Link>
                    </Login>
                </>    
            }
            <Hr />
            <Title>BEST OF UTube</Title>
            <Item>
                <LibraryMusicOutlinedIcon />
                <Tagtext>Music</Tagtext>                 
            </Item>
            <Item>
                <SportsBasketballOutlinedIcon />
                <Tagtext>Sports</Tagtext>                 
            </Item>
            <Item>
                <SportsEsportsOutlinedIcon />
                <Tagtext>Gaming</Tagtext>                  
            </Item>
            <Item>
                <MovieOutlinedIcon />
                <Tagtext>Movies</Tagtext>                 
            </Item>
            <Item>
                <ArticleOutlinedIcon />
                <Tagtext>News</Tagtext>  
            </Item>
            <Item>
                <LiveTvOutlinedIcon />
                <Tagtext>Live</Tagtext>  
            </Item>
            <Hr />
            <Item>
                <SettingsOutlinedIcon />
                <Tagtext>Settings</Tagtext>  
            </Item>
            <Item>
                <FlagOutlinedIcon />
                <Tagtext>Report</Tagtext>  
            </Item>
            <Item>
                <HelpOutlineOutlinedIcon />
                <Tagtext>Help</Tagtext>  
            </Item>
            {/* <Item onClick={() => setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon />
                {darkMode ? "Light" : "Dark"} Mode
            </Item> */}
        </Wrapper>
        </Container>
    );
};

export default Menu;