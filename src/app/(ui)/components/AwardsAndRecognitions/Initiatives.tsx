import { AdditionalSupport } from "./AdditionalSupport"
import { Awards } from "./Awards"
import { EducationalPrograms } from "./EducationalPrograms"
import { Projects } from "./Projects"
import { ReachRecognition } from "./ReachRecognition"
import { InitiativeProps } from "@/types/initiativesContext"

export const Initiatives: React.FC<InitiativeProps> = ({ initiativesData }) => {

    const educations = initiativesData.filter(item => item.initiativesType === "Educational");
    const trainings = initiativesData.filter(item => item.initiativesType === "Training Programs");
    const additionalSupports = initiativesData.filter(item => item.initiativesType === "Additional Support");
    const projects = initiativesData.filter(item => item.initiativesType === "Projects");
    
    return (
        <section className="pb-0">
            <div className="container">
                <div className="mb-12 text-center"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Educational{" "}
                        <span className="text-secondary">Initiatives</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        Interactive programs designed to empower and educate the visually impaired community
                    </p>
                </div>
                <div className="mb-10"><EducationalPrograms educations={educations} /></div>
            </div>

            <div className="container mb-10">
                <AdditionalSupport additionalSupports={additionalSupports} />
            </div>
            <div className="mb-10">
                <ReachRecognition />
            </div>
            <div className="mb-10 container">
                <Awards />
            </div>
            <div className="mb-10">
                <Projects projetcs={projects} />
            </div>
        </section>
    )
}