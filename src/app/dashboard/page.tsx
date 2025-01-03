"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { ComplaintsTable } from "@/components/complaints-table";
import { Toaster } from "react-hot-toast";
import { UserApplicationsTable } from "@/components/user-applications-table";
import { SuperApplicationsTable } from "@/components/super-applications-table";
import { SuspendedUsersTable } from "@/components/suspended-users-table";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-zinc-900 dark:to-zinc-800">
      <Navbar />
      <Toaster position="bottom-center" />
      <motion.div 
        className="container mx-auto pt-24 px-4"
        animate={false}
      >
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Super User Dashboard
        </h1>
        
        <Tabs defaultValue="complaints" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="complaints">Complaints</TabsTrigger>
            <TabsTrigger value="super-applications">Super User Applications</TabsTrigger>
            <TabsTrigger value="user-applications">User Applications</TabsTrigger>
            <TabsTrigger value="suspended-users">Suspended Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="complaints">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Complaints</h2>
              <ComplaintsTable />
            </div>
          </TabsContent>
          
          <TabsContent value="super-applications">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Super User Applications
              </h2>
              <SuperApplicationsTable />
            </div>
          </TabsContent>

          <TabsContent value="user-applications">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">User Applications</h2>
              <UserApplicationsTable />
            </div>
          </TabsContent>

          <TabsContent value="suspended-users">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Suspended Users
              </h2>
              <SuspendedUsersTable />
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
} 