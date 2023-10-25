"use client"
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


import Link from "next/link";
import { Button } from "@/components/ui/button";
 
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
      console.error(JSON.stringify(err, null, 2));
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
        router.push("/");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
 
  return (
    <main className="bg-gradient-to-tl from-indigo-600 via-black to-gray-900 h-screen">
        <div className="p-4">
        <Link href={"/"} >
        <Button variant={"secondary"} className="">
        zurück
        </Button>
        </Link>
        </div>


<div className="mt-28 flex justify-center items-center">
    <div  className="bg-neutral-100 bg-opacity-5  backdrop-blur-5xl h-[30rem] w-96 rounded-xl border border-neutral-700  flex justify-center">
      {!pendingVerification && (
        <form className="flex flex-col text-lg mt-5 mx-10 ">
            <span className="text-indigo-500 mb-5 font-bold text-5xl ">
                Saphir
            </span>
            <span className="text-neutral-300 text-md  ">
                Registrieren. Erstelle einen neun Account
            </span>
          
          <div className="flex flex-col mt-20">
            <label className="text-neutral-300">E-Mail-Adresse</label>
            <input className="border rounded-md p-1 border-neutral-500 bg-transparent outline-none  text-neutral-300 " placeholder="email" onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
          </div>

          <div className="flex flex-col mt-4">
          <label className="text-neutral-300">Passwort</label>
            <input className="border rounded-md p-1 border-neutral-500 bg-transparent outline-none text-neutral-300 " placeholder="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
          </div>

          <button className="text-neutral-100 mt-10 bg-transparent border border-neutral-500 hover:bg-indigo-600 py-2   rounded-full " onClick={handleSubmit}>Account erstellen</button>
        </form>
      )}
      {pendingVerification && (
        <div className="">
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
            className="bg-neutral-200 mt-10 text-neutral-200 font-semibold p-2 px-10 rounded-xl"
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