import type IdataType from "../Types/dataType";
import { FaStar } from "react-icons/fa";
type CardProps = {
  CardInfo: IdataType[];
  selectedStack: IdataType[];
  addToStack: (technology: IdataType) => void;
};

const Card = ({CardInfo,selectedStack,addToStack,}: CardProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {CardInfo.map((technology) => {

       const isAdded = !!selectedStack.find(
  (item) => item.id === technology.id);

        return (
          <div
            key={technology.id}
            className={`bg-white rounded-xl shadow-md p-5 border 
              ${isAdded? "border-pink-500 border-2": "border-gray-300"}`}>

            <div className="flex justify-between items-center">
              <img src={technology.icon} alt={technology.name}className="w-12 h-12"/>

              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                {technology.badge}
              </span>

            </div>

            <h2 className="text-xl font-bold mt-4">
              {technology.name}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              {technology.description}
            </p>


            {/* Category + Difficulty + Rating */}
            <div className="flex items-center justify-between mt-5 ">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">
                {technology.category}
              </span>
              <span className="text-sm text-gray-600">
                {technology.difficulty}
              </span>
              <span className="flex items-center gap-1 text-sm">
                   <FaStar className="text-yellow-400" />
                     {technology.rating}
             </span>
            </div>

            {/* Button */}
            <button
              onClick={() => addToStack(technology)}
              disabled={isAdded}
              className={`w-full mt-4 py-2 rounded-lg font-semibold 
              ${isAdded? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-pink-600 text-white hover:bg-pink-700"}`}>

              {isAdded ? "Added to Stack" : "Add to Stack"}
            </button>

          </div>
        );
      })}

    </div>
  );
};

export default Card;