import styled from "styled-components";

export const AccountSettingHead = styled.div`
  background-color: #fff;
  padding: 20px;
`;

export const ProfileImageWrapper = styled.div`
  margin-bottom: 1rem;
  margin-right: 1.75rem;
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  border-radius: 0.475rem;
  img {
    flex-shrink: 0;
    display: inline-block;
    border-radius: 0.475rem;
    width: 160px;
    height: 160px;
  }
`;

export const OnlineIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 100%;
  transform: translate(-50%, -50%);
  border: 1px solid #eff2f5;
  width: 20px;
  height: 20px;
  margin-bottom: 1.5rem;
  background-color: #50cd89;
  border-radius: 50%;
  border-width: 3px;
  border-color: #fff;
`;

export const UserName = styled.div`
  font-size: 1.5rem;
  color: #181c32;
  font-weight: 600;
  font-family: "poppins", sans-serif;
  margin-right: 0.25rem;
`;

export const CardTitle = styled.div`
  font-size: 1.2rem;
  color: #181c32;
  font-weight: 500;
  font-family: "poppins", sans-serif;
  padding-bottom: 0.5rem;
`;

// account deactivate

export const AccountWarning = styled.div`
  display: flex;
  border: 1px dashed #ffc700;
  border-radius: 0.475rem;
  padding: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #fff8dd;
`;

export const DeactivateSvg = styled.div`
  color: #ffc700;
  svg {
    height: 2.05rem !important;
    width: 2.05rem !important;
  }
`;

export const WarningTitle = styled.div`
  font-size: 1.15rem;
  font-family: poppins;
  color: #181c32 !important;
`;

export const FormLabel = styled.div`
  line-height: 1.5;
  color: #3f4254;
  font-size: 1.075rem !important;
  font-weight: 500 !important;
  font-family: poppins;
  &:after{
    content: '${props => props.req? '*' : ''}';
    position: relative;
    font-size: inherit;
    color: #f1416c;
    padding-left: .25rem;
    font-weight: 700;
  }
`;


export const DiscardBtn = styled.div`
  padding: .75rem 1.75rem;
  color:#7e8299;
  background-color:#f5f8fa;
  margin-right:10px;
  display:flex;
  align-items:center;
  font-size:16px;
  font-weight:500;
  font-family:poppins;
`;