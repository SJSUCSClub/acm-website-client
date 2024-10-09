import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Footer from "../components/atoms/footer";
import Btn from "../components/atoms/btn";
import Eye from "/password/eyeshow.svg";
import EyeOff from "/password/eyeoff.svg";
import GoogleSignUpBtn from "../components/molecules/google-sign-up-btn";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/atoms/form";
import Input from "../components/atoms/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Incorrect password" }),
});

export default function PasswordField() {
  const [inputType, setInputType] = useState("password");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Login attempted with:", values);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <div className="w-full max-w-md border-[2px] border-solid border-slate-200 bg-white rounded-[20px] p-6 gap-y-4">
        <h2 className="text-xl font-bold text-center mb-6">Log In</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="john.doe@sjsu.edu"
                      className="mt-1 block w-full px-3 py-2 bg-gray-50 rounded-[12px] border-2 text-sm shadow-sm placeholder-gray-400 
                        focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        id="password"
                        type={inputType}
                        placeholder="Password"
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 rounded-[12px] border-2 text-sm shadow-sm placeholder-gray-400 
                          focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={toggleInputType}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 focus:outline-none "
                      >
                        {inputType === "password" ? (
                          <img
                            src={EyeOff}
                            alt="Show password"
                            className="h-5 w-5"
                          />
                        ) : (
                          <img
                            src={Eye}
                            alt="Hide password"
                            className="h-5 w-5"
                          />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Btn
              type="submit"
              variant="primary"
              className="w-full md:w-auto mx-auto px-4 py-2 text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded-xl"
            >
              Log In
            </Btn>
          </form>
        </Form>

        <hr className="my-4 border-gray-300" />

        <GoogleSignUpBtn />
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-yellow-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
      <div>
        <Footer layout="row" />
      </div>
    </div>
  );
}
