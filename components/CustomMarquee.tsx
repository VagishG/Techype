"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

const logos = [
  { src: "brands/1.svg", alt: "PrepInsta" },
  { src: "brands/2.svg", alt: "projectHERO" },
  { src: "brands/3.svg", alt: "Simplified" },
  { src: "brands/4.svg", alt: "Palo Alto Staffing" },
  { src: "brands/5.svg", alt: "prosp" },
]

export default function CustomMarquee() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <h2 className="text-center text-xl  mb-8 text-gray-500">
        Trusted by leading brands and startups
      </h2>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="mx-14 flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} width={150} height={100} className="max-w-[200px] h-auto" />
            </div>
          ))}
        </div>
        {/* <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="mx-14 flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} width={200} height={100} className="max-w-[200px] h-auto" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}