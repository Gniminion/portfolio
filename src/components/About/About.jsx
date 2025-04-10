import Skill from "./Skill";
import Experience from "./Experience";  

function About() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="mt-4 text-white">
        <div className="grid sm:grid-cols-2  lg:grid-cols-5 gap-6">

          <div className="lg:col-span-2 sm:col-span-1 flex flex-col gap-6">
            <div className="flex flex-col lg:flex-3/5 sm:flex-1/2 bg-dark2 rounded-lg  overflow-hidden border-2 border-dark3">
              <img src="me.png" alt="my photo" className="image"/>
            </div>
            <div className="text-left bg-dark2 p-8 rounded-lg flex flex-col lg:flex-2/5 sm:flex-1/2 gap-4 overflow-hidden overflow-y-auto">
            <text className="font-bold"> I'm a  data enthusiast interested in delivering <text className="text-primary"> intuitive visualisations for technical concepts. </text> </text>
              <div>
                <text className="text-gray">  When I'm not designing or coding, you can also find me editing videos and translating!</text>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 sm:col-span-1 bg-dark2 p-2 rounded-lg">
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
