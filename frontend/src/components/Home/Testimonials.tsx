import { Star } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/ThemeProvider";

const Testimonials: React.FC = () => {
  const { lightMode } = useTheme();
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      content:
        "Techverse Enclave transformed my career. The mentorship and real-world projects gave me the confidence to land my dream job.",
      avatar: "AC",
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      content:
        "The community here is incredible. I've learned more in 6 months than I did in years of solo learning. Highly recommend!",
      avatar: "SJ",
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      content:
        "From student to professional - Techverse guided me through every step. The networking opportunities alone are worth it.",
      avatar: "MR",
    },
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      content:
        "Techverse Enclave transformed my career. The mentorship and real-world projects gave me the confidence to land my dream job.",
      avatar: "AC",
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      content:
        "The community here is incredible. I've learned more in 6 months than I did in years of solo learning. Highly recommend!",
      avatar: "SJ",
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      content:
        "From student to professional - Techverse guided me through every step. The networking opportunities alone are worth it.",
      avatar: "MR",
    },
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      content:
        "Techverse Enclave transformed my career. The mentorship and real-world projects gave me the confidence to land my dream job.",
      avatar: "AC",
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      content:
        "The community here is incredible. I've learned more in 6 months than I did in years of solo learning. Highly recommend!",
      avatar: "SJ",
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      content:
        "From student to professional - Techverse guided me through every step. The networking opportunities alone are worth it.",
      avatar: "MR",
    },
  ];

  const TestimonialCard = ({
    name,
    role,
    content,
    avatar,
  }: (typeof testimonials)[0]) => (
    <div className="glass-card border-[var(--foreground)]/10 p-6 md:p-10 text-[var(--foreground)]/90 rounded-xl text-center w-[85vw] md:w-[40vw] lg:w-[30vw] h-full flex flex-col cursor-pointer">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${lightMode? "text-[var(--electric-yellow)]" : "text-[var(--electric-yellow)]"} fill-current`}
          />
        ))}
      </div>

      {/* Main content */}
      <blockquote className="text-sm italic mb-4 whitespace-normal">
        "{content}"
      </blockquote>

      <div className="flex items-center justify-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-cyan)] text-white font-bold flex items-center justify-center">
          {avatar}
        </div>
        <div className="text-left">
          <div className="font-semibold">{name}</div>
          <div className={`text-sm ${lightMode? "text-[var(--neon-blue)]" : "text-[var(--neon-cyan)]"}`}>{role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20">
      <div className="mx-auto px-4 md:px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl orbitron font-bold text-[var(--foreground)] mb-4">
            What our{" "}
            <span className={`${lightMode? "text-[var(--electric-yellow)]" : "text-[var(--neon-yellow)]"}`}>Members Say</span>
          </h2>
          <p className="text-lg lg:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Hear from our community members who transformed their careers with
            Techverse Enclave
          </p>
        </div>

        {/* scroll animation */}
        <div className="w-full flex flex-col gap-14 overflow-x-hidden py-10">
          {/* Row 1 - Scroll Left (Right to Left) */}
          <div className="scroll-row scroll-left">
            <div className="scroll-track">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={`left-${i}`} className="testimonial-item">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right (Left to Right) */}
          <div className="scroll-row scroll-right">
            <div className="scroll-track">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={`right-${i}`} className="testimonial-item">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
