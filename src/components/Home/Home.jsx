import "./Home.css";

function Home({ isMobile }) {
  function getMobile() {
    return (
      <div className="Home">
        <h1 className="Intro White">The Best Way to</h1>
        <h1 className="Intro Blue">Track your Daily Progress</h1>
        <p className="Description">
          UNX Allows you to track all your daily task progress using
          gamification methods and earn rewards for specific coupons
        </p>
        <div className="Try">
          <h1>Try this app</h1>
        </div>
      </div>
    );
  }

  function getWeb() {
    return (
      <div className="Home">
        <h1 className="Intro White">The Best Way to</h1>
        <h1 className="Intro Blue">Track your Daily Progress</h1>
        <p className="Description">
          UNX Allows you to track all your daily task progress using
          gamification methods and earn rewards for specific coupons
        </p>
        <div className="Try">
          <h1>Try this app</h1>
        </div>
      </div>
    );
  }
  return isMobile ? getMobile() : getWeb();
}

export default Home;
