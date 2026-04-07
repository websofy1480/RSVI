import { getData } from "@/lib/getData";
import { JoinUsRequest } from "./JoinUsRequest";
import JoinUs from "@/models/ui-model/JoinUs";

export const JoinUsRequestPage: React.FC = async () => {
    const joinUsData = await getData(JoinUs);
    return <JoinUsRequest joinUsData={joinUsData} />
}
