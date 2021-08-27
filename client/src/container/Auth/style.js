import styled from "styled-components";

export const LogoWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 85px;
  color: balck;
  padding-top: 25px;

  @media(max-width:480px){
    font-size: 65px;
    padding-top:0;
  }
`;

export const Title = styled.h2`
  font-family: poppins;
  font-size: 25px;
`;

export const SubTitle = styled.div`
  font-family: poppins;
  font-size: 16px;
  color: #b5b5c3;
`;

export const FormWrapper = styled.div`
  padding-top: 30px;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 47px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
  border: none;
  background-color: #0095e8;
  transition: all 0.2s ease 0s;
`;

export const AuthFooter = styled.div`
  padding-top: 30px;
`;

export const AuthPrivacy = styled.div`
  padding-bottom: 20px;
  color: #b5b5c3;
`;

export const InfoWrapper = styled.div`
  
`;

export const InfoVector = styled.img`
  width: 80%;
`;

export const MotoWrapper = styled.h1`
  font-family: poppins;
  font-size: 20px;
  color: black;
  padding-top:30px;
  width:400px;
  margin:0 auto;
  font-weight:300;

  @media(max-width:480px){
    width:335px;
    padding-bottom: 20px;
  }
`;
