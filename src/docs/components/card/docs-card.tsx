import React from 'react'
import { styled } from "../../../stitches.config"
import Card from '../../../components/card/Card'

const CardContainer = styled("div", {
    display:'flex',
    justifyContent:'center'
})

const DocsCard = () => {
    return (
        <CardContainer>
        <Card>
       <h2>card-header</h2>
       <p>This is an example of the card text</p>
      </Card>
      </CardContainer>
    )
}

export default DocsCard;