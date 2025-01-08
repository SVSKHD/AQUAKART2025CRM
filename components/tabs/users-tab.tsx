"use client";

import { columns } from "@/components/users/data-table/columns";
import { DataTable } from "@/components/categories/data-table/data-table";
import { users } from "@/lib/data/users";

export function UsersTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Users</h2>
      </div>
      <DataTable 
        columns={columns} 
        data={users}
        searchColumn="email"
        searchPlaceholder="Search users..."
      />
    </div>
  );
}