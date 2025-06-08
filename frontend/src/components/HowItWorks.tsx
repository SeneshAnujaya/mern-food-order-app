
import { Card, CardContent } from "./ui/card";
import { features } from "@/config/how-it-works-content";




const HowItWorks = () => {
  return (
    <div className="py-8 w-full">
        <h1 className="text-[2rem] sm:text-[2.5rem] font-bold font-outfit tracking-tight text-gray-800 text-center">The Easy Way to Eat</h1>
        <p className="text-center text-gray-700 font-normal text-sm sm:text-base">Get your favorite dishes in just a few clicks</p>
        <div className="flex gap-4 flex-wrap mt-12">
             {features.map((feature, idx) => (
        <Card key={idx} className="flex-1 min-w-[250px] bg-[#fff1ee] rounded-2xl border-none shadow-none py-8 px-4">
          <CardContent className="flex flex-col items-start gap-3">
            <div className="bg-[#fdcabf] rounded-full p-2.5 text-mainOrange">
              {<feature.icon />}
            </div>
            <h3 className="text-lg font-outfit font-semibold text-gray-700">{feature.title}</h3>
            <p className="text-sm sm:text-[0.95rem] text-gray-600 font-medium">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
        </div>
    </div>
  )
}

export default HowItWorks