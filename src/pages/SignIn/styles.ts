import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
  width: 90%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  div.logo {
    width: 96px;
    margin-bottom: 6.4rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div.separator {
    width: 100%;
    margin-bottom: 2.4rem;

    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      font-size: 2.8rem;
      color: #d3d3de;

      &:before,
      &:after {
        content: '';
        width: 35%;
        height: 1px;
        position: absolute;
        top: 60%;
        transform: translateY(-50%);
        background-color: #d3d3de;
      }

      &:before {
        left: 0;
      }

      &:after {
        right: 0;
      }
    }
  }

  div.link-box {
    width: 100%;
    span {
      display: block;
      text-align: center;
      color: #5c6166;
      font-size: 1.2rem;

      a {
        color: #1e7eef;
        transition: opacity 0.2s;

        &:hover,
        &:active {
          opacity: 0.8;
        }
      }
    }
  }
`

export const Form = styled(Unform)`
  width: 100%;
  margin-bottom: 2.4rem;

  button {
    background-color: #282a36;
    border: none;
    width: 100%;
    border-radius: 4px;
    color: #f0f0f5;
    padding: 1.1rem 0;
    font-size: 2rem;
    font-weight: 500;
  }
`

export const SocialLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font: 300 1.4rem;
    width: 100%;
    height: 40px;
    border-radius: 50px;
    background-color: #fff;
    border: none;
    margin-bottom: 10px;
    color: #999999;
  }

  .facebook {
    color: #3c5a9a;
  }
`
