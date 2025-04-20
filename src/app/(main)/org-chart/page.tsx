
import Loader from "@/components/share/loader/Loader";

import dynamic from "next/dynamic";
import React from "react";

const page = () => {
  const DynamicOrgChart = dynamic(
    () => import("@/components/main/org-chart/OrgChart"),
    {
      loading: () => <Loader />,
    }
  );
  return (
    <div>
      <DynamicOrgChart />
    </div>
  );
};

export default page;
