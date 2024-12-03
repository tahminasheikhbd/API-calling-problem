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
import { Link } from "react-router";

const LoginPage = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {};
  return (
    <Card className='w-[400px] bg-background/60 backdrop-blur-xl'>
      <CardHeader>
        <CardTitle className=' text-xl'>Login</CardTitle>
        <CardDescription>Login with your credentials</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className='flex flex-col gap-4'>
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
              Login
            </Button>
            <p className='text-sm text-foreground '>
              Don't have account?{" "}
              <Link
                to={"/auth/register"}
                className='underline text-[blue] font-semibold'>
                Register now!
              </Link>
            </p>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginPage;
