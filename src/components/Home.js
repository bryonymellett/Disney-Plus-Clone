import styled from "styled-components";
import React, { useEffect } from "react";
import db from "./Firebase.js/firebase";
import { createDispatchHook, useDispatch } from "react-redux";
import { setDisneyMovies } from "./Redux/Reducer/MovieSlice";
import ImgSlider from "./Home/ImgSlider";
import Viewers from "./Home/Viewers";
import Movies from "./Home/Movies";
import Popular from "./Home/Popular";
import Hollywood from "./Home/Hollywood";
import NewTo from './Home/NewTo';
import Kids from './Home/Kids';
import Original from './Home/Original';
import Trending from './Home/Trending';


    
export default function Home() {
const dispatch = useDispatch();
    let populars = [];
    let newTos =[];
    let kidsTvs = [];
    let hollywoods = [];
    let originals = [];
    let trendings = [];




  useEffect(() => {

    db.collection("Movies").onSnapshot((snapshot) => {
        //console.log(snapshot)
        snapshot.docs.map((doc) =>{
           // console.log(doc.data().type) {
            switch (doc.data().type) {
                case "popular":
                    populars = [...populars, {id: doc.id, ...doc.data()}];

                    break;
                case "newTo":
                        newTos = [...newTos, {id: doc.id, ...doc.data()}];
    
                    break;
                case "kidsTv":
                        kidsTvs = [...kidsTvs, {id: doc.id, ...doc.data()}];
    
                        break;
                case "original":
                        originals = [...originals, {id: doc.id, ...doc.data()}];
        
                        break;
                case "trending":
                       trendings = [...trendings, {id: doc.id, ...doc.data()}];
            
                         break;
                case "hollywood":
                       hollywoods = [...hollywoods, {id: doc.id, ...doc.data()}];
                      
                       break;                           

                default:
                    break;
            }
        });

        dispatch(
            setDisneyMovies({
            popular: populars,
            newTo: newTos,
            kidsTv: kidsTvs,
            hollywood: hollywoods,
            original: originals,
            trending: trendings,
        }));

    })

  }, [])

      return (
          <>
        <Container>
            <ImgSlider />
           <>
           <Viewers />
           <Popular />
           <NewTo />
           <Kids />
           <Hollywood />      
           <Original />   
           <Trending />  
           </>

        </Container>

   
        </>
    )
}



const Container = styled.main`
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-X: hidden;
    display: block;

    &:before {
        background: url("/img/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

    }
    
`

