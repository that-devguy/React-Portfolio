import Link from "next/link";
import localFont from "next/font/local";
import Socials from "../components/Socials";
const myFont = localFont({
  src: "../assets/fonts/BDStreetSignSans-RaisedInktrap.otf",
});

export default function Navbar() {
  return (
    <nav className="navbar--container h-10 flex items-center gap-5 max-w-7xl m-auto py-8 px-5 sticky top-0">
      <Link href="/" className="text-2xl flex" style={myFont.style}>
        that_<span className="text-orange-600">dev</span>guy
      </Link>
      <div className="flex gap-5 pr-5 border-r border-neutral-700 text-neutral-500 ml-auto font-semibold">
        <Link
          href="/projects"
          className="cursor-pointer h-5 flex content-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="cursor-pointer h-5 flex content-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          About me
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer h-5 flex content-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          Contact
        </Link>
        <Link
          href="/resume"
          className="cursor-pointer h-5 flex content-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          Resume
        </Link>
      </div>

      <Socials />
    </nav>
  );
}
