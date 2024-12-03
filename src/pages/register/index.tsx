/** @format */

import React from "react";

/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/login.schema";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import InputField from "@/components/shared/inputField";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/validations/register.schema";
import { Link } from "react-router";

const RegisterPage = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
    },
  });
  return (
    <Card className='w-[400px] bg-background/60 backdrop-blur-xl'>
      <CardHeader>
        <CardTitle className=' text-xl'>Register</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form>
          <CardContent className='flex flex-col gap-4'>
            <InputField
              hookForm={form}
              label='Fullname'
              name='fullname'
              labelClassName='text-lg'
              placeholder='Enter your fullname'
              className='bg-white/80'
            />
            <InputField
              hookForm={form}
              label='Username'
              name='username'
              labelClassName='text-lg'
              placeholder='Enter your username'
              className='bg-white/80'
            />
            <InputField
              hookForm={form}
              label='Password'
              name='password'
              labelClassName='text-lg'
              placeholder='Enter your password'
              className='bg-white/80'
            />
          </CardContent>
          <CardFooter className='flex flex-col items-center justify-center gap-4'>
            <Button className='w-full' type='submit'>
              Register
            </Button>
            <p className='text-sm text-foreground '>
              Already have an account?{" "}
              <Link
                to={"/auth/login"}
                className='underline text-[blue] font-semibold'>
                Back to login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default RegisterPage;
