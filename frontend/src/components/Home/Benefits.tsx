import { BookOpen, Briefcase, Code2, Network } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/ThemeProvider";

const Benefits: React.FC = () => {
  const { lightMode } = useTheme();
  const benefits = [
    {
      icon: BookOpen,
      title: "Learn & Grow",
      description:
        "Access cutting-edge courses, workshops, and mentorship from industry experts",
      color: "neon-purple",
    },
    {
      icon: Network,
      title: "Network & Connect",
      description:
        "Build meaningful relationships with like-minded developers and tech enthusiasts",
      color: "neon-cyan",
    },
    {
      icon: Code2,
      title: "Real-World Projects",
      description:
        "Work on actual projects that make a difference and build your portfolio",
      color: "electric-blue",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description:
        "Get access to exclusive job openings and internship programs",
      color: "neon-green",
    },
  ];

  return (
    <section className={`py-20 ${lightMode? "bg-radial from-[var(--tech-light)]/20 via-[var(--tech-light)]/10 to-[var(--tech-light)]/10" : "bg-gradient-to-br from-[var(--tech-darker)] to-[var(--tech-dark)]"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl orbitron font-bold text-[var(--foreground)] mb-4">
            Why Join <span className={`${lightMode? "text-[var(--neon-pink)]" : "text-[var(--neon-cyan)]"}`}>Techverse</span>?
          </h2>
          <p className="text-lg lg:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Unlock your potential with our comprehensive platform designed for
            growth and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card border-[var(--foreground)]/40 hover-glow-${benefit.color
                .replace("neon-", "")
                .replace("electric-", "")} group`}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="p-8 text-center">
                <div className="relative mb-6">
                  <benefit.icon
                    className={`h-12 w-12 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    style={{ color: `var(--${benefit.color})` }}
                  />
                  <div
                    className={`absolute inset-0 h-12 w-12 mx-auto blur-xl`}
                    style={{ background: `var(--${benefit.color})`, opacity: 0.2}}
                  ></div>
                </div>

                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
