import React from "react";
import styled from "styled-components";

import {typeScale} from '../utils';

import {Illustrations, CloseIcon} from "../assets";

import {PrimaryButton} from "./Buttons"

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    position: absolute;
    right: 10px;
    top: 20px;
    padding: 0;
    border: none;
`

export const SignUpModal = () =>{
    return(
        <ModalWrapper>
            <img style={{width: "100%", height: "100%"}} src={Illustrations.SignUp} alt="Sign up for an account" aria-hidden="true"/>
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign Up</SignUpText>
            <PrimaryButton>Sign Up!</PrimaryButton>
            <CloseModalButton aria-label="Close modal">
                <CloseIcon />
            </CloseModalButton>
        </ModalWrapper>
    )
}