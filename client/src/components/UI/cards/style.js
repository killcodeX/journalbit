import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #eff2f5;
  border-radius: 0.475rem;
  box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
  height:auto;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 20px;
  padding-bottom: 1.25rem;
`;

export const CardToolBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  flex-wrap: wrap;
`;
