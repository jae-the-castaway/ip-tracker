import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h2>
        {" "}
        This website is a challenge from{" "}
        <a href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub">
          Frontend Mentor
        </a>
      </h2>
      <p>
        {" "}
        connect with me on{" "}
        <a href="https://github.com/jae-the-castaway">
          Github <i className="fa-brands fa-github fa-xl"></i>
        </a>{" "}
      </p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background-color: #1c1d21;
  width: 100vw;
  height: 200px;
  position: relative;
  z-index: 1000;
  top: -220px;
  padding-top: 160px;
  margin: 0;

  h2 {
    color: #c9c9c9;
    font-size: 16px;
    z-index: 1001;
    height: 10px;
    font-weight: 400;
  }

  a {
    color: #f0f0f0;
    font-weight: 600;
    text-decoration: none;
  }

  p {
    padding-top: 20px;
    color: #c9c9c9;
  }

  @media (min-width: 700px) {
    top: -90px;
    padding-top: 100px;
  }
`;
