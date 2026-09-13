import { PwaControls } from "./pwa";
import { ArrowUpRight } from "lucide-react";

export function PageFooter() {
  return (
    <footer className="feed-footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/arangates/" target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={13} />
        </a>
        <a href="https://github.com/arangates" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={13} />
        </a>
        <a href="mailto:arangates@gmail.com">
          Say hello <ArrowUpRight size={13} />
        </a>
      </div>
      <PwaControls />
      <p>© {new Date().getFullYear()} Aranganathan Rathinavelu</p>
      <span>Software engineer · Netherlands</span>
    </footer>
  );
}
