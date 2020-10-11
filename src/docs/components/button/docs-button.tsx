import React from 'react'
import { styled } from "../../../stitches.config"
import Button from '../../../components/button/Button'

const ButtonContainer = styled("div", {
    display:'flex',
    justifyContent:'center'
})

const DocsButton = () => {
    return (
        <ButtonContainer>
        <Button color="violet">Example</Button>
        <Button color="gray">Example</Button>
        </ButtonContainer>
    )
}

export default DocsButton
