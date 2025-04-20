import { Navbar } from "@/components/common/navbar/Navbar";
import Loader from "@/components/share/loader/Loader";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "CIO Portfolio | Dashboard",
};
export default function Page() {
  const DynamicHome = dynamic(() => import("@/components/main/home/Home"), {
    loading: () => <Loader />,
  });
  return (
    <div className="">
        <Navbar />
        <DynamicHome />
    </div>
  );
}
