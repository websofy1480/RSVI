import { getData } from "@/lib/getData";
import { ContactUs } from "./contact-us";
import Contact from "@/models/ui-model/Contact";

export const ContactUsPage: React.FC = async () => {
    const contactUsData = await getData(Contact);
    return <ContactUs contactUsData={contactUsData} />
}
