import Skill from "./Skill";
import Experience from "./Experience";  

function About() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 text-white">
        <div className="grid grid-cols-7 gap-6">

          <div className="col-span-3 flex flex-col gap-6">
            <div className="flex flex-col bg-dark2 rounded-lg h-54 overflow-hidden border-2 border-dark3">
              <img src="src/assets/me.png" alt="my photo" class="image"/>
            </div>
            <div className="text-left bg-dark2 p-8 rounded-lg h-54 flex flex-col gap-4">
            <text className="font-bold"> I'm a  data enthusiast interested in delivering <text className="text-primary"> intuitive visualisations for technical concepts. </text> </text>
              <div>
                <text className="text-gray">  When I'm not designing or coding, you can also find me editing and translating media!</text>
              </div>
            </div>
          </div>

          <div className="col-span-4 bg-dark2 p-2 rounded-lg">
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
