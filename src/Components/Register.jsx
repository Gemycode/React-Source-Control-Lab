import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, "Must be at least 3 chars"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  city: z.string().nonempty("City required"),
  password: z.string().min(8, "Must be at least 8 chars"),
  confirmPassword: z.string().min(8, "Confirm password is required"),
});

export default function Register() {
    // لسة باقيلى استخدام ال useState عشان اتحكم فى اللون للبوردر 
  const [borderStyle, setBorderStyle] = useState("1px solid #ccc");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            
           
            type="text"
            {...register("name")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            onFocus={(e) => (e.target.style.border = "1px solid red")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            {...register("email")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <select
            {...register("city")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select city</option>
            <option value="cairo">Cairo</option>
            <option value="aswan">Aswan</option>
            <option value="luxor">Luxor</option>
          </select>
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            onFocus={(e) => (e.target.style.border = "1px solid red")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            {...register("password")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
