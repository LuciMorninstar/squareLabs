
import TestimonialSlider from "./TestimonialSlider";
import image1 from "../assets/testimonial/image1.jpg"
import pramod from "../assets/testimonial/pramod.jpg"
import puran from "../assets/testimonial/puran.jpg"

const TestimonialSection = () => {

    const testimonials = [
  {
    id: 1,
    image: pramod,
    name: "Sarah Johnson",
    position: "Senior Product Designer",
    company: "PixelForge",
    testimonial:
      "Collaborating with this team was one of the best decisions we made for our product. They took the time to understand our goals, offered valuable suggestions throughout the process, and consistently delivered high-quality work. Their attention to detail, responsiveness, and commitment to deadlines made the entire experience smooth and enjoyable. We couldn't be happier with the final outcome.",
  },
  {
    id: 2,
    image: puran,
    name: "Michael Chen",
    position: "Chief Technology Officer",
    company: "NovaTech Solutions",
    testimonial:
      "The level of professionalism and technical expertise they brought to our project was outstanding. Every milestone was delivered on time, communication was always clear, and they were quick to adapt whenever our requirements changed. The final product not only met our expectations but exceeded them in both performance and design.",
  },
  {
    id: 3,
    image: image1,
    name: "Emily Carter",
    position: "Marketing Manager",
    company: "BrightEdge Media",
    testimonial:
      "From the initial planning phase to the final delivery, the entire process felt effortless. Their creative approach, problem-solving skills, and willingness to go the extra mile helped us achieve results we hadn't thought possible. Our team received countless compliments after the launch, and we're excited to work together again in the future.",
  },
  {
    id: 4,
    image: puran,
    name: "David Wilson",
    position: "Founder & CEO",
    company: "LaunchSphere",
    testimonial:
      "Finding a team that combines creativity, technical expertise, and excellent communication is rare, but they delivered on all three. They kept us informed throughout the project, welcomed feedback, and ensured every detail matched our vision. The end result was polished, reliable, and has already made a positive impact on our business.",
  },
];
  return (
    <section className="bg-default-color flex flex-col h-screen gap-8 py-16">

      {/* heading */}
      <div className="flex flex-col gap-1 lg:gap-4 pl-8 lg:pl-16">
        <h1 className="text-text-quarternary-color font-sora font-semibold">
          What <span className="top-bottom-gradient">Our Clients </span>
          Say
        </h1>
        <h1 className="text-text-quarternary-color font-sora font-semibold">
          About Working With Us
        </h1>
      </div>

      {/* slider */}
      <TestimonialSlider testimonials={testimonials} />

    </section>
  );
};

export default TestimonialSection;