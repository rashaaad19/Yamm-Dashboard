import styled from "styled-components"

export const SearchContainer = styled.div`
display:flex;
min-width:250px;
padding-top:10px;
svg{
position: relative;
color: #888;
right: 25px;
top: 3px;

}
`
export const SearchInput = styled.input`
    width: 100%;
     padding: 0.5rem;
     margin-left:1rem;
     border: 1px solid gray;
    border-radius: 0.5rem;
    outline: none;
    margin-bottom:1.5em;
    outline: 0;


    &::placeholder {
        color:#888;
    }
    &:focus {
        border: 1px solid #130532;
    }
    @media (max-width: 650px) {
    
        width: 100%;
    }
`;

