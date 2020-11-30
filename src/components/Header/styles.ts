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
    flex-direction: row;
    flex: 1 1 200px;
    h3 {
      color: #f1f1f1;
    }
    span {
      color: #f1f1f1;
    }
    button {
      width: 150px;
      height: 30px;
      background-color: #5f347f;
      border: none;
      border-radius: 10px;
      color: white;
      font-size: 16px;
    }
  }
`
