import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const items = [
  { name: "John Doe", number: "001", status: "Active" },
  { name: "Jane Smith", number: "002", status: "Inactive" },
  { name: "Bob Johnson", number: "003", status: "Pending" },
];

export default function ListComponent() {
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
            <TableRow key={item.number}>
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
    </div>
  );
}
