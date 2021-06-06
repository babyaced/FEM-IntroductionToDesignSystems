import styled from "styled-components";
import {defaultTheme, typeScale} from '../utils';

import {applyStyleModifiers} from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,

    large: () =>`
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,

    warning: () => `
        background: none;
        color: ${defaultTheme.status.warningColor};

        &:hover, &:focus {
        background-color: ${defaultTheme.status.warningColorHover};
        outline: 3px solid ${defaultTheme.status.warningColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
    border-color:  ${defaultTheme.status.warningColor};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,

  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};


    &:hover, &:focus {
        background-color: ${defaultTheme.status.errorColorHover};
        outline: 3px solid ${defaultTheme.status.errorColorHover};
        outline-offset: 2px;
        order: 2px solid transparent;
    }

    &:active {
        background-color: ${defaultTheme.status.errorColorActive};
    }
    `,
    primaryButtonError: () => `
        background-color: ${defaultTheme.status.errorColor};
        color: ${defaultTheme.textColorInverted};
        border-color:  ${defaultTheme.status.errorColor};
    `,
    secondaryButtonError: () => `
        border: 2px solid ${defaultTheme.status.errorColor};
    `,

    success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};


    &:hover, &:focus {
        background-color: ${defaultTheme.status.successColorHover};
        outline: 3px solid ${defaultTheme.status.successColorHover};
        outline-offset: 2px;
        order: 2px solid transparent;
    }

    &:active {
        background-color: ${defaultTheme.status.successColorActive};
    }
    `,
    primaryButtonSuccess: () => `
        background-color: ${defaultTheme.status.successColor};
        color: ${defaultTheme.textColorInverted};
        border-color:  ${defaultTheme.status.successColor};
    `,
    secondaryButtonSuccess: () => `
        border: 2px solid ${defaultTheme.status.successColor};
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
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus{
        outline: 3px solid ${defaultTheme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active{
        background-color: ${defaultTheme.primaryColorActive};
        border-color:  ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColorOnPrimary};
    }


`;

const PrimaryButton = styled(Button)`
    border: 2px solid ${defaultTheme.primaryColor};
    background-color: ${defaultTheme.primaryColor};
    color: white;

    &:disabled{
        border-color: ${defaultTheme.disabled};
        background-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    border: 2px solid ${defaultTheme.primaryColor};
    background: none;
    color: ${defaultTheme.primaryColor};

    &:disabled{
        background: none;
        color: ${defaultTheme.disabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    border: none;
    background: none;
    color: ${defaultTheme.primaryColor};

    &:hover{
        border: 2px solid ${defaultTheme.primaryColor};
    }

    &:disabled{
        background: none;
        color: ${defaultTheme.disabled};
        border: none;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;