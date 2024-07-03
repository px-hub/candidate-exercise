import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 320px;
  border-radius: 22px;
  background-color: #4f46e5;
`;

/*
Create and style blog cards to select which post to view
*/

const Posts = () => {
  return (
    <>
      <div className="row flex-column mb-16">
        <h1 className="bold">All blog posts</h1>
      </div>
      <div className="row flex-column g-24">
        <StyledHeader />
        <StyledHeader />
        <StyledHeader />
      </div>
      <div className="row center-xs mt-16 pb-24">
        <h5 className="bold">Read more</h5>
      </div>
    </>
  );
};

export default Posts;
