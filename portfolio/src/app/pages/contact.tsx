"use client";

import { IconMail } from "@tabler/icons-react";
import { StarsBackground } from "@/app/components/ui/StarsBackground";
import { useState } from "react";

export function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "eb367a23-6d67-4e92-980f-16117d24e7ea");

    // Put the company at the start of the message, then drop the separate field
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "");
    if (company) {
      formData.set("message", `Company: ${company}\n\n${message}`);
    }
    formData.delete("company");

    setResult("Sending...");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Success!");
        form.reset();
      } else {
        setResult("Error");
      }
    } catch {
      setResult("Error");
    }
  };

  return (
    <input className="border p-2" placeholder="test" />
    // <div className="relative flex flex-col items-center justify-start min-h-screen">
    // <StarsBackground
    //   starDensity={0.004}
    //   twinkleProbability={0.7}
    //   atHome={false}
    // />
    // <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
    //   <div className="relative flex flex-col items-center lg:items-start">
    //     <div className="flex items-start justify-start">
    //       <div className="relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950 flex items-center justify-center overflow-hidden">
    //         <div className="relative z-20 h-full w-full rounded-[5px] bg-gray-50 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
    //           <IconMail className="h-6 w-6 text-blue-500" />
    //         </div>
    //         <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg" />
    //         <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    //         <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:h-[8px] dark:blur-sm" />
    //       </div>
    //     </div>
    //     <h2 className="mt-9 bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl dark:from-neutral-200 dark:to-neutral-300">
    //       Contact me
    //     </h2>
    //     <p className="mt-8 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-400">
    //       I am looking for jobs and internships for Summer 2027. Shoot me an email if you think I would be a good candidate.
    //     </p>
    //   </div>
    //   <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-10 dark:from-neutral-900 dark:to-neutral-950">
    //     <form onSubmit={onSubmit} className="w-full">
    //       <div className="relative z-20 mb-4 w-full">
    //         <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="name">Full name</label>
    //         <input
    //           id="name"
    //           type="text"
    //           name="name"
    //           placeholder="Zachary Burgoon"
    //           className="h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
    //           required
    //         />
    //       </div>
    //       <div className="relative z-20 mb-4 w-full">
    //         <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="email">Email Address</label>
    //         <input
    //           id="email"
    //           type="email"
    //           name="email"
    //           placeholder="hello@burgoon.dev"
    //           className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
    //           required
    //         />
    //       </div>
    //       <div className="relative z-20 mb-4 w-full">
    //         <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="company">Company</label>
    //         <input
    //           id="company"
    //           type="text"
    //           name="company"
    //           placeholder="Burgoon Development"
    //           className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
    //         />
    //       </div>
    //       <div className="relative z-20 mb-4 w-full">
    //         <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="message">Message</label>
    //         <textarea
    //           id="message"
    //           name="message"
    //           rows={5}
    //           placeholder="Hi Zachary, ..."
    //           className="shadow-input w-full rounded-md border border-transparent bg-white pt-4 pl-4 text-sm text-neutral-800 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
    //           required
    //         />
    //       </div>
    //       <button
    //         className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 md:text-sm"
    //         type="submit"
    //       >
    //         Submit
    //       </button>
    //       {result && (
    //         <p className="relative z-20 mt-4 text-sm text-neutral-600 dark:text-neutral-300">
    //           {result}
    //         </p>
    //       )}
    //     </form>
    //   </div>
    // </div>
    // </div>
  );
}