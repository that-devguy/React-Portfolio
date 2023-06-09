import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "../utils/Reveal";

export default function MyTech() {
  return (
    <div className="myTech--container block sm:flex sm:gap-4 md:block">
      <Reveal>
        <p className="text-base font-semibold flex items-center mb-6 md:text-lg">
          <FontAwesomeIcon
            icon={faTerminal}
            className="text-black bg-orange-600 mr-2 p-1 w-3 h-3 rounded-md"
          />
          Full-stack Technologies:
        </p>
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-0 md:mb-8">
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Next.js</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">React</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">
            JavaScript
          </p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">HTML</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">CSS</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Node.js</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Express</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">MongoDB</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">MySQL</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">jQuery</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">REST</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">JSON</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">
            Handlebars
          </p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Git</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">GitHub</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Tailwind</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Bootstrap</p>
        </div>
      </Reveal>
      <Reveal>
        <p className="text-base font-semibold flex items-center mb-6 md:text-lg">
          <FontAwesomeIcon
            icon={faPalette}
            className="text-black bg-orange-600 mr-2 p-1 w-3 h-3 rounded-md"
          />
          Design Tools:
        </p>
        <div className="flex flex-wrap gap-2">
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Photoshop</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">
            Illustrator
          </p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">
            Premiere Pro
          </p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">
            After Effects
          </p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Figma</p>
          <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Canva</p>
        </div>
      </Reveal>
    </div>
  );
}
