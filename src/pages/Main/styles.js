import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#e87d7d' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    transition: border 0.25s ease-out;
  }
`;

export const RepoNotFound = styled.span.attrs(props => ({
  error: props.error
}))`
  ${props =>
    props.error &&
    css`
      color: #eee;
      background-color: #e87d7d;
      height: 25px;
      display: inline-flex;
      margin-top: 10px;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      position: absolute;
      align-content: center;
    `}
`;

const rotate = keyframes`
from {
transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.6s;

  &:hover {
    background-color: #73c376;
    transition: ease 0.6s;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 40px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
      margin-right: 20px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      button {
        border-style: none;
        background-color: rgba(0, 0, 0, 0);

        svg {
          width: 20px;
          height: auto;
        }
      }
    }
  }
`;
