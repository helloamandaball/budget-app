import React from "react"
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard"
import { BudgetList } from "./budgets/BudgetList"
import { BudgetForm } from "./budgets/BudgetForm";
import { BudgetsProvider } from "./budgets/BudgetDataProvider";
import { BillsList } from "./bills/BillsList";
import { BillForm } from "./bills/BillForm";
import { BillsProvider } from "./bills/BillsDataProvider";
import { BillTypesProvider } from "./bills/BillTypesDataProvider";
import { TotalsList } from "./totals/TotalsList";
import { TotalsForm } from "./totals/TotalsForm"
import { PaidList } from "./paid/PaidList"
import { PaidEditForm } from "./paid/PaidEditForm";

//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

    return (
        <BudgetsProvider>
        <BillsProvider>
        <BillTypesProvider>
            <Routes>
                    
                <Route path="/" element={<Dashboard />} />

                <Route path="budgets/*" element={<BudgetList />} />
                <Route path="budgets/create/*" element={<BudgetForm />} />
                <Route path="budgets/edit/:billId/*" element={<BudgetForm />} />
                                
                <Route path="bills/*" element={<BillsList />} />
                <Route path="bills/create/*" element={<BillForm />} />
                <Route path="bills/edit/:billId/*" element={<BillForm />} />

                <Route path="totals/*" element={<TotalsList />} />
                <Route path="totals/create/*" element={<TotalsForm />} />
                <Route path="billTotals/edit/:billId/*" element={<TotalsForm />} />

                <Route path="paid/*" element={<PaidList />} />
                <Route path="paid/edit/:billId/*" element={<PaidEditForm />} />

            </Routes>
        </BillTypesProvider>
        </BillsProvider>
        </BudgetsProvider>
    );
}
