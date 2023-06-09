"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Socials() {

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/zachmutch/", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/that-devguy", "_blank");
  };
  const handleEmailClick = () => {
    const email = "zkmutch@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <section className="socials--container flex flex-col pb-2 text-neutral-500">
      <p className="text-base text-white font-semibold flex items-center mb-6 md:text-lg">
        <FontAwesomeIcon
          icon={faComment}
          className="text-black bg-orange-600 mr-2 p-1 w-3 h-3 rounded-md"
        />
        Send a Message:
      </p>
      <div
        onClick={handleLinkedInClick}
        className="cursor-pointer flex items-center gap-2 mb-2 hover:text-orange-600 transition-color duration-200 delay-100"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="h-5" />
        <p>linkedin.com/in/zachmutch</p>
      </div>
      <div
        onClick={handleGithubClick}
        className="cursor-pointer flex items-center gap-2 mb-2 hover:text-orange-600 transition-color duration-200 delay-100"
      >
        <FontAwesomeIcon icon={faGithub} className="h-5" />
        <p>github.com/that-devguy</p>
      </div>
      <div
        onClick={handleEmailClick}
        className="cursor-pointer flex items-center gap-2 mb-2 hover:text-orange-600 transition-color duration-200 delay-100"
      >
        <FontAwesomeIcon icon={faEnvelope} className="h-5" />
        <p>zkmutch@gmail.com</p>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  );
}
