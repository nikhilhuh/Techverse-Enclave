import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";

const Hero: React.FC = () => {
  const { lightMode } = useTheme();
  const [stats, setStats] = React.useState({
    members: 0,
    projects: 0,
    workshops: 0,
    companies: 0,
  });

  // Animated counter effect
  React.useEffect(() => {
    const targetStats = {
      members: 500,
      projects: 50,
      workshops: 25,
      companies: 15,
    };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setStats({
        members: Math.floor(targetStats.members * progress),
        projects: Math.floor(targetStats.projects * progress),
        workshops: Math.floor(targetStats.workshops * progress),
        companies: Math.floor(targetStats.companies * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className={`w-full pt-[15dvh] pb-[10dvh] bg-gradient-to-br ${lightMode? "bg-transparent" : "from-[var(--tech-dark)] via-[var(--tech-darker)] to-[var(--tech-dark)]"} relative overflow-hidden`}>
      <div className={`${lightMode? "hidden" : "absolute"} inset-0 bg-gradient-to-r from-[var(--neon-purple)]/10 via-transparent to-[var(--neon-cyan)]/10`}></div>
      <div className={`${lightMode? "hidden" : "absolute"} top-20 left-10 w-72 h-72 bg-[var(--neon-purple)]/20 rounded-full blur-3xl`}></div>
      <div className={`${lightMode? "hidden" : "absolute"} bottom-20 right-10 w-96 h-96 bg-[var(--neon-cyan)]/20 rounded-full blur-3xl`}></div>

      <div className="mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="orbitron text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className={`bg-gradient-to-r ${lightMode? "from-[var(--neon-purple)] via-[var(--neon-pink)] to-[var(--electric-blue)]" : "from-[var(--neon-purple)] via-[var(--neon-cyan)] to-[var(--electric-blue)]"} bg-clip-text text-transparent`}>
              Techverse
            </span>{" "}
            <span className={`${lightMode? "bg-gradient-to-r from-[var(--neon-green)] via-[var(--electric-yellow)] to-[var(--neon-purple)]" : "bg-[var(--foreground)]"} bg-clip-text text-transparent`}>Enclave</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-[var(--foreground)] mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Fueling growth for developers, students, and tech enthusiasts.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link to="/projects">
              <button className={`bg-gradient-to-r ${lightMode? "from-[var(--neon-purple)] to-[var(--electric-blue)] hover:from-[var(--electric-purple)] hover:to-[var(--neon-blue)]" : "from-[var(--neon-purple)] to-[var(--electric-blue)] hover:from-[var(--electric-purple)] hover:to-[var(--neon-cyan)]"} text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[var(neon-purple)]/25 hover:-translate-y-1 neon-glow-purple group flex items-center justify-center hover:cursor-pointer`}>
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/signup">
              <button className={`border-2 ${lightMode? "border-[var(--neon-blue)] text-[var(--neon-blue)] hover:border-[var(--neon-cyan)]" : "border-[var(--neon-cyan)] text-[var(--neon-cyan)]"} hover:bg-[var(--neon-cyan)] hover:text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--neon-cyan)]/25 hover:-translate-y-1 hover:cursor-pointer`}>
                Join the Community
              </button>
            </Link>
          </div>

          {/* Animated Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl orbitron font-bold text-[var(--neon-purple)] mb-2">
                {stats.members}+
              </div>
              <div className="text-[var(--foreground)]/60">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl orbitron font-bold text-[var(--neon-cyan)] mb-2">
                {stats.projects}+
              </div>
              <div className="text-[var(--foreground)]/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl orbitron font-bold text-[var(--electric-blue)] mb-2">
                {stats.workshops}+
              </div>
              <div className="text-[var(--foreground)]/60">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl orbitron font-bold text-[var(--neon-green)] mb-2">
                {stats.companies}+
              </div>
              <div className="text-[var(--foreground)]/60">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
