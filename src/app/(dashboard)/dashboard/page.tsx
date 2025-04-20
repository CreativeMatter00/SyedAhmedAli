
import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "CIO Portfolio | Dashboard",
};


export default function Page() {
    const DynamicDashboard = dynamic(
        () => import("@/components/dashboard/dashboard/Dashboard"),
        {
            loading: () => <Loader />,
        }
    );
    return (
        <div><DynamicDashboard /></div>
    )
}