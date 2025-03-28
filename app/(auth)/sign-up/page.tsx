import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next"; 
import SignUpForm from "./sign-up-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="bg-gray-100 w-screen flex">
      <div className="flex-col h-screen">
        <Header />
      </div>
      <div className="w-full h-full max-w-lg mx-auto my-auto flex-1 justify-center align-center">
        <Card className="p-10 bg-[#FFF]">
          <CardHeader className="space-y-4"> 
            <CardTitle className="text-center text-xl">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Register an account to start shopping
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;
