import styled from "styled-components";

const Btn = styled.button`
  width: 300px;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  background: linear-gradient(
    -45deg,
    #ffa63d,
    #ff3d77,
    #338aff,
    rgba(60, 240, 197, 0.22)
  );
  background-size: 600%;
  -webkit-animation: anime 3s linear infinite;
  animation: anime 3s linear infinite;
  @-webkit-keyframes anime {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  @keyframes anime {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

const DemoButtonDiv = (props) => {
  return <Btn>{props.text}</Btn>;
};
export default DemoButtonDiv;
