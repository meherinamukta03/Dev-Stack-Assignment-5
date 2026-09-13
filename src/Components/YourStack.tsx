import type IdataType from "../Types/dataType";
import { RxCross2 } from "react-icons/rx";

type YourStackProps = {
  selectedStack: IdataType[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
};

const YourStack = ({selectedStack,removeFromStack,removeAll,}: YourStackProps) => {
  return (
   <div className="bg-white border rounded-xl shadow-md p-5">

      <div >
        <h2 className="text-xl font-bold">
           Your Stack
        </h2>

     
        {selectedStack.length !== 0  &&
        <span className="text-pink-600 text-sm">
          {selectedStack.length} Technology Selected
        </span>}
    
    {  selectedStack.length === 0 && <span className="text-pink-600 text-sm">
        No Technology Selected Yet
        </span>}
      </div>
      
      {/* Empty Stack */}
      {selectedStack.length === 0 ? (
        
        <div className="text-center py-10">
          <p className="text-gray-400 border-2 border-dashed border-gray-500 p-1 px-5 py-6 rounded-lg">
            Your Stack is empty
          </p>
        </div>) : (
        <div className="mt-5">
          <div className="space-y-3">

            {selectedStack.map((technology) => (

              <div
                key={technology.id}
                className="border rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={technology.icon} alt={technology.name}className="w-8 h-8"/>
                <div>

                <h3 className="font-semibold text-sm">
                      {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                      {technology.category}
                </p>

                  </div>

                </div>


          {/* Remove Button */}
                <button
                  onClick={() =>
                    removeFromStack(technology.id)
                  }
                  className="text-red-500 font-bold text-lg"
                >
                  <RxCross2 />
                </button>

              </div>


            ))}

          </div>
         


      
        <button
            onClick={removeAll}
            className="w-full mt-5 border border-red-400 text-red-500 py-2 rounded-lg hover:bg-red-50"
          >
            Remove All
          </button>
 </div>

      )}
</div>
  );
};

export default YourStack;