import React from "react";
import {
  TitleWrapper,
  HeadingWrapper,
  DescWrapper,
  ButtonWrapper
} from "../UI/Typograpghy/style";
import { CardWrapper, CardHeader, CardToolBar } from "../UI/cards/style";
import {
  RightNavWrapper,
  NewsWrapper,
  NewsImageWrapper,
  NewsImage,
} from "./style";
import { AiFillRead } from "react-icons/ai";
import { news } from "../../mock-data";

export default function RightNav() {
  return (
    <RightNavWrapper>
      <CardWrapper>
        <CardHeader>
          <TitleWrapper>
            <AiFillRead />
            {` `}Popular
          </TitleWrapper>
          <CardToolBar>
          <ButtonWrapper>View More</ButtonWrapper>
          </CardToolBar>
        </CardHeader>
        {news.map((item) => {
          return (
            <NewsWrapper key={item.id}>
              <NewsImageWrapper>
                <NewsImage src={item.image} alt="news" />
              </NewsImageWrapper>
              <div className="flex-grow-1">
                <HeadingWrapper>{item.heading}</HeadingWrapper>
                <DescWrapper>{item.desc.slice(0, 50) + "...."}</DescWrapper>
              </div>
            </NewsWrapper>
          );
        })}
      </CardWrapper>
    </RightNavWrapper>
  );
}
