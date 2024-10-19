"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Item {
  name: string;
  number: string;
  status: "Active" | "Inactive" | "Pending";
  email?: string;
  education?: string[]; // Change to array of strings
}

const items: Item[] = [
  { name: "John Doe", number: "001", status: "Active", email: "john@example.com", education: ["High School", "Bachelor's Degree"] },
  { name: "Jane Smith", number: "002", status: "Inactive", email: "jane@example.com" },
  { name: "Bob Johnson", number: "003", status: "Pending" },
];

export default function ListComponent() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleRowClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Item List</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.number}
              onClick={() => handleRowClick(item)}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.number}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "Active"
                      ? "default"
                      : item.status === "Inactive"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={selectedItem !== null} onOpenChange={handleCloseModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Item Details</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {selectedItem && (
              <div className="space-y-2">
                <p><strong>Name:</strong> {selectedItem.name}</p>
                <p><strong>Number:</strong> {selectedItem.number}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <Badge
                    variant={
                      selectedItem.status === "Active"
                        ? "default"
                        : selectedItem.status === "Inactive"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {selectedItem.status}
                  </Badge>
                </p>
                
                {/* Display email if it exists */}
                {selectedItem.email && (
                  <p><strong>Email:</strong> {selectedItem.email}</p>
                )}
                
                {/* Display education if it exists */}
                {selectedItem.education && selectedItem.education.length > 0 && (
                  <div>
                    <strong>Education:</strong>
                    <ul className="list-disc ml-4">
                      {selectedItem.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
