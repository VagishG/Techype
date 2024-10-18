
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomMarquee from "@/components/CustomMarquee";
import Faq from "@/components/Faq";
import IndustriesWeServe from "@/components/Industries";
import ProcessSection from "@/components/Process";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CustomMarquee />
      <ProcessSection/>
      {/* <div className="bg-gray-900">
        <div>
          <h3>Accelerate your idea. </h3>
          <p>
            You are just one click away from your dream app. Turn your idea into
            a new tech revolution.
          </p>
          <Button>Get Started</Button>
        </div>
        <Image
          src={"accelerate.svg"}
          height={40}
          width={40}
          alt="alt text"
          className="h-full w-full absolute"
        />
      </div> */}
      <IndustriesWeServe/>
      <Faq />
      <Footer />
    </div>
  );
}
