import React from "react"
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard"
import { BudgetListTabs } from "./budgets/BudgetListTabs"
import { BudgetForm } from "./budgets/BudgetForm";
import { BudgetDetails } from "./budgets/BudgetDetails";
import { BudgetsProvider } from "./budgets/BudgetDataProvider";
import { BillsList } from "./bills/BillsList";
import { BillForm } from "./bills/BillForm";
import { BillsProvider } from "./bills/BillsDataProvider";
import { BillTypesProvider } from "./bills/BillTypesDataProvider";
import { TotalsList } from "./totals/TotalsList";
import { PaidList } from "./paid/PaidList"
import { PaidEditForm } from "./paid/PaidEditForm";
import { NoteList } from "./notes/NoteList";
import { NoteForm } from "./notes/NoteForm"
import { NotesProvider } from "./notes/NoteDataProvider"

//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

    return (
        <BudgetsProvider>
        <BillsProvider>
        <BillTypesProvider>
        <NotesProvider>
            <Routes>
                    
                <Route path="/" element={<Dashboard />} />

                <Route path="budgets/*" element={<BudgetListTabs />} />
                <Route path="budgets/create/*" element={<BudgetForm />} />
                <Route path="budgets/edit/:budgetId/*" element={<BudgetForm />} />
                <Route path="budgets/detail/:budgetId/*" element={<BudgetDetails />} />
                                
                <Route path="bills/*" element={<BillsList />} />
                <Route path="bills/create/*" element={<BillForm />} />
                <Route path="bills/edit/:billId/*" element={<BillForm />} />

                <Route path="totals/*" element={<TotalsList />} />

                <Route path="paid/*" element={<PaidList />} />
                <Route path="paid/edit/:billId/*" element={<PaidEditForm />} />

                <Route path="notes/*" element={<NoteList />} />
                <Route path="notes/create/*" element={<NoteForm />} />
                <Route path="notes/edit/:noteId/*" element={<NoteForm />} />

            </Routes>
        </NotesProvider>
        </BillTypesProvider>
        </BillsProvider>
        </BudgetsProvider>
    );
}
