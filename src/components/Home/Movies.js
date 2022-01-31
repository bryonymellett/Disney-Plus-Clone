import { render } from '@testing-library/react';
import React, { useEffect, useReducer, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { AppState } from 'react-native';
import Popular from './Popular';
import NewTo from './NewTo';



function Movies () {

      
    return(
    
            <Container>
           
                <Content>
                <Wrap>

                    <Popular />
                    <NewTo />

                
                </ Wrap>                     
                        
                </Content>          

            </Container>
       

     ) }


const Container = styled.div`
    height: 100%;

`

const Content = styled.div`  
    display: flex;
    flex-direction: column;
    height: 200px;
    grid-gap: 0px;
`


const Wrap = styled.div`
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
` 
export default Movies;