import React from "react"
import { Route, Routes } from "react-router-dom";
import { BillsList } from "./bills/BillsList";
import { BillsProvider } from "./bills/BillsDataProvider";
import { BillForm } from "./bills/BillForm";
import { BillTypesProvider } from "./bills/BillTypesDataProvider";
import { TotalsList } from "./bills/totals/TotalsList";
import { TotalsForm } from "./bills/totals/TotalsForm"
import { MonthTab } from "./tabs/MonthTab";

//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

    return (
        <BillsProvider>
        <BillTypesProvider>
                <Routes>
                    
                    <Route path="tabs/*" element={<MonthTab />} />

                    <Route path="/" element={<BillsList />} />
                    <Route path="bills/*" element={<BillsList />} />
                    <Route path="bills/create/*" element={<BillForm />} />
                    <Route path="bills/edit/:billId/*" element={<BillForm />} />

                    <Route path="bills/totals/*" element={<TotalsList />} />
                    <Route path="bills/totals/create/*" element={<TotalsForm />} />
                    <Route path="billTotals/edit/:billId/*" element={<TotalsForm />} />

                </Routes>
        </BillTypesProvider>
        </BillsProvider>
    );
}
