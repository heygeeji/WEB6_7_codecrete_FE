"use client";

import { Eye } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import React, { useState } from "react";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter Your Password",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup className="bg-point-sub h-13">
      <InputGroupInput
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-13"
      />
      <InputGroupAddon align="inline-end">
        <Eye
          type={"button"}
          className={"cursor-pointer"}
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </InputGroupAddon>
    </InputGroup>
  );
}
