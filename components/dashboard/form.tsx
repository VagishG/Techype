"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { ZodError } from "zod";


// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  dynamicInputs: z
    .array(
      z.object({
        label: z.string().min(1, "Label is required"),
        value: z.string().min(1, "Value is required"),
      })
    )
    .min(1, "At least one dynamic input is required"),
});

// Type definition for the form state
interface DynamicInput {
  label: string;
  value: string;
}

interface FormErrors {
  name?: string[];
  email?: string[];
  phone?: string[];
  dynamicInputs?: { label?: string[]; value?: string[] }[];
}

export default function FormComponent() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dynamicInputs, setDynamicInputs] = useState<DynamicInput[]>([
    { label: "", value: "" },
    { label: "", value: "" },
  ]);

  const [errors, setErrors] = useState<FormErrors>({}); // Specify the type for errors

  const validateForm = (data: { name: string; email: string; phone: string; dynamicInputs: DynamicInput[] }) => {
    try {
      formSchema.parse(data);
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof ZodError) {
        const formattedErrors = e.flatten().fieldErrors;
        setErrors(formattedErrors);
      }
      return false;
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      dynamicInputs,
    };

    if (validateForm(formData)) {
      console.log("Form submitted:", formData);
      // Handle form submission here
    }
  };

  const handleDynamicInputChange = (index: number, field: "label" | "value", value: string) => {
    const newInputs = [...dynamicInputs];
    newInputs[index][field] = value;
    setDynamicInputs(newInputs);
  };

  const addDynamicInput = () => {
    setDynamicInputs([...dynamicInputs, { label: "", value: "" }]);
  };

  const removeDynamicInput = (index: number) => {
    const newInputs = dynamicInputs.filter((_, i) => i !== index);
    setDynamicInputs(newInputs);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">User Information</h2>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn(errors.name && "border-red-500")}
          required
        />
        {errors.name && <p className="text-red-500">{errors.name[0]}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(errors.email && "border-red-500")}
          required
        />
        {errors.email && <p className="text-red-500">{errors.email[0]}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={cn(errors.phone && "border-red-500")}
          required
        />
        {errors.phone && <p className="text-red-500">{errors.phone[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label>Education</Label>
        {dynamicInputs.map((input, index) => (
          <div key={index} className="flex space-x-2">
            <Input
              placeholder="Label"
              value={input.label}
              onChange={(e) => handleDynamicInputChange(index, "label", e.target.value)}
              className={cn(errors.dynamicInputs?.[index]?.label && "border-red-500")}
              required
            />
            <Input
              placeholder="Value"
              value={input.value}
              onChange={(e) => handleDynamicInputChange(index, "value", e.target.value)}
              className={cn(errors.dynamicInputs?.[index]?.value && "border-red-500")}
              required
            />
            {index >= 2 && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeDynamicInput(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        {errors.dynamicInputs && (
          <p className="text-red-500">{errors.dynamicInputs[0]?.label || errors.dynamicInputs[0]?.value}</p>
        )}

        <Button type="button" variant="outline" onClick={addDynamicInput}>
          <Plus className="h-4 w-4 mr-2" /> Add Input
        </Button>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
