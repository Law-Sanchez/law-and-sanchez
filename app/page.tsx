import Features06Page from "@/components/features/features";
import Footer05Page from "@/components/footer/footer";
import Hero07 from "@/components/hero/hero";
import { TextReveal } from "@/components/magicui/custom-text-reveal";
import { VideoText } from "@/components/magicui/video-text";
import Navbar04Page from "@/components/navbar/navbar";
import Testimonial04 from "@/components/testimonial/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar04Page />
      <TextReveal videoSrc="/images/hero/cars.mp4">
        L&S Automotives: Redefining Your Drive
      </TextReveal>
      {/* <div className="relative h-[200px] w-full overflow-hidden">
        <VideoText src="https://cdn.magicui.design/ocean-small.webm">
          OCEAN
        </VideoText>
      </div> */}
      {/* <Hero07 /> */}
      <Features06Page />
      <Testimonial04 />
      <Footer05Page />
    </div>
  );
}
