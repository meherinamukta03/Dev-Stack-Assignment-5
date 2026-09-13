import { Suspense } from "react";
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Technology from "./Components/TecgnologyCard";





const getData = async () => {
  const res = await fetch("/public/CardData/data.jon");
  const data = await res.json();
  return data;
};

function App() {
   const DataPromise = getData();

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
     <Suspense fallback={<p>Data is loading.....</p>}>
      <Technology DataPromise={DataPromise}></Technology>
      </Suspense>
    </>
  )
}

export default App
