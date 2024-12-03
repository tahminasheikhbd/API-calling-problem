/** @format */

import React, { InputHTMLAttributes } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  hookForm: UseFormReturn<any>;
  name: string;
  label: string;
  labelClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  hookForm,
  name,
  label,
  labelClassName,
  ...props
}) => {
  return (
    <FormField
      name={name}
      control={hookForm.control}
      render={({ field, fieldState: { error } }) => (
        <FormItem className='flex flex-col gap-1 text-muted-foreground'>
          <FormLabel className={cn(labelClassName)}> {label} </FormLabel>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          {error && (
            <FormMessage className='text-xs'> {error?.message} </FormMessage>
          )}
        </FormItem>
      )}></FormField>
  );
};

export default InputField;
