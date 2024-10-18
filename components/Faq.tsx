import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqItems = [
    {
      question: "What services are provided by Techype?",
      answer: "Techype provides a range of services including web development, mobile app development, UI/UX design, and custom software solutions. We specialize in creating innovative digital products tailored to our clients' needs."
    },
    {
      question: "Is there any hidden fee in your pricing model?",
      answer: "No, there are no hidden fees in our pricing model. We believe in transparency and provide detailed quotes upfront. All costs are discussed and agreed upon before the project begins."
    },
    {
      question: "Does Techype offer any discounts to their clients in case of long-term projects and partnerships?",
      answer: "Yes, we do offer discounts for long-term projects and partnerships. The specifics depend on the project scope and duration. We're always happy to discuss custom pricing for ongoing collaborations."
    },
    {
      question: "Can I track the progress of my project?",
      answer: "We provide regular updates and use project management tools that allow clients to track the progress of their projects in real-time. You'll have access to timelines, milestones, and direct communication with our team."
    },
    {
      question: "What are some industries that you provide your services to?",
      answer: "We work with a diverse range of industries including healthcare, finance, education, e-commerce, and technology startups. Our expertise allows us to adapt to various sector-specific requirements."
    },
    {
      question: "I need help with developing a mobile app, how can Techype help me?",
      answer: "Techype can assist you throughout the entire mobile app development process. From initial concept and design to development, testing, and deployment, our team of experienced developers can create both iOS and Android apps using the latest technologies."
    },
    {
      question: "Is my project idea safe with Techype?",
      answer: "Yes, your project idea is completely safe with us. We sign Non-Disclosure Agreements (NDAs) with all our clients to ensure the confidentiality of their ideas and intellectual property."
    }
  ]
  
  export default function Faq() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f8ff]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }