"use client"
import Image from "next/image";
import {dummy_images} from "@/data/images"
import {useGetUser} from "@/app/zustand/store"

// massonry 
export default function Home() {
  
  const userProfile = useGetUser((state: any)=>  state.getprofile())
  const userData = useGetUser((state:any) => state)
  console.log(userProfile.then((data: any)=>console.log(data, "Data")))
  console.log(userData, " = userData")
  return (
   <main className="w-full  py-4 min-h-screen">
    <div className="masonry-container">

     {
      dummy_images.map((data_url, index)=>{

        return (
           <div key={index} className="masonry-item  shadow-lg   cursor-pointer  rounded-lg overflow-hidden  ">
        <img src={`${data_url}`} alt={`${index}`} className="object-cover h-auto w-full" />
      </div>
        )
      })
     }

    </div>
   </main>
  );
}
