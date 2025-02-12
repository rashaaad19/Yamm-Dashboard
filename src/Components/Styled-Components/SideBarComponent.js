import styled from "styled-components";

export const SideBarContainer = styled.div`
width:20%;
background-color:#F6F6F6;
height:100vh;
display:flex;
flex-direction:column;
`
export const SideBarHeader = styled.div`
padding-top:20px;
color:#130532;
font-size:1.5rem;
font-weight:bold;
text-align:center;
display:flex;
align-items:center;
 gap:10px;
 justify-content:center;
 font-family:math;

`
export const SideBarHeaderIcon = styled.div`
  display: flex; /* Make this a flex container */
  align-items: center; /* Vertically center the SVG */
  justify-content: center; /* Horizontally center the SVG */

`;
export const SideBarsubHeader = styled.p`

font-size:10px;
color:#545454;
text-transform:uppercase;
padding-left:36px;
padding-top:10px
`
export const SideBarItem = styled.p`
display:flex;
gap:5px;
align-items:center;
font-size:16px;
font-weight:bold;
color:#777777;
margin-left:38px;
margin-top:15px;
cursor:pointer;
width:fit-content;

margin-top: ${(props) => (props.$lastItem ? 'auto' : 'none')};
margin-bottom: ${(props) => (props.$lastItem ? '40px' : 'none')};
`

// margin-top: auto;
// margin-bottom: 25px;