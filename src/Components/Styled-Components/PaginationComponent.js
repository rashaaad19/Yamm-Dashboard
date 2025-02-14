import styled from "styled-components";

export const PaginationComponent = styled.div`
    display:flex;
    justify-content:center;
    gap:8px;
    margin-top:20px;
`
export const PaginaitonButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
&:hover{
  background-color: #f0f0f0;
}
  &:disabled{
    background-color: #e0e0e0;
  cursor: not-allowed;
  }
`
export const PaginationSpan = styled.span`
padding: 8px 12px;`