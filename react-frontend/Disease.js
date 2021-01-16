import React from 'react';

import styled from 'styled-components';

const Wrapp = styled.div`

    background: white;
    border-radius: 20px;
    width: 80%;
    height: 80%;
    min-height: 600px;
    margin: 0 auto;
    margin-top: 100px;
    padding-top: 25px;
    `;

const Title = styled.p`

    font-size: 60px;
    margin-top: 5px;
    margin-bottom: 5px;

    `;

const Para = styled.p`

    font-size 25px;
    margin:80px;
    line-height:1.8;

    `;
const Para2 = styled.p`

    font-size 32px;
    line-height:1;

    `;

class Disease extends React.Component {

    


    render() {


        return <Wrapp>

        <Para2>We think you might have</Para2>
        <Title>{this.props.name}</Title>
        <Para>{this.props.desc}</Para>

        </Wrapp>;
    }

}

export default Disease;