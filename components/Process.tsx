import { FileText, Users, ArrowUp } from "lucide-react"

const processSteps = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Share requirements",
    description: "How do you wish your product to look like? Share your requirements and trust us to develop a product that goes above and beyond your expectations."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Discussing Details",
    description: "As a leading AI software development company, we carefully analyze all your requirements and share an estimate of product timeline and commercial details. Once you approve the collaboration, we ensure to assign the perfect team to develop a perfect product."
  },
  {
    icon: <ArrowUp className="h-6 w-6" />,
    title: "Start Building",
    description: "Time to prove to you why we are considered the best AI software development company in the industry, as we bring your ideas to life."
  }
]

export default function ProcessSection() {
  return (
    <section className="mx-10 sm:mx-28 py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-4 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process!</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">The Journey of Your Ideas</p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-3 md:gap-0">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-start space-y-4  relative px-4 ">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-justify">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1 border-r-2 border-dashed border-gray-300" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}