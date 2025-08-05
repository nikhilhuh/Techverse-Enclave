import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-10 px-6 md:px-12 border-t border-[var(--foreground)]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-start md:justify-between gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--neon-purple)]">
            Techverse Enclave
          </h2>
          <p className="mt-2 text-sm text-[var(--foreground)]/70">
            Connect, Learn, Grow.
          </p>
          {/* Socials */}
          <div className="mt-4">
            <div className="flex gap-4 text-[var(--foreground)]/80 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#4267B2]"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E1306C]"
              >
                <Instagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1DA1F2]"
              >
                <Twitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0077B5]"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--neon-pink)]">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/projects" className="hover:text-[var(--neon-blue)]">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-[var(--neon-blue)]">
                Community
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-[var(--neon-blue)]">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/freelancers" className="hover:text-[var(--neon-blue)]">
                Hire Freelancers
              </Link>
            </li>
          </ul>
        </div>

        {/* For Users */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--neon-green)]">
            For Users
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/signin" className="hover:text-[var(--neon-blue)]">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-[var(--neon-blue)]">
                Your Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/submit-project"
                className="hover:text-[var(--neon-blue)]"
              >
                Submit Project
              </Link>
            </li>
            <li>
              <Link
                to="/get-verified"
                className="hover:text-[var(--neon-blue)]"
              >
                Get Verified
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-[var(--foreground)]/10 pt-6 text-center text-sm text-[var(--foreground)]/60">
        © {new Date().getFullYear()} Techverse Enclave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
