import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 320px;
  background-color: #b76cf0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  div.separator {
    width: 100%;
    z-index: 1;
    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 230px;
      position: absolute;
      top: 0;
      background-color: #bd93f9;
    }
  }
  .img-box {
    z-index: 999;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 18rem;
    }
  }
  .resume {
    width: 100%;
    margin: 10px 20px 10px 40px;
    flex-wrap: wrap;
    h3 {
      color: #f1f1f1;
    }
    span {
      color: #f1f1f1;
    }
  }
`
