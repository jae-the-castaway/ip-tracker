import styled from "styled-components";

export default function Container({ user, loading, isError }) {
  const { message, ip, city, time_zone, district, zipcode, isp } = user;
  //alert('wrong IP adress or Domain. try again')
  // console.log(user)
  return (
    <>
      <StyledContainer>
        <Flex>
          {loading ? (
            <svg
              id="loading-spinner"
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  id="track"
                  fill="#C6CCD2"
                  d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z"
                />
                <path
                  id="section"
                  fill="#3F4850"
                  d="M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z"
                />
              </g>
            </svg>
          ) : (
            <>
              {isError ? (
                <p>It's not a vaild ip adress. Try again.</p>
              ) : (
                <>
                  <div>
                    <h3>IP ADRESS</h3>
                    <h2>{ip}</h2>
                  </div>
                  <div>
                    <h3>LOCATION</h3>
                    <h2>{city + "," + district + " " + zipcode}</h2>
                  </div>
                  <div>
                    <h3>TIME ZONE</h3>
                    <h2>UTC/GMT {time_zone.offset}</h2>
                  </div>
                  <div>
                    <h3>PROVIDER</h3>
                    <h2>{isp}</h2>
                  </div>
                </>
              )}
            </>
          )}
        </Flex>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  h2 {
    font-size: 16px;
  }

  h3 {
    font-size: 0.7rem;
    letter-spacing: 0.1rem;
    color: hsl(0, 0%, 59%);
  }
`;
const Flex = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin: 30px 5vw;
  background-color: white;
  border-radius: 10px;
  padding: 20px 0;

  & div {
    flex: 1;
    padding: 5px 20px;
    min-width: 100px;
    overflow-wrap: break-word;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    margin: 30px 5vw;
    align-items: baseline;

    & p {
      flex: 1;
    }

    & div {
      padding: 0 20px;
    }

    & div + div {
      border-left: 1px solid hsl(0, 0%, 59%);
    }
  }

  #loading-spinner {
    display: block;
    margin: 0 auto;
    animation: loading-spinner 1s linear infinite;
  }

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
