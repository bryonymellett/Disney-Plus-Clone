import reactRouterDom from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "./Firebase.js/firebase";

function Detail() {

  const {id} = useParams();
  const [State, setState] = useState();
  useEffect(() => {
    db.collection("Movies").doc(id).get().then((doc)=>{
      if(doc.exists){
        setState(doc.data());
      }else{
        console.log("404!");
      }
    })
  }, [id])

  

  return (
    <>

    {
      State && (
        <>
        <Container>
          <Background>
            <img src={State.BackgroundImg}/>
          </Background>

          <ImageTitle>
            <img src={State.TitleImg}/>
          </ImageTitle>
              
            <ContentMeta>
              <Controls>
                <Player>
                  <img src="../img/images/play-icon-black.png" alt="" />
                  <span>Play</span>
                </Player>
                <Trailer>
                  <img src="../img/images/play-icon-white.png" alt="" />
                  <span>Trailer</span>
                </Trailer>
                <AddList>
                  <span />
                  <span />
                </AddList>
                <GroupWatch>
                  <div>
                    <img src="../img/images/group-icon.png" />
                  </div>
                </GroupWatch>
              </Controls>

              <SubTitle><span>{State.Genres}</span></SubTitle>

              <Description><span>{State.Description}</span></Description>
            </ContentMeta>

    </Container>
      </>
      )
    }

  </>
      );
  };


const Container = styled.div`
  position: relative;
  min-height: calc(100vh-90px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding-left: calc(3.5vw + 5px);
  padding-bottom: 5vh;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  overflow: hidden;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    overflow: hidden;


  }
`;

const ImageTitle = styled.div`
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 0 0rem 0;
  padding: 0
  height: 30vw;
  min-height: 40vh;
  width: 100%;
  
  img {
    max-width: 600px;
    min-width: 200px;
    width: 40vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 40vw;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 0px 0 30px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
span {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.4rem;
  box-shadow: 0px 0px 11px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}


  color: rgb(249, 249, 249);
  font-size: 17px;
  font-family: Roboto;
  min-height: 20px;
  padding: 0 0 2.5rem 0;
  
}

`;

const Description = styled.div`
  line-height: 1.6;
  font-size: 20px;
  font-family: "Roboto";
  color: rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.4rem;
  box-shadow: 0px 0px 11px 7px rgba(0, 0, 0, 0.2);
  border-radius: 7.5px;
`;


export default Detail;