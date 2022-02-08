import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  .rank {
    text-align: center;
    font-weight: bold;
  }
  .symbol {
    text-align: center;
  }
  .alignRight {
    text-align: right;
  }

  .user {
    background-color: blue;
    color: white;
  }

  // used for the old html table, not needed for the MUI style
  // thead {
  //   background-color: rgb(44, 44, 44);
  //   color: white;
  //   text-align: center;
  // }

  // table {
  //   border-spacing: 0;
  //   border: 1px solid black;

  //   tr {
  //     :last-child {
  //       td {
  //         border-bottom: 0;
  //       }
  //     }
  //   }

  //   th,
  //   td {
  //     margin: 0;
  //     padding: 0.5rem;
  //     border-bottom: 1px solid black;
  //     border-right: 1px solid black;

  //     :last-child {
  //       border-right: 0;
  //     }
  //   }
  // }
`;

export default Styles;
