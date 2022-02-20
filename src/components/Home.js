import React from 'react'
import styled from 'styled-components'
import '../home.css'

function Home() {
    return (
        <Container>
            <Logo>
                <img class="logo" src="/img/MK.png" alt="logo"></img>
            </Logo>
            <Selfie>
                <img class="selfie" src="/img/selfie.png" alt="selfie"></img>
            </Selfie>
            <ItemText>
                <h1 class="name">Mohammad Khan</h1>
                <h2>Software Engineer</h2>
                <div class="about">
                    <p id="line1">Hi, welcome to my personal portfolio! I am an aspiring </p>
                    <p id="line2">software engineer who has a bachelor's degree in Computer</p>
                    <p id="line3">Science from New Jersey Institute of Technology. I am</p>
                    <p id="line4">passionate about Computer Science and its applications to</p>
                    <p id= "line5">solve real world problems.</p>
                </div>
            </ItemText>
            <AboutMeButton>
                {/* <a href="#">Learn More</a> */}
            </AboutMeButton>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/img/background.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    allign-items: center;
`

const Logo = styled.div`
`
const ItemText = styled.div`
`
const AboutMeButton = styled.div`
    // background-color: blue;
    // height: 40px;
    // width: 256px;
    // color: white;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // border-radius: 100px;
    // opacity: 0.85;
    // margin-bottom: 200px;

`
const Selfie = styled.div`
    .selfie {
        position: absolute;
        width: 500px;
        object-fit: contain;
        bottom: 0;
        right: 0;
    }

`

{/* <p>
                        Hi, welcome to my personal portfolio! I am an aspiring software engineer
                        who has a bachelor's degree in Computer Science from New Jersey Institute of Technology. 
                        I am passionate about Computer Science and its applications to solve real world problems.
                    </p> */}