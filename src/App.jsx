import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./MainCode/Login";
import Register from "./MainCode/Register";
import SuperAdminLayout from "./MainCode/SuperAdminLayout";
import AdminLayout from "./MainCode/AdminLayout";
import PrivateDashboard from "./MainCode/PrivateDashboard";
import AdvancedDashboard from "./MainCode/AdvancedDashboard";
import Calendar from "./MainCode/Calendar";
import Leads from "./MainCode/Leads";
import Deal from "./MainCode/Deal";
import Client from "./MainCode/Client";
import Employee from "./MainCode/Employee";
import Leave from "./MainCode/Leave";
import Roster from "./MainCode/Roster";
import Attendance from "./MainCode/Attendance";
import Holiday from "./MainCode/Holiday";
import Designation from "./MainCode/Designation";
import Department from "./MainCode/Department";
import Appreciation from "./MainCode/Appreciation";
import Contract from "./MainCode/Contract";
import Project from "./MainCode/Project";
import Task from "./MainCode/Task";
import Timesheet from "./MainCode/Timesheet";
import Proposal from "./MainCode/Proposal";
import Estimate from "./MainCode/Estimate";
import Invoice from "./MainCode/Invoice";
import Payment from "./MainCode/Payment";
import Expenses from "./MainCode/Expenses";
import Account from "./MainCode/Account";
import Notes from "./MainCode/Notes";
import Order from "./MainCode/Order";
import Ticket from "./MainCode/Ticket";
import EmployeeLayout from "./MainCode/EmployeeLayout";
import EmployeeDashboard from "./MainCode/EmployeeDashboard";
import Notice from "./MainCode/Notice";
import Knowledge from "./MainCode/Knowledge";
import Assets from "./MainCode/Assets";
import Biolinks from "./MainCode/Biolinks";
import Payroll from "./MainCode/Payroll";
import Meeting from "./MainCode/Meeting";
import Objective from "./MainCode/Objective";
import Request from "./MainCode/Request";
import Job from "./MainCode/Job";
import JobApplication from './MainCode/JobApplication'
import RecruitDashboard from './MainCode/RecruitDashboard'
import Skills from "./MainCode/Skills";
import Interview from './MainCode/Interview'
import Offer from './MainCode/Offer'
import EventPage from "./MainCode/EventPage";
import ClientLayout from "./MainCode/ClientLayout";
import ClientDashboard from "./MainCode/ClientDashboard";
import SettingsLayout from "./MainCode/SettingsLayout";
import CompanySettings from "./MainCode/CompanySettings";
import BusinessSettings from "./MainCode/BusinessSettings";
import AppSetting from "./MainCode/AppSetting";
import ProfileSetting from "./MainCode/ProfileSetting";
import PurchaseSetting from "./MainCode/PurchaseSetting";
import AssetSetting from "./MainCode/AssetSetting";
import LeaveSetting from "./MainCode/LeaveSetting";
import PayrollSetting from "./MainCode/PayrollSetting";
import ClientSetting from "./MainCode/ClientSetting";
import EmployeeSetting from "./MainCode/EmployeeSetting";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/superadmin", element: <SuperAdminLayout /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdvancedDashboard /> }, // default
      { path: "private-dashboard", element: <PrivateDashboard /> },
      { path: "advanced-dashboard", element: <AdvancedDashboard /> },
      { path: "my-calendar", element: <Calendar /> },
      { path: "lead-contact", element: <Leads /> },
      { path: "deals", element: <Deal /> },
      {path:"clients", element:<Client/>},
      {path:"employees", element:<Employee/>},
      {path:"leaves", element:<Leave/>},
      {path:"Roster", element:<Roster/>},
      {path:"attendance", element:<Attendance/>},
      {path:"holiday", element:<Holiday/>},
      {path:"designation", element:<Designation/>},
      {path:"department", element:<Department/>},
      {path:"appreciation", element:<Appreciation/>},
      {path:"contracts", element:<Contract/>},
      {path:"projects", element:<Project/>},
      {path:"tasks", element:<Task/>},
      {path:"timesheet", element:<Timesheet/>},
      {path:"proposal", element:<Proposal/>},
      {path:"estimates", element:<Estimate/>},
      {path:"invoice", element:<Invoice/>},
      {path:"payments", element:<Payment/>},
      {path:"expenses", element:<Expenses/>},
      {path:"credits", element:<Notes/>},
      {path:"account", element:<Account/>},
      {path:"orders", element:<Order/>},
      {path:"tickets", element:<Ticket/>},
      {path:"eventspage", element:<EventPage/>},
      {path:"Notice-board", element:<Notice/>},
      {path:"knowledge-base", element:<Knowledge/>},
      {path:"assets", element:<Assets/>},
      {path:"biolinks", element:<Biolinks/>},
      {path:"payroll", element:<Payroll/>},
      {path:"salary", element:<Biolinks/>},
      {path:"jobs", element:<Job/>},
      {path:"job-application", element:<JobApplication/>},
      {path:"overtime-request", element:<Request/>},
      {path:"recruit-dashboard", element:<RecruitDashboard/>},
      {path:"objective", element:<Objective/>},
      {path:"meeting", element:<Meeting/>},
      {path:"offer-letter", element:<Offer/>},
      {path:"skills", element:<Skills/>},
      {path:"interview-schedule", element:<Interview/>},
      {
          path: "settings",
            element: <SettingsLayout />,
            children: [
               { path: "company", element: <CompanySettings /> },
               { path: "business", element: <BusinessSettings /> },
               { path: "app", element: <AppSetting/> },
               { path: "profile", element: <ProfileSetting /> },
               { path: "Asset", element: <AssetSetting /> },
               { path: "purchase", element: <PurchaseSetting /> },
               { path: "leave", element: <LeaveSetting /> },
               { path: "business", element: <BusinessSettings /> },
               { path: "Payroll", element: <PayrollSetting /> },
   
              ],
}
      
     
    ],
  },
  
  {
    path:"/employee",
    element:<EmployeeLayout/>,
    children:[
      {
        index: true, // 👈 This means /client will show dashboard by default
        element: <EmployeeDashboard />,
      },
      { path: "my-calendar", element: <Calendar /> },
      { path: "lead-contact", element: <Leads /> },
      {path:"leaves", element:<Leave/>},
      {path:"attendance", element:<Attendance/>},
      {path:"holidays", element:<Holiday/>},
      {path:"appreciation", element:<Appreciation/>},
      {path:"projects", element:<Project/>},
      {path:"tasks", element:<Task/>},
      {path:"timesheet", element:<Timesheet/>},
      {path:"expenses", element:<Expenses/>},
      {path:"tickets", element:<Ticket/>},
      {path:"Notice-board", element:<Notice/>},
      {path:"eventspage", element:<EventPage/>},
       {
          path: "settings",
            element: <EmployeeSetting />,
            children: [
                 { path: "app", element: <AppSetting/> },
               { path: "profile", element: <ProfileSetting /> },
             
   
              ],
}
    ]
  },
   {
    path:"/client",
    element:<ClientLayout/>,
    children:[
      {
        index: true, // 👈 This means /client will show dashboard by default
        element: <ClientDashboard />,
      },
      { path: "my-calendar", element: <Calendar /> },
      {path:"orders", element:<Order/>},
      {path:"estimates", element:<Estimate/>},
      {path:"invoices", element:<Invoice/>},
      {path:"payments", element:<Payment/>},
      {path:"credits", element:<Notes/>},
      {path:"projects", element:<Project/>},
      {path:"tasks", element:<Task/>},
      {path:"timesheet", element:<Timesheet/>},
      {path:"contracts", element:<Contract/>},
      {path:"tickets", element:<Ticket/>},
      {path:"Notice-board", element:<Notice/>},
      {path:"eventspage", element:<EventPage/>},
       {
          path: "settings",
            element: <ClientSetting />,
            children: [
               { path: "app", element: <AppSetting/> },
               { path: "profile", element: <ProfileSetting /> },
              
              ],
}
    ]
  },
  

]);

const App = () => <RouterProvider router={router} />;

export default App;
