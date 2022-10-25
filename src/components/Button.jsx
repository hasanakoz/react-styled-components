import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink; */
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  /* color: white; */
  /* color: ${(props) => (props.primary ? "purple" : "white")}; */
  color: ${({ primary }) => (primary ? "purple" : "white")};
  cursor: pointer;
  width: 7.5rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
`;

export const TomatoButton = styled(Button)`
  background-color: ${({ primary }) => (primary ? "white" : "tomato")};

  color: ${({ primary }) => (primary ? "tomato" : "white")};

  border-color: tomato;
`;
