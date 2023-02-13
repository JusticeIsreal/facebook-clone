import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        alt="logo"
        width={400}
        height={400}
      ></Image>
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full cursor-pointer text-white text-center"
      >
        Login with facebook
      </h1>
    </div>
  );
}

export default Login;
