import Link from "next/link"
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[url('/Footer.svg')] bg-cover bg-center bg-no-repeat text-white px-10 sm:px-28">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Techype</h2>
            <p className="mb-4 text-sm">
              Techype was built with all types of businesses & entrepreneurs in mind. Contact us with your requirements using this form for more.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              {["Portfolio", "About Us", "Contact us", "Career", "Blogs", "Terms & Condition", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Expertise</h3>
            <ul className="space-y-2 text-sm">
              {["Generative-AI-development", "MVP-development", "Mobile App Development", "SaaS Development", "Custom Software Development", "UI/UX design", "Hybrid Teams"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+919289034933" className="hover:underline">+919289034933</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:business@techype.in" className="hover:underline">business@techype.in</a>
              </li>
            </ul>
            <h4 className="mb-2 mt-4 font-semibold">India Office</h4>
            <p className="text-sm">Plot no. 100C, Sector 4, Vaishali Ghaziabad, uttar pardesh 201012</p>
            <h4 className="mb-2 mt-4 font-semibold">USA Office</h4>
            <p className="text-sm">440 N Barranca Ave #7914, Covina, CA 91723, USA</p>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-600 pt-8 md:flex-row">
          <p className="mb-4 text-sm md:mb-0">© Techype Technology Ltd 2024-present. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-blue-400">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}