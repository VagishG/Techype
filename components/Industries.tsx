import { DollarSign, ShoppingCart, Building2, GraduationCap, Heart, Rocket, Home, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
  { icon: <DollarSign className="h-6 w-6 text-blue-600" />, name: "Fintech & Finance" },
  { icon: <ShoppingCart className="h-6 w-6 text-blue-600" />, name: "E-commerce & Fashion" },
  { icon: <Building2 className="h-6 w-6 text-blue-600" />, name: "Hospitality & Travel" },
  { icon: <GraduationCap className="h-6 w-6 text-blue-600" />, name: "E-learning & Education" },
  { icon: <Heart className="h-6 w-6 text-blue-600" />, name: "Healthcare & Fitness" },
  { icon: <Rocket className="h-6 w-6 text-blue-600" />, name: "Startups B2B & B2C" },
  { icon: <Home className="h-6 w-6 text-blue-600" />, name: "Real Estate" },
  { icon: <BarChart className="h-6 w-6 text-blue-600" />, name: "On Demand Solution" },
]

export default function IndustriesWeServe() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white mx-10 sm:mx-28">
      <div className="container px-4 md:px-6">
        <div className="flex-col md:flex-row flex  items-center justify-between space-y-4">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Industries We Serve</h2>
          <p className="max-w-[500px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
            We have a structured work process to ensure that the projects handled can be completed properly and according to your needs.
          </p>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-[#f4f8ff] border-0 px-4 py-8">
              <CardContent className="flex items-center space-x-4 p-4">
                {industry.icon}
                <span className="font-medium">{industry.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}