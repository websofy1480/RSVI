import { getData } from "@/lib/getData"
import { CollaborationsForm } from "./CollaborationsForm"
import { OurCollaborations } from "./OurCollaborations"
import Collaborate from "@/models/ui-model/Collaborate"

export const CollaboratePage: React.FC = async () => {
    const collaborateData = await getData(Collaborate);

    return (
        <section className="pb-0">
            <div>
                <div className="mb-12 text-center container"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Collaborate{" "}
                        <span className="text-secondary">With Us</span>
                    </h1>

                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        Small Message for Collaborators
                    </p>
                </div>
                <div className="mb-10">
                    <CollaborationsForm />
                </div>
                <div>
                    <OurCollaborations collaborateData={collaborateData} />
                </div>
            </div>
        </section>
    )
}