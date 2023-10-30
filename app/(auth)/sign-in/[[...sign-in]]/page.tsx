"use client"
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";



export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // start the sign In process.



  const handleSubmit = async (e :any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
 
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/")
      }
      else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
 
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Oh hier ist etwas shcief gelaufen",
        description: err.errors[0].message ,
      })
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
    return <button className="flex mt-5 items-center justify-center gap-2 bg-transparent border p-1 border-neutral-100 text-neutral-100 rounded-lg " onClick={signInWithGoogle}>
      Weiter mit Google 
      <FcGoogle/>
      </button>;
  };
  
 
  return (

    <main className="bg-gradient-to-tl from-neutral-900 h-screen">
    <div className="p-4">
    <Link href={"/"} >
    <Button variant={"secondary"} className="bg-neutral-400 text-neutral-100 bg-opacity-30">
    zurück
    </Button>
    </Link>
    </div>


<div className="mt-28 flex flex-col justify-center items-center">

<span className="text-neutral-100  mb-5 text-8xl ">
            Saphir
        </span>
        <span className="text-neutral-300 text-xl mb-10 ">
            Anmelden bei Spahir.
        </span>


<div  className="  h-[24rem] w-96 rounded-xl  flex justify-center">

    <form method="post" className="flex flex-col text-lg mt-5 w-72 mx-10 ">
 

       
        <SignInOAuthButtons/>

    
       
   
          
          
      
      <div className="flex flex-col mt-4">
        <label className="text-neutral-100">E-Mail-Adresse</label>
        <input className="border rounded-md p-1 border-neutral-100 bg-transparent outline-none  text-neutral-100 " placeholder="Email" onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
      </div>

      <div className="flex flex-col mt-4">
      <label className="text-neutral-100">Passwort</label>
        <input className="border rounded-md p-1 border-neutral-100 bg-transparent outline-none text-neutral-100 " placeholder="Passwort" onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
      </div>

      <button className="text-neutral-900 mt-5 bg-white border border-neutral-500 py-2   rounded-full " onClick={handleSubmit}>Anmelden</button>
     
      <div className="text-center mt-4 text-sm underline text-neutral-400">
           <Link href={"/sign-up"}>
           Du hast noch kein Konto?
         </Link>
    </div>
    </form>

    </div>
    </div>
    </main>

)}