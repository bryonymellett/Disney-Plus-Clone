import React from 'react'
import styled from 'styled-components'

function Login() {
    return (


        <Container>

            <Content>
                
                <ChannelsLogoOne src = "/img/images/cta-logo-one.svg" />
              
              
                <LoginButton href ="/">                  
                    GET ALL THERE
                </LoginButton>


                <Description>
                   Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                

                <ChannelsLogoTwo src = "/img/images/cta-logo-two.png" />

            </Content>

        </Container>
    )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 90px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-Y: hidden;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0.95;
        background-image: url("/img/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    }

`

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    margin-bottom: 20vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const ChannelsLogoOne = styled.img`
`

const LoginButton = styled.a`
    cursor: pointer;
    background: #0063e5;
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #fff !important;
    font-size: 18px;
    letter-spacing: 1.9px;
    border-radius: 5px;
    text-align: center;
    transition: all 250ms;
    text-decoration: none;
    
    &:hover {
        background: #0483ee;
        
    }

`

const Description = styled.div`
    font-size: 14px;
    font-weight: 400 !important;
    color: #eee !important;
    letter-spacing: 1.8px;
    line-height: 2;
    text-align: center;
    margin-bottom: 38px;
`

const Logos = styled.div`
`

const ChannelsLogoTwo = styled.img`
    width: 90%;
    padding: 0 2px;
`