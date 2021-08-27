import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.nav`
  background-color: white;
  padding: 20px;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 30px;
  color:#181C32;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 50px;

  @media(max-width:480px){
    margin-right:0;
  }
`;

export const NotificationWrapper = styled.div`
  padding-right: 30px;
  color: #1778f2;
  font-size: 25px;
  position: relative;
`;

const pulse = keyframes`0% {
    opacity: 0.5;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }`;

export const PulseWrapper = styled.span`
  position: absolute;
  top: 3px;
  left: 13px;
  z-index: 1;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  animation: ${pulse} 1.75s ease-out infinite;
`;

export const ProfileWrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
