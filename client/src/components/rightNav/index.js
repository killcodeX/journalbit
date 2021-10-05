import React, { useState, useEffect } from "react";
import {
  TitleWrapper,
  HeadingWrapper,
  DescWrapper,
  ButtonWrapper,
} from "../UI/Typograpghy/style";
import { CardWrapper, CardHeader, CardToolBar } from "../UI/cards/style";
import {
  RightNavWrapper,
  NewsWrapper,
  NewsImageWrapper,
  NewsImage,
  NewsHeading,
  SecondWrapper,
  PeopleWrapper,
  ProfileWrapper,
  Profiles,
  ProfileName,
  FollowButton,
} from "./style";
import {
  getJournalUsers,
  getUserfollower,
  getUserunfollower,
} from "../../redux/actions/useractions";
import { getallPost } from "../../redux/actions/postactions";
import { AiFillRead, AiOutlineTeam } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { internalNews } from "../../mock-data";

export default function RightNav() {
  const [news, setNews] = useState([...internalNews]);
  const dispatch = useDispatch();
  const loggedUsers = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.auth.allUser);

  useEffect(() => {
    const getNews = async () => {
      // fetch(
      //   "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42fd351281504e8c905ffdc9063ddfbc"
      // )
      //   .then((res) => res.json())
      //   .then((res) => {
      //     setNews(res.articles);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    };

    getNews();
  }, []);

  const handleFollow = (setting, id) => {
    if (setting == "follow") {
      dispatch(getUserfollower(id));
    } else {
      dispatch(getUserunfollower(id));
    }
    dispatch(getallPost());
  };

  if (!news || news.length == 0) {
    return <span>Loading...</span>;
  }

  return (
    <>
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
          {news.slice(0, 10).map((item, index) => {
            return (
              <NewsWrapper key={index} href={item.url}>
                <NewsImageWrapper>
                  <NewsImage src={item.urlToImage} alt="news" />
                </NewsImageWrapper>
                <div className="flex-grow-1">
                  <NewsHeading>{item.title}</NewsHeading>
                  {item.description ? (
                    <DescWrapper>
                      {item.description.substring(0, 50) + "...."}
                    </DescWrapper>
                  ) : null}
                </div>
              </NewsWrapper>
            );
          })}
        </CardWrapper>
      </RightNavWrapper>
      <SecondWrapper className="mt-4">
        <CardWrapper>
          <CardHeader>
            <TitleWrapper>
              <AiOutlineTeam />
              {` `}Journalers
            </TitleWrapper>
          </CardHeader>

          {allUsers?.length > 0
            ? allUsers.map((user) => {
                if (user._id != loggedUsers._id && user.followers.includes(loggedUsers._id)) {
                  return (
                    <Profiles key={user._id}>
                      <ProfileWrapper>
                        <img src={user.avatar} alt="profile" />
                      </ProfileWrapper>
                      <PeopleWrapper>
                        <ProfileName>
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            to={`profile/${user._id}`}
                          >
                            {user.fname + " " + user.lname}
                          </Link>
                        </ProfileName>
                        {user.followers.includes(loggedUsers._id) ? (
                          <FollowButton
                            onClick={() => handleFollow("unfollow", user._id)}
                          >
                            UnFollow
                          </FollowButton>
                        ) : (
                          <FollowButton
                            onClick={() => handleFollow("follow", user._id)}
                          >
                            Follow
                          </FollowButton>
                        )}
                      </PeopleWrapper>
                    </Profiles>
                  );
                }
              })
            : null}
        </CardWrapper>
      </SecondWrapper>
    </>
  );
}
