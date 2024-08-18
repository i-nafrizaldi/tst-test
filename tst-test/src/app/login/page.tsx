// import React from "react";
// import img from "../../../public/undraw_sign_up_n6im.svg";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { FcGoogle } from "react-icons/fc";

// const login = () => {
//   return (
//     <main className="min-h-screen">
//       <div className="grid grid-cols-2 min-h-screen pt-20">
//         <div className="place-content-center">
//           <div className=" text-center">
//             <p className="font-bold text-3xl mb-3">Login</p>
//             <p className="mb-3">Please login to continue.</p>
//           </div>
//           <Card className="w-[500px] mx-auto shadow-lg py-5">
//             <CardContent className=" flex flex-col gap-4">
//               <div>
//                 <Label>Email</Label>
//                 <Input placeholder="youremail@mail.com" type="email" />
//               </div>
//               <div>
//                 <Label>Password</Label>
//                 <Input placeholder="Password" type="password" />
//               </div>
//               <p className="underline text-sm text-right">Forgot Password?</p>
//               <div className=" flex flex-col gap-4 ">
//                 <Button>Login</Button>
//                 <Button className="flex gap-2">
//                   <FcGoogle />
//                   <p>Login with Google Account</p>
//                 </Button>
//                 <p className=" text-sm text-center">
//                   Don't have an account?{" "}
//                   <span className="underline cursor-pointer">Sign Up</span>
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="place-content-center">
//           <Image
//             alt="1"
//             src={img}
//             width={600}
//             className="mx-auto place-items-center"
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default login;

import React from "react";
import img from "../../../public/undraw_sign_up_n6im.svg";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

const login = () => {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen pt-20 gap-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-5">
            <p className="font-bold text-3xl mb-3">Login</p>
            <p className="mb-3">Please login to continue.</p>
          </div>
          <Card className="md:w-full w-96 max-w-md mx-auto shadow-lg py-5">
            <CardContent className="flex flex-col gap-4">
              <div>
                <Label>Email</Label>
                <Input placeholder="youremail@mail.com" type="email" />
              </div>
              <div>
                <Label>Password</Label>
                <Input placeholder="Password" type="password" />
              </div>
              <p className="underline text-sm text-right">Forgot Password?</p>
              <div className="flex flex-col gap-4">
                <Button>Login</Button>
                <Button className="flex gap-2">
                  <FcGoogle />
                  <p>Login with Google Account</p>
                </Button>
                <p className="text-sm text-center">
                  Don't have an account?{" "}
                  <span className="underline cursor-pointer">Sign Up</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="hidden md:block place-content-center">
          <Image
            alt="Signup Illustration"
            src={img}
            width={600}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default login;
