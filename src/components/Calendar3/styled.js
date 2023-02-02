import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    border: 1px solid;
    margin: 5px;
`;

export const CalenderHead = styled.div`
    width:100%;
    height:40px;
    display: flex;
    justify-content:space-around;
align-items: center;
    font-size:24px;

`;

export const SevenColGrid = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(7, 1fr);
    height:27px;

`;

export const HeadDay = styled.div`
    text-align: center;
    background: darkkhaki;
    font-size: 1.2rem;

     
`;

export const CalenderBody = styled.div`
    height: calc(100% - 27px - 40px);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;

export const StyledDay = styled.span`
    border: 1px solid;
    text-align: right;
    padding: 5px;
`;