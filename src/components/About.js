import SectionHeader from "../components/SectionHeader";
import MyTech from "../components/MyTech";
import Socials from "../components/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about--container mx-auto max-w-4xl mt-20">
      <SectionHeader title="About me" />
      <div className="myTech--infoContainer flex col-2 gap-10">
        <div className="w-2/3 text-neutral-500">
          <p className="mb-5">
            Hi, my name is Zach Mutch. I&apos;m a graphic designer turned
            full-stack developer with a strong focus on front-end. I&apos;m
            passionate about creating visually appealing and user-friendly web
            applications. Drawing from my background in graphic design, I bring
            a unique perspective to translating design concepts into responsive
            web apps. My current obsession is React, and I&apos;m dedicated to
            mastering it. However, I&apos;m a fast learner and enjoy the process
            of acquiring new technologies and tools that are best suited for
            each project&apos;s needs.
          </p>
          <p className="mb-5">
            Having recently completed a full-stack web development bootcamp at
            Ohio State University with exceptional scores, I&apos;m eager to
            join a dynamic team where I can further enhance my skills and
            knowledge in font-end web development. While I wait for the right
            opportunity, I have been actively continuing my studies online
            through platforms like Scrimba and freeCodeCamp. Additionally,
            I&apos;ve been taking on various projects to gain hands-on
            experience. I&apos;m deeply committed to continuous learning and
            driven by a passion for creating exceptional web applications.
          </p>
          <p className="mb-5">
            In my free time, I enjoy participating in various activities. Gaming
            has always been a lifelong interest of mine, not only providing
            entertainment but also allowing me to create meaningful connections
            with people from all over the world. Through my involvement in the
            gaming and esports community, I discovered my passion for design and
            technology. Apart from gaming, I love watching TV shows, movies, and
            anime with my wife. These shared experiences create moments of joy
            and excitement that fuel my creativity. Spending time with close
            friends is also a crucial aspect of my life, whether it&apos;s
            playing board games or engaging in outdoor activities.
          </p>
          <p className="mb-5">
            I am currently looking for a chance to combine my coding skills with
            my love for design. If you think that I would be a great addition to
            your team, please reach out to me. I&apos;m enthusiastic about
            utilizing my expertise in web development within a dynamic and
            collaborative environment.
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-lg text-orange-600">
              <p>Let&apos;s connect</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <Socials />
          </div>
        </div>
        <div className="myTech--badgesContainer w-1/3">
          <MyTech />
        </div>
      </div>
    </section>
  );
}