import React, { useState, useEffect } from "react";
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
  NewsHeading
} from "./style";
import { AiFillRead } from "react-icons/ai";
import { internalNews } from "../../mock-data";

export default function RightNav() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42fd351281504e8c905ffdc9063ddfbc')
      .then(res => res.json())
      .then(res => {
        setNews(res.articles)
      })
      .catch(err => {
        console.log(err)
      })
    }

    getNews()
  }, [])

  if(!news || news.length == 0){
    return <span>Loading...</span>
  }

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
        {news.slice(0,10).map((item, index) => {
          return (
            <NewsWrapper key={index} href={item.url}>
              <NewsImageWrapper>
                <NewsImage src={item.urlToImage} alt="news" />
              </NewsImageWrapper>
              <div className="flex-grow-1">
                <NewsHeading>{item.title}</NewsHeading>
                {
                  item.description? (
                    <DescWrapper>{item.description.substring(0, 50) + "...."}</DescWrapper>
                  ):null
                }
              </div>
            </NewsWrapper>
          );
        })}
      </CardWrapper>
    </RightNavWrapper>
  );
}
