import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Page = () => {
  return (
    <form className="flex flex-col gap-6 md:gap-10">
      <div>
        <h2 className="text-xl leading-loose">Achievement Details</h2>
        <div className="bg-[#0a0e11] rounded border border-[#2e2e2e] flex flex-col gap-5 md:gap-9 p-4 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
            <div className="flex flex-col gap-2.5">
              <Label> Achievement Name</Label>
              <Input />
            </div>
            <div className="flex flex-col gap-2.5">
              <Label> Number of Stamps</Label>
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:gap-9">
            <div className="flex flex-col gap-2.5">
              <Label> Description</Label>
              <Textarea className="h-[100px] !bg-[#0a0e11] rounded border border-[#2e2e2e]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl leading-loose">Reward Settings</h2>
        <div className="bg-[#0a0e11] rounded border border-[#2e2e2e] flex flex-col gap-5 md:gap-9 p-4 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
            <div className="flex flex-col gap-2.5">
              <Label> Reward Value</Label>
              <Input />
            </div>
            <div className="flex flex-col gap-2.5">
              <Label> Assign to Restaurants</Label>
              <Input />
            </div>
          </div>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full text-sm !bg-[#E4BC84] rounded min-h-12.5 max-w-max px-7.5"
      >
        Save Achievement
      </Button>
    </form>
  );
};

export default Page;
