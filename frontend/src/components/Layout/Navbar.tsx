import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);
  const location = useLocation();
  const { lightMode, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Community", path: "/community" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        lightMode ? "bg-[var(--background)]" : "bg-[var(--background)]/50"
      } backdrop-blur-md ${isScrolled? "shadow-lg" : "shadow-none"}`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-[10dvh]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="relative">
              <Zap className="h-8 w-8 text-[var(--neon-purple)] group-hover:text-[var(--neon-cyan)] transition-colors duration-300" />
              <div className="absolute inset-0 h-8 w-8 bg-[var(--neon-purple)]/40 blur-xl group-hover:bg-[var(--neon-cyan)]/40 transition-colors duration-300"></div>
            </div>
            <span className={`text-xl lg:text-2xl font-orbitron font-bold ${lightMode? "text-[var(--neon-blue)]" : "text-white"} transition-all duration-300`}>
              Techverse Enclave
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative hover:cursor-pointer ${
                  lightMode
                    ? "hover:text-[var(--neon-blue)]"
                    : "hover:text-[var(--neon-cyan)]"
                } text-sm font-medium transition-all duration-300 group ${
                  isActiveLink(item.path)
                    ? "text-[var(--neon-purple)]"
                    : "text-[var(--foreground)]/80"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] transition-all duration-300 ${
                    isActiveLink(item.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            {/* theme toggler */}
            <div
              onClick={toggleTheme}
              className="hidden md:block lg:hidden border border-[var(--foreground)]/40 p-2 rounded-md hover:cursor-pointer"
            >
              {lightMode ? (
                <Moon className="h-5 w-5 text-[var(--foreground)]" />
              ) : (
                <Sun className="h-5 w-5 text-[var(--foreground)]" />
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggler */}
            <div
              onClick={toggleTheme}
              className="border border-[var(--foreground)]/40 p-2 rounded-lg hover:cursor-pointer"
            >
              {lightMode ? (
                <Moon className="text-[var(--foreground)]" />
              ) : (
                <Sun className="text-[var(--foreground)]" />
              )}
            </div>

            <Link to="/signin" className="hidden xl:block">
              <button
                className={`text-[var(--foreground)] ${
                  lightMode
                    ? "hover:text-[var(--neon-blue)] hover:border-[var(--neon-blue)]/50"
                    : "hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/50"
                } border border-[var(--foreground)]/20 transition-all duration-300 hover:cursor-pointer px-6 py-2 rounded-md`}
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button
                className={`bg-gradient-to-r from-[var(--neon-purple)] to-[var(--electric-blue)] ${
                  lightMode
                    ? "hover:from-[var(--electric-purple)] hover:to-[var(--neon-blue)]"
                    : "hover:from-[var(--electric-purple)] hover:to-[var(--neon-cyan)]"
                } text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--neon-purple)]/25 hover:cursor-pointer`}
              >
                Join Community
              </button>
            </Link>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex gap-2 items-center">
            {/* Theme toggler */}
            <div
              onClick={toggleTheme}
              className="border border-[var(--foreground)]/40 p-1 rounded-md hover:cursor-pointer"
            >
              {lightMode ? (
                <Moon className="h-5 w-5 text-[var(--foreground)]" />
              ) : (
                <Sun className="h-5 w-5 text-[var(--foreground)]" />
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--foreground)] p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 w-full h-[90dvh] max-h-[90dvh] overflow-y-auto bg-[var(--background)]/95 backdrop-blur-xl transform transition-transform duration-500 ease-in-out z-50 px-4 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-medium transition-colors duration-300 ${
                  isActiveLink(item.path)
                    ? "text-[var(--neon-purple)]"
                    : "text-[var(--foreground)]/80 hover:text-[var(--neon-cyan)]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className={`w-full border  ${
                    lightMode
                      ? "text-[var(--neon-blue)] border-[var(--neon-blue)]"
                      : "text-[var(--neon-cyan)] border-[var(--neon-cyan)]/50"
                  }  p-2`}
                >
                  Sign In
                </button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className={`w-full bg-gradient-to-r ${
                    lightMode
                      ? "from-[var(--electric-purple)] to-[var(--neon-blue)]"
                      : "from-[var(--electric-purple)] to-[var(--neon-cyan)]"
                  } text-white font-semibold mt-4 p-2`}
                >
                  Join Community
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
