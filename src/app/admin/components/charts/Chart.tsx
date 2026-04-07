"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";
import { PageBreadcrumb } from "../common/PageBreadCrumb";
import { Radio } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const COLORS = ["#dc2626", "#429b5e", "#ef914e"];

const DashboardPage = () => {
  const [collaborations, setCollaborations] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [joinUs, setJoinUs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [collabRes, joinUsRes, contactRes] = await Promise.all([
          fetch("/api/auth/collaborate"),
          fetch("/api/auth/join-us"),
          fetch("/api/auth/contact-us")
        ]);
        const collabData = await collabRes.json();
        const joinUsData = await joinUsRes.json();
        const contactData = await contactRes.json();

        setCollaborations(collabData.data);
        setContacts(contactData.data);
        setJoinUs(joinUsData.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const groupByDate = (data: any[]) => {
    const map: Record<string, number> = {};
    data.forEach((item) => {
      const date = new Date(item.createdAt).toLocaleDateString();
      map[date] = (map[date] || 0) + 1;
    });
    return Object.keys(map).map((date) => ({
      date,
      count: map[date],
    }));
  };

  const collaborationChart = groupByDate(collaborations);
  const contactChart = groupByDate(contacts);
  const joinUsChart = groupByDate(joinUs);

  const pieData = [
    { name: "Collaborations", value: collaborations.length },
    { name: "Join Us", value: joinUs.length },
    { name: "Contacts", value: contacts.length },
  ];

  return (
    <div className="p-4">
      <PageBreadcrumb pageTitle="Dashboard" />
      {
        loading ? <div className="flex items-center justify-center">
          <Radio
            visible={true}
            height="150"
            width="150"
            colors={["#3c3c30", "#727057", "#727057"]}
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>

          :
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-error shadow rounded-lg p-6 cursor-pointer" onClick={() => router.push("/admin/collaborator")}>
                <p className="text-white font-semibold">Total Collaborations</p>
                <h2 className="text-3xl text-white font-bold">{collaborations.length}</h2>
              </div>
              <div className="bg-success shadow rounded-lg p-6 cursor-pointer" onClick={() => router.push("/admin/join-us-request")}>
                <p className="text-white font-semibold">Total Join Us Request</p>
                <h2 className="text-3xl text-white font-bold">{joinUs.length}</h2>
              </div>
              <div className="bg-goldenOrange shadow rounded-lg p-6 cursor-pointer col-span-2" onClick={() => router.push("/admin/contact-us")}>
                <p className="text-white font-semibold">Total Contacts Request</p>
                <h2 className="text-3xl text-white font-bold">{contacts.length}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg text-error font-semibold mb-3">
                  Collaborations Trend
                </h3>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={collaborationChart} >
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#dc2626"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>


              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg text-success font-semibold mb-3">
                  Join Us Trend
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={joinUsChart}>
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#429b5e"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white shadow rounded-lg p-4 col-span-2">
                <h3 className="text-lg text-goldenOrange font-semibold mb-3">
                  Contact Requests Trend
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={contactChart}>
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#ef914e"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg text-primary font-semibold mb-3">
                <span className="text-error">Collaborations{" "}</span>vs{" "}<span className="text-success">Join Us{" "}</span>vs{" "}<span className="text-goldenOrange">Contact{" "}</span>  Ratio
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
      }
    </div>
  );
};

export default DashboardPage;

