import React from "react"
import { Route, Routes } from "react-router-dom";
import { BillList } from "./bills/BillList";
import { BillsProvider } from "./bills/BillDataProvider";
import { BillForm } from "./bills/BillForm";
import { MonthTab } from "./tabs/MonthTab";

//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

  return  (
    <BillsProvider>
      <Routes>
        <Route path="tabs/*" element={<MonthTab />} />
        <Route path="/" element={<BillList />} />
        <Route path="bills/*" element={<BillList />} />
        <Route path="bills/create/*" element={<BillForm />} />
        {/* <Route path="bills/edit/:billId/*" element={<BillForm />} />> */}

      </Routes>
    </BillsProvider>
  );
}
