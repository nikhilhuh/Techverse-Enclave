import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/ThemeProvider";

const Founders: React.FC = () => {
  const { lightMode } = useTheme();
  const founders = [
    {
      name: "Pranjul Rathour",
      role: "Founder",
      bio: "Passionate about empowering the next generation of tech innovators",
      avatar: "PR",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Nikhil Tiwari",
      role: "Co-Founder",
      bio: "Building bridges between education and industry with cutting-edge tech",
      avatar: "NT",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Raman Shukla",
      role: "Co-Founder",
      bio: "Creating inclusive spaces where developers thrive and grow together",
      avatar: "RS",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Saksham Shukla",
      role: "Co-Founder",
      bio: "Connecting talent with opportunities in the ever-evolving tech landscape",
      avatar: "SS",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl orbitron font-bold text-[var(--foreground)] mb-4">
            Meet Our <span className="text-[var(--neon-purple)]">Founders</span>
          </h2>
          <p className="text-lg lg:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Visionary leaders driving innovation and empowering the next
            generation of tech talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="glass-card border-[var(--foreground)]/40 hover-glow-purple hover:cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-cyan)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {founder.avatar}
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-[var(--neon-purple)]/20 rounded-full blur-xl"></div>
                </div>

                <h3 className="text-xl orbitron font-bold text-[var(--foreground)] mb-2">
                  {founder.name}
                </h3>
                <p className={`${lightMode? "text-[var(--neon-blue)]" : "text-[var(--neon-cyan)]"} font-medium mb-3`}>
                  {founder.role}
                </p>
                <p className="text-[var(--foreground)]/70 text-sm mb-4 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={founder.social.github}
                    className="text-[var(--foreground)]/40 hover:text-[var(--neon-purple)] transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={founder.social.linkedin}
                    className="text-[var(--foreground)]/40 hover:text-[var(--neon-blue)] transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={founder.social.twitter}
                    className="text-[var(--foreground)]/40 hover:text-[var(--electric-blue)] transition-colors duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
