import styled from "styled-components"
import { themeGet } from "styled-system"

const ScrollUpButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: ${themeGet("colors.primary", "#D10068")};
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transition: 0.15s ease-in-out;
  @media (max-width: 767px) {
    display: none;
  }
  &:hover {
    background-color: ${themeGet("colors.primaryHover", "#D10068")};
  }
`

export default ScrollUpButtonWrapper
