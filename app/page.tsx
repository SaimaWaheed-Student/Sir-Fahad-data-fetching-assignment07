import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import CustomButton from "./Compoenent/customButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen  bg-black  rounded flex justify-center items-center">
    
    <Card className="w-full py-12 max-w-lg shadow-lg rounded-lg border border-yellow-200 bg-gradient-to-br from-white via-yellow-400 to-gray-50">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold text-gray-800">
          Click Here
        </CardTitle>
        <CardDescription className="text-md text-gray-600">
          Data Fetching
        </CardDescription>
      </CardHeader> 

      <CardContent className="flex flex-col">
       
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <Link href={"/client-data-fetch"}>
            <CustomButton
              button="Client-Side Data Fetching"
            /></Link>
            <Link href={"/server-data-fetch"}>
            <CustomButton
              button="Server-Side Data Fetching"
              /></Link>
            
          </div>
        
      </CardContent>
    </Card>
  
  </div>
  );
}
