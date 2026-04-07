import { getData } from "@/lib/getData"
import { FAQSection } from "./FrequentlyQA"
import { SupportChat } from "./SupportChat"
import Faq from "@/models/admin-model/Faq"

export const FaqPage: React.FC = async () => {
    const faqData = await getData(Faq);

    return (
        <section>
            <div className="container">
                <div className="mb-12 text-center"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Frequently Asked{" "}
                        <span className="text-secondary">Questions</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        <span className="font-semibold text-primary">Got a Question?{" "}</span>
                        We are here to answer
                    </p>
                </div>
            </div>
            <div className="mb-10">
                <FAQSection faqData={faqData} />
            </div>
            <div className="container">
                <SupportChat />
            </div>
        </section>
    )
}
