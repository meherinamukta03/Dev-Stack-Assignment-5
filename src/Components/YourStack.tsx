import type IdataType from "../Types/dataType";

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
 </div>
  );
};

export default YourStack;