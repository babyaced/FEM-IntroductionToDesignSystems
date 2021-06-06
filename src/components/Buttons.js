import styled from "styled-components";
import {typeScale} from '../utils';

import {applyStyleModifiers} from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: ({props}) => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,

    large: ({props}) =>`
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,

    warning: ({props}) => `
        background: none;
        color: ${props => props.theme.status.warningColor};

        &:hover, &:focus {
        background-color: ${props => props.theme.status.warningColorHover};
        outline: 3px solid ${props => props.theme.status.warningColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
    }

    &:active {
      background-color: ${props => props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({props}) => `
    background-color: ${props => props.theme.status.warningColor};
    color: ${props => props.theme.textColorInverted};
    border-color:  ${props => props.theme.status.warningColor};
  `,
  secondaryButtonWarning: ({props}) => `
    border: 2px solid ${props => props.theme.status.warningColor};
  `,

  error: ({props}) => `
    background: none;
    color: ${props => props.theme.status.errorColor};


    &:hover, &:focus {
        background-color: ${props => props.theme.status.errorColorHover};
        outline: 3px solid ${props => props.theme.status.errorColorHover};
        outline-offset: 2px;
        order: 2px solid transparent;
    }

    &:active {
        background-color: ${props => props.theme.status.errorColorActive};
    }
    `,
    primaryButtonError: ({props}) => `
        background-color: ${props => props.theme.status.errorColor};
        color: ${props => props.theme.textColorInverted};
        border-color:  ${props => props.theme.status.errorColor};
    `,
    secondaryButtonError: ({props}) => `
        border: 2px solid ${props => props.theme.status.errorColor};
    `,

    success: ({props}) => `
    background: none;
    color: ${props => props.theme.status.successColor};


    &:hover, &:focus {
        background-color: ${props => props.theme.status.successColorHover};
        outline: 3px solid ${props => props.theme.status.successColorHover};
        outline-offset: 2px;
        order: 2px solid transparent;
    }

    &:active {
        background-color: ${props => props.theme.status.successColorActive};
    }
    `,
    primaryButtonSuccess: ({props}) => `
        background-color: ${props => props.theme.status.successColor};
        color: ${props => props.theme.textColorInverted};
        border-color:  ${props => props.theme.status.successColor};
    `,
    secondaryButtonSuccess: ({props}) => `
        border: 2px solid ${props => props.theme.status.successColor};
    `
}



const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family:"Khula", sans-serif;
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover{
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus{
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active{
        background-color: ${props => props.theme.primaryColorActive};
        border-color:  ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColorOnPrimary};
    }


`;

export const PrimaryButton = styled(Button)`
    border: 2px solid ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorOnPrimary};

    &:disabled{
        border-color: ${props => props.theme.disabled};
        background-color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    border: 2px solid ${props => props.theme.primaryColor};
    background: none;
    color: ${props => props.theme.primaryColor};

    &:disabled{
        background: none;
        color: ${props => props.theme.disabled};
        border-color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    border: none;
    background: none;
    color: ${props => props.theme.primaryColor};

    &:hover{
        border: 2px solid ${props => props.theme.primaryColor};
    }

    &:disabled{
        background: none;
        color: ${props => props.theme.disabled};
        border: none;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;