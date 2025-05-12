import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Required" }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(isValid);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-300 p-5 space-y-4">
      <div className="flex flex-col w-[200px]">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>

      <div className="flex flex-col w-[200px]">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>

      <div className="flex flex-col w-[200px]">
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message")} />
        {errors.message?.message && <p>{errors.message?.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          className={
            isValid
              ? "rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              : "bg-slate-400"
          }>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
