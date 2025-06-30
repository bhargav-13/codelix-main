"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
// Motion removed as it's not being used

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-black">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
        Get in Touch
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Have questions or want to discuss a project? We&apos;d love to hear from you.
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="your.email@example.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="service">Service</Label>
          <Input id="service" placeholder="Service" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-white dark:placeholder-gray-500"
            placeholder="Tell us about your project..."
          />
        </LabelInputContainer>

        <button
          className="group/btn relative flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-cyan-600"
          type="submit"
        >
          Let&apos;s work together&rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
