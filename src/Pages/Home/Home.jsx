import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TourType from "./TourType";
import Overview from "./Overview";
import TourGuides from "./TourGuides";
import TourPackages from "./TourPackages";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Destinize | Home</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <p className="text-xl">Overview</p>
            </Tab>
            <Tab>
              <p className="text-xl">Our Packages</p>
            </Tab>
            <Tab>
              <p className="text-xl">Meet Our Tour Guides</p>
            </Tab>
          </TabList>

          <TabPanel>
            <Overview></Overview>
          </TabPanel>
          <TabPanel>
            <TourPackages></TourPackages>
          </TabPanel>
          <TabPanel>
            <TourGuides></TourGuides>
          </TabPanel>
        </Tabs>
      </div>
      <TourType></TourType>
    </>
  );
};

export default Home;
