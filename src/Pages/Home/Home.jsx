import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TourType from "./TourType";
import Overview from "./Overview";
import TourGuides from "./TourGuides";
import TourPackages from "./TourPackages";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Destinize | Home</title>
      </Helmet>
      <Banner></Banner>
      <TourPackages></TourPackages>
      <TourGuides></TourGuides>
      <Overview></Overview>
      <TourType></TourType>
    </>
  );
};

export default Home;
