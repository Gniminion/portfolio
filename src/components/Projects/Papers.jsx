import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { PAPERS } from "../../data/projects";

function Papers() {
    const [expandedPaper, setExpandedPaper] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedPaper(index === expandedPaper ? null : index);
    };

    return (
        <div className="mt-8 space-y-2 text-left">
            <h2 className="text-2xl mb-4 text-white">Papers</h2>

            {PAPERS.map((paper, index) => {
            const isOpen = expandedPaper === index;
            return (
                <div
                key={index}
                className={`border-l transition-all duration-300 bg-dark2 ${isOpen ? "border-primary" : "border-dark3"}`}
                >
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-4 flex justify-between items-center text-white text-left transition text-sm md:text-base cursor-pointer"
                >
                    <span className="font-medium pr-8">{paper.title}</span>
                    
                    <div className="flex items-center space-x-4">
                        <span className="text-gray text-xs md:text-sm font-mono">{paper.category}</span>
                        <span className="text-gray text-xs md:text-sm font-mono">{paper.year}</span>
                        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-xs" />
                    </div>
                </button>

                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden px-4"
                >
                    <div className="text-gray text-sm md:text-base mb-4">
                    <p className="mb-4">{paper.desc}</p>
                    <a className="text-primary hover:underline"
                        href={paper.link} target="_blank"
                    >
                        View Paper <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-sm" />
                    </a>
                    </div>
                </motion.div>
                </div>
            );
            })}
        </div>
    )
}
export default Papers;
