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
    <>
      <div className="flex-col h-screen">
        <Header />
      </div>
      <div className="w-full max-w-md mx-auto">
        <Card>
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
    </>
  );
};

export default SignUpPage;
