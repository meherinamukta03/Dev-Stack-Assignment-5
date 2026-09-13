import { use, useState } from "react";
import type IdataType from "../Types/dataType";
import toast, { Toaster } from "react-hot-toast";
import Card from "./Card";



type TechnologyProps={
  DataPromise: Promise<IdataType[]>};

const Technology=({ DataPromise }:TechnologyProps)=>{
 
 
    const CardInfo=use(DataPromise);

  const[selectedStack,setSelectedStack]=useState<IdataType[]>([]);


  // Add technology
  const addToStack=(technology:IdataType)=>{

    const alreadyAdded = selectedStack.find((item)=>item.id === technology.id);

    if (alreadyAdded) {
      return;
    }

    setSelectedStack([...selectedStack,technology]);
    toast.success(`${technology.name} added to your stack!`);
  };
   return (
    <>
      <Toaster />

      <section className="px-5 md:px-10 lg:px-15 py-10">

        {/* Heading */}
        <h1 className="text-5xl font-bold">
          Explore The
          <span className="text-pink-600">
            {" "}Technologies
          </span>
        </h1>

        <p className="text-gray-500 mt-3">
          Pick one technology per category to build your ideal stack
        </p>


        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {/* Technology Cards */}
          <div className="md:col-span-2 lg:col-span-3">

            <Card
              CardInfo={CardInfo}
              selectedStack={selectedStack}
              addToStack={addToStack}
            />

          </div>

            </div>
    </section>
    </>
  );
};

export default Technology;
