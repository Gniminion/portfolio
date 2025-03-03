import Skill from "./Skill";
import Experience from "./Experience";  

function About() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 text-white">
        <div className="grid grid-cols-5 gap-6">

          <div className="col-span-2 flex flex-col gap-6">
            <div className="bg-dark2 p-6 rounded-lg h-64">
              <text> Image here when I get a good photo </text>
            </div>
            <div className="bg-dark2 p-6 rounded-lg h-48">
              <text> This site is a work in progress </text>
            </div>
          </div>

          <div className="col-span-3 bg-dark2 p-4 rounded-lg">
            <Experience />
          </div>
        </div>

        <div className="bg-dark2 rounded-lg mt-8">
          <Skill />
        </div>
      </div>
    </div>
  );
}

export default About;
