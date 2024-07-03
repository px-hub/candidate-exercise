import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 320px;
  border-radius: 22px;
  background-color: #4f46e5;
`;

const Home = () => {
  return (
    <>
      <div className="row flex-column mb-16">
        <h1 className="bold">
          Building Engagement & Autonomy <br></br> through People Experience
        </h1>
        <p className="mt-8 col-md-6 col-xs-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus totam itaque incidunt magni cum error soluta, quod, sequi fugiat fuga quo, odit sunt hic facilis provident saepe corporis nulla neque?</p>
      </div>
      <StyledHeader />
      <div className="row center-xs mt-16 mb-16">
        <h4 className="bold">Read more</h4>
      </div>
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <StyledHeader />
        </div>
        <div className="col-md-4 col-xs-12">
          <StyledHeader />
        </div>
        <div className="col-md-4 col-xs-12">
          <StyledHeader />
        </div>
        <StyledHeader className="mt-16" />
      </div>
    </>
  );
};

export default Home;
