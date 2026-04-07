import { getData } from "@/lib/getData";
import Activity from "@/models/admin-model/Activity";
import { Activities } from "./Activities";

export const ActivitiesPage: React.FC = async () => {
    const activitiesData = await getData(Activity);
    return <Activities activitiesData={activitiesData} />
}
