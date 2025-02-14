import styled from "styled-components";

export const SideBarContainer = styled.nav`
box-sizing:border-box;
width: ${(props) => (props.isOpen ? '240px' : '60px')};
min-width: ${(props) => (props.isOpen ? '200px' : '60px')};

background-color:#F6F6F6;
height:100vh;
display:flex;
flex-direction:column;
padding: ${(props) => (props.isOpen ? '5px 1em' : '5px')};
border-right:1px solid #E5E5E5;
position:sticky;
top:0;
align-self:flex-start; 
transition:300ms ease-in-out;
overflow:hidden;
text-wrap:nowrap;


@media(max-width:768px){
    z-index: 9999;
    grid-row: 2;
    top: auto;
    bottom: 0;
width:100%;
padding:5px;
height:auto
}
`
export const NavListContainer = styled.ul`
list-style:none;
@media(max-width:768px){
display:flex;
justify-content:space-evenly;
li:first-child{
display:none}

}

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
 justify-content:flex-end;


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
padding:.85em;
`
export const SideBarItem = styled.p`
display:flex;
gap: ${(props) => (props.isOpen ? '5px' : '20px')};
text-decoration:none;
align-items:center;
font-size:16px;
font-weight:bold;
color:#777777;
cursor:pointer;
width:fit-content;
margin:.85em;
  @media(max-width:768px){
span{
display:none;
}
&
}


// margin-top: ${(props) => (props.lastItem ? 'auto' : '0')};
// margin-bottom: ${(props) => (props.lastItem ? '40px' : '0')};
`

export const ToggleButton = styled.button`
margin-left:auto;
padding:1em;
border:none;
border-radius:.5em;
background:none;
cursor:pointer;
svg{
transform:rotate(${(props) => (props.isOpen ? '0deg' : '180deg')});
transition:transform 150ms ease;
}
&:hover{
  background-color:#E5E5E5;
}


@media(max-width:768px){
display:none;
}


`