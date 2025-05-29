import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import RedemptionHistory from "@/components/dashboard/redemption-history";

interface UserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserProfile({ params }: UserPageProps) {
  const { id } = await params;

  const user = {
    id,
    name: parseInt(id) % 2 === 0 ? "John Doe" : "Jane Smith",
    email: "johndoe@123@gmail.com",
    phone: "+1234567890",
    loyaltyid: "4545666",
    gender: parseInt(id) % 2 === 0 ? "Male" : "Female",
    points: Math.floor(Math.random() * 1500),
    status: parseInt(id) % 3 === 0 ? "Blocked" : "Active",
    stamps: "98",
    date: "05/21/2025",
  }; 

  return (
    <>
      <div className="flex flex-wrap gap-4 md:flex-nowrap">
        <div className="w-full md:w-1/4">
          <div className="bg-[#182226] rounded border border-[#2e2e2e] px-5 text-center py-7.5">
            <Avatar className="size-20 md:size-40 m-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-medium mt-4 mb-1">{user.name}</h3>
            <p className="text-sm font-normal">Current Status: {user.status}</p>
          </div>
        </div>

        <div className="w-full md:w-3/4 rounded border border-[#2e2e2e] px-5 py-7.5 text-[#c5c5c5] text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10">
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">Full Name</span>{" "}
              {user.name}
            </p>
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">Email</span>{" "}
              {user.email}
            </p>
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">
                Phone Number
              </span>{" "}
              {user.phone}
            </p>
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">Loyalty ID</span>{" "}
              {user.loyaltyid}
            </p>
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">Gender</span>{" "}
              {user.gender}
            </p>
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">
                Total Points
              </span>{" "}
              {user.points}
            </p>
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">
                Total Stamps Collected
              </span>{" "}
              {user.stamps}
            </p>
            <p className="flex flex-col gap-3 text-[#c5c5c5] text-xs">
              <span className="text-white text-sm font-normal">
                Register Date
              </span>{" "}
              {user.date}
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger
              className={`${
                user.status === "Blocked" ? "bg-[#298400]" : "bg-[#b40000]"
              } cursor-pointer rounded inline-flex justify-center items-center text-sm font-normal py-2.5 px-7`}
            >
              {user.status === "Blocked" ? "Unblock User" : "Block User"}
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-none border-0 bg-[#182226] py-10 md:px-9 md:!max-w-[430px]">
              <AlertDialogHeader>
                <AlertDialogTitle className="hide"></AlertDialogTitle>
                <AlertDialogDescription className="max-w-[210px] m-auto text-center justify-start text-white text-lg font-normal leading-[30px] opacity-80">
                  {user.status === "Blocked"
                    ? "Are you sure you want to Unblock this account?"
                    : "Are you sure you want to block this account?"}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="!justify-center items-center mt-5">
                <AlertDialogCancel className="w-full max-w-[150px] py-3 px-7 h-auto border-0 cursor-pointer !bg-[#e4bc84] rounded-lg !text-[#0a0e11] text-sm">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className={`w-full max-w-[150px] py-3 px-7 h-auto border-0 cursor-pointer rounded-lg !text-white text-sm ${
                    user.status === "Blocked"
                      ? "!bg-[#298400]"
                      : "!bg-[#b40000]"
                  }`}
                >
                  {user.status === "Blocked" ? "Yes, Unblock" : "Yes, Block"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <RedemptionHistory />
    </>
  );
}
