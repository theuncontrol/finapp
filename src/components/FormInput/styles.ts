import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  z-index: auto;
  margin-bottom: 1.2rem;
  position: relative;

  input {
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #999999;
    background-color: #dbdbdb;
    border-radius: 4px;
    border: none;
    padding: 0 28px 0 10px;
  }
  label {
    font-size: 16px;
    display: flex;
    text-align: center;
    color: #999999;
    margin-bottom: 10px;
  }

  div.link-box {
    display: block;
  }
`
