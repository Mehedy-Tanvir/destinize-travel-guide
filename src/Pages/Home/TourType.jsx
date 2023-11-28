import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Link } from "react-router-dom";

const TourType = () => {
  const tourTypes = [
    {
      name: "Cultural",
      logo: "/cultural.png",
    },
    {
      name: "Adventure",
      logo: "/adventurer.png",
    },
    {
      name: "Wildlife",
      logo: "/wildlife.png",
    },
    {
      name: "Historical",
      logo: "/historical.png",
    },
    {
      name: "Beach",
      logo: "/beach.png",
    },
    {
      name: "City",
      logo: "/city.png",
    },
    {
      name: "Cruise",
      logo: "/cruise.png",
    },
    {
      name: "Festival",
      logo: "/festival.png",
    },
    {
      name: "Food",
      logo: "/food.png",
    },
    {
      name: "Photography",
      logo: "/photography.png",
    },
  ];
  return (
    <div className="mb-10">
      <h1 className="text-3xl mt-[100px] font-semibold text-center font-volkhov mb-10">
        Tour <span className="text-[#4475F2]">Types</span>
      </h1>
      <div>
        <Flicking
          align="prev"
          circular={true}
          onMoveEnd={(e) => {
            console.log(e);
          }}
        >
          {tourTypes.map((tourType, idx) => (
            <Link to={`/allPackages/${tourType.name}`} key={idx}>
              <div className="panel mr-5 h-[300px] border-2 border-blue-500 flex flex-col justify-center items-center gap-10 w-[300px] rounded-xl shadow-lg">
                <img
                  className="w-[100px] h-[100px] rounded-[50%]"
                  src={tourType.logo}
                  alt=""
                />
                <h1 className="text-2xl font-medium">{tourType.name}</h1>
              </div>
            </Link>
          ))}
        </Flicking>
      </div>
    </div>
  );
};

export default TourType;
