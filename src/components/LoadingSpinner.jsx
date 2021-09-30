import styled from "styled-components";
import spinnerImage from "../images/spinner.png"

const LoadingSpinner = styled.img`
  content: url(${spinnerImage});
  position: absolute;
  top: 50%;
  left: 50%;
  animation: rotate 1s linear infinite;
  transform: translateZ(0);
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
