import Skill from "./Skill";
import Experience from "./Experience";  

function About() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="mt-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-full">

          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col w-full bg-dark2 rounded-lg overflow-hidden border-2 border-dark3">
              <img 
                src="me.png" 
                alt="my photo" 
                className="w-full h-auto object-cover max-w-full" 
              />
            </div>
            <div className="text-sm md:text-base text-left bg-dark2 p-8 rounded-lg flex flex-col gap-4 w-full">
              <p className="font-bold"> 
                I'm a data enthusiast interested in delivering 
                <span className="text-primary"> intuitive visualisations for technical concepts. </span> 
              </p>
              <div>
                <p className="text-gray">When I'm not designing or coding, you can also find me editing videos and translating!</p>
              </div>
            </div>
          </div>

          <div className="bg-dark2 rounded-lg overflow-hidden">
            <Experience />
          </div>
        </div>

        <div className="bg-dark2 rounded-lg mt-8 overflow-hidden">
          <Skill />
        </div>
      </div>
    </div>
  );
}

export default About;
