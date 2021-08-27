import styled from "styled-components";

export const PostWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  z-index: 0;
  height: 100%;
  width: 95%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 130px;
  margin-bottom:100px;
  margin: 0 auto;

  @media(max-width:480px){
    width:100%;
    left: 0;
  }
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

  @media(max-width:480px){
    width: 45px;
    height: 45px;
    margin-right:10px;
  }
`;

// export const InputWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
//   margin: 0.25rem 0;
//   width: 80%;
// `;

export const InputIconWrapper = styled.div`
  position: absolute;
  top:13px;
  left: 13px;
  color: red;
  svg {
    width: 25px;
    height: 25px;
  }
`;

// export const InputBar = styled.input`
//   background-color: #f5f8fa;
//   border-color: #f5f8fa;
//   color: #5e6278;
//   width: 100%;
//   height: 50px;
//   transition: color 0.2s ease, background-color 0.2s ease;
//   padding-left: 3.25rem !important;
//   padding-top: 0.55rem;
//   padding-bottom: 0.55rem;
//   font-size: 0.925rem;
//   border: 1px solid #e4e6ef;
//   appearance: none;
//   border-radius: 0.475rem;
//   display: block;
//   font-weight: 500;
//   line-height: 1.5;

//   &:focus {
//     outline: none;
//   }
// `;

// export const SelectBar = styled.select`

// `;

export const PostDown = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostButton = styled.button`
  padding: 0.25rem 1.55rem !important;
  height: 40px;
  color: #fff;
  border-color: #009ef7;
  background-color: #009ef7;
  box-shadow: none !important;
  font-size: 0.925rem;
  border-radius: 0.475rem;
`;
