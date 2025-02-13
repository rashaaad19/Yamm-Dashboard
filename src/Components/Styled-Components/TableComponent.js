import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: white;
  padding: 1rem;
  color: #323232;
  border-collapse: collapse;
  caption,
  th,
  td {
    padding: 1rem;
  }
  td {
    font-weight: 600;
    img{
    width:2rem;
    }
  }
  th {
    font-weight: 700;
  }
  caption {
    text-align: left;
    background-color: ##ffffffab;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color:#363636;
  }
  th {
    background-color: #9797971c;
    text-align: start;
    color: #363636;
    border-color:transparent;
  }
  tr {
    background-color: white;
    // border-bottom:1px solid #e5e5e5;
    border-bottom:  1px solid #e5e5e5

  }
 
  @media (max-width: 650px) {
    th {
      display: none;
    }
    td {
      display: grid;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
    }
    td:first-child {
      padding-top: 2rem;
    }
    td:last-child {
      padding-bottom: 2rem;
    }
    td::before {
      font-weight: 700;
      text-transform: capitalize;
    }
    
    //override content before the loading spinner
    #loadingCell::before{
      content:none
    }

    
    td:nth-of-type(1)::before {
      content: "ID";
    }
    td:nth-of-type(2)::before {
      content: "first name";
    }
    td:nth-of-type(3)::before {
      content: "last name";
    }
    td:nth-of-type(4)::before {
      content: "email";
    }
    td:nth-of-type(5)::before {
      content: "salary";
    }
    td:nth-of-type(6)::before {
      content: "date";
    }
    td:nth-of-type(7)::before {
      content: "actions";
    }
  }
`;