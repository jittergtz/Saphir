"use client"
import { useState } from "react";
import { AuthenticateWithRedirectCallback, useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";


import { FcGoogle } from "react-icons/fc"


 
export default function SignUpForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  // start the sign up process.
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
   
 
    try {
      await signUp.create({
        emailAddress,
        password,
      });
 
      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
 
      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
        toast({
            title: "Oh, hier ist ein Fehler ist Aufgetreten",
            description:  err.errors[0].message ,
            variant: "destructive",
        })
        console.error(err);
    }
  };
 
  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e :any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push("/dashboard");
      }
    } catch (err: any) {
        toast({
            title: "OH ein Fehler ist Aufgetreten",
            description: err.errors[0].message,
            variant: "destructive",
        })
        console.error(err);
    }
  };


  const publicPages: Array<string> = [];
 
const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) {
    return null;
  }
  const signInWithGoogle = () =>
    signIn.authenticateWithRedirect({
      strategy: 'oauth_google',
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/dashboard'
    });
  return <button className="flex mt-5 items-center justify-center gap-2 bg-transparent border p-1 border-neutral-400 text-neutral-200 rounded-lg " onClick={signInWithGoogle}>
    Weiter mit Google 
    <FcGoogle/>
    </button>;
};




 
  return (
    <main className="bg-gradient-to-t from-neutral-900 via-black to-black h-screen">
        <div className="p-4">
        <Link href={"/"} >
        <Button variant={"secondary"} className="bg-neutral-400 text-neutral-300 bg-opacity-30">
        zurück
        </Button>
        </Link>
        </div>


<div className="mt-28 flex justify-center items-center">
    
    
    <div  className="bg-neutral-950 bg-opacity-90  backdrop-blur-xl h-[32rem] w-96 rounded-xl border border-neutral-700  flex justify-center">
      {!pendingVerification && (
        <form method="post" className="flex flex-col text-lg mt-5 mx-10 ">
            <span className="text-neutral-300 underline mb-5 font-bold text-5xl ">
                Saphir
            </span>
            <span className="text-neutral-300 text-md  ">
                Registrieren, erstelle einen neues Konto und lerne Spahir kennen.
            </span>

           
            <SignInOAuthButtons/>

        
           
             
              
              
          
          <div className="flex flex-col mt-4">
            <label className="text-neutral-400">E-Mail-Adresse</label>
            <input className="border rounded-md p-1 border-neutral-400 bg-transparent outline-none  text-neutral-300 " placeholder="Email" onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
          </div>

          <div className="flex flex-col mt-4">
          <label className="text-neutral-400">Passwort</label>
            <input className="border rounded-md p-1 border-neutral-400 bg-transparent outline-none text-neutral-300 " placeholder="Passwort" onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
          </div>

          <button className="text-neutral-100 mt-5 bg-transparent border border-neutral-500 py-2   rounded-full " onClick={handleSubmit}>Account erstellen</button>
         
          <div className="text-center mt-4 text-sm underline text-neutral-500">
               <Link href={"/sign-in"}>
               Du hast bereits ein Konto?
             </Link>
        </div>
        </form>
    
      )}
      {pendingVerification && (
        <div >
          <form className="grid mx-10 ">
            <label className="mt-10 text-neutral-300 text-center w-70 text-2xl font-bold">
                Wir haben einen Verifizierungscode an 
                deine Email geschickt.
            </label>
            <input
            className="bg-transparent outline-none text-neutral-300 mt-20 border p-3 rounded-md border-neutral-300"
           
              value={code}
              placeholder="Verifizierungscode"
              onChange={(e) => setCode(e.target.value)}
            />
            <button
            className="bg-neutral-200 mt-10 text-black  p-2 px-10 rounded-xl"
             onClick={onPressVerify}>
              Verifizieren
            </button>
          </form>
        </div>
      )}
    </div>
</div>

    </main>
  );
}