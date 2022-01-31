import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from './Firebase.js/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "./Redux/Reducer/userSlice"
export default Header


function Header(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user)
                history.push('/')
            }
        })
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
        auth.signInWithPopup(provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            alert(error.message);
        });
    } else if (userName) {
        auth.signOut()
        .then(() => {
            dispatch(setSignOutState())
            history.push('/login')
        }).catch((err) => alert(err.message));
    }
}


    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }           
    
         

    return (
        <Nav>

            <Logo src="/img/images/logo.svg"/>
            




            {!userName ?
                <Login onClick={handleAuth}>Login</Login>
                :
                <>
            <NavMenu>

                <a href = "/">
                    <img src ="/img/images/home-icon.svg" />
                    <span>HOME</span>

                </a>

                <a>
                    <img src ="/img/images/search-icon.svg" />
                    <span>SEARCH</span>

                </a>

                <a>
                    <img src ="/img/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>

                </a>

                <a href = "/original">
                    <img src ="/img/images/original-icon.svg" />
                    <span>ORIGINALS</span>

                </a>

                <a>
                    <img src ="/img/images/movie-icon.svg" />
                    <span>MOVIES</span>

                </a>
                <a>
                    <img src ="/img/images/series-icon.svg" alt="" />
                    <span>SERIES</span>

                </a>

            </NavMenu>

            <SignOut>
                <UserImg src={userPhoto} alt={userName}/>
                <DropDown>
                    <span onClick = {handleAuth}>SignOut</span>
                </DropDown>
            </SignOut>
            </>
}

        </Nav>
    )
}


const Nav = styled.div`
    height: 90px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 60px;
    align-items: center;



    a{
        display: flex;
        align-items: center;
        margin: 0 12px;
        text-decoration: none;
        cursor: pointer;


        img{
            height: 20px;
        }

        span{
            font-size: 14px;
            color: #eee !important;
            font-family: Avenir-Roman, sans-serif;
            letter-spacing: 1.72px;
            padding: 0 0.65rem;
            position: relative;
            
            &:after {
                content: "";
                height: 2px;
                background: white;
                text-decoration: none;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: center;
                transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scalex(0);


            }
        }

        &:hover{
            span:after {
                transform: scaleX(0.75);
                opacity: 1;
            }
        }
    }
`

const Login = styled.a`
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    height: 40px;
    width: 100px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #f9f9f9;
    text-align: center;
    padding: 9.2px;
    margin-left: 90%;
    transition: all .2s ease 0s;
 

    &:hover{
        background-color: #f9f9f9;
        color: #000;

        
    }
`

const Guest = styled.a`
    color: #fff;
`

const UserImg = styled.img`
    width: 100%
    object-fit: cover;
`

const DropDown = styled.div`
    position: absolute;
    top: 23px;
    right: 0px;
    background: rgba(19, 19, 19, 1);
    border: 1px solid rgba(151, 151, 151, 0.3);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`

const SignOut = styled.div`
    position: relative;
    height: 45px;
    width: 45px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        margin: 0px;
        height: 60px;
        width: 60px;
        display: flex;
        border-radius: 50%;
        cursor: pointer;
        position: relative;

    }

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duraction: 1s;
            z-index: 2;
            color: white;
            overflow: visible;
           
        }
    }
`