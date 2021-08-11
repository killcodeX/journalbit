import styled from "styled-components";

export const PostWrapper = styled.div`
  height: 100%;
  width: 95%;
  padding: 20px;
  margin: 0 auto;
`;

export const ProfileWrapper = styled.div`
  width: 55px;
  height: 55px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0.25rem 0;
  width: 85%;
`;

export const InputIconWrapper = styled.div`
  position: absolute;
  left: 8px;
  color: red;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const InputBar = styled.input`
  background-color: #f5f8fa;
  border-color: #f5f8fa;
  color: #5e6278;
  width: 100%;
  height: 50px;
  transition: color 0.2s ease, background-color 0.2s ease;
  padding-left: 3.25rem !important;
  padding-top: 0.55rem;
  padding-bottom: 0.55rem;
  font-size: 0.925rem;
  border: 1px solid #e4e6ef;
  appearance: none;
  border-radius: 0.475rem;
  display: block;
  font-weight: 500;
  line-height: 1.5;

  &:focus {
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  position: absolute;
  right: 0px;
`;

export const SelectBar = styled.select`
  padding-left: 2.25rem !important;
  padding-top: 0.55rem;
  padding-bottom: 0.55rem;
  font-size: 0.925rem;
  border: 1px solid #e4e6ef;
  background-color: #f5f8fa;
  border-color: #f5f8fa;
  border: 1px solid #e4e6ef;
  border-top-right-radius: 0.475rem;
  border-bottom-right-radius: 0.475rem;
  color: #5e6278;
  height: 50px;
  &:focus {
    outline: none;
  }
`;