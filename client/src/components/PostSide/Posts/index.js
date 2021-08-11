import React from "react";
import Microlink from "@microlink/react";
import { CardWrapper, CardToolBar } from "../../UI/cards/style";
import styled from 'styled-components'

const MyCustomCard = styled(Microlink)`
  width: 10%;
  height:700px !important;
  `

export default function Post({url}) {
  return (
    <CardWrapper className="mt-4">
      <MyCustomCard url={url} />
    </CardWrapper>
  );
}
