import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const StoryCard = ({ story }) => {
  const { title, author, date, image, _id } = story;
  return (
    <div className="max-w-md m-4 mx-auto overflow-hidden bg-white shadow-md rounded-xl">
      <Link to={`/storyDetails/${_id}`}>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="object-cover w-full h-48 md:w-48"
              src={image}
              alt="Story Thumbnail"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              {date
                ? new Date(date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </div>
            <p className="mt-2 text-xl font-medium text-gray-600">{title}</p>
            <div className="mt-4">
              <span className="text-gray-400">By {author}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
StoryCard.propTypes = {
  story: PropTypes.object,
};
export default StoryCard;
