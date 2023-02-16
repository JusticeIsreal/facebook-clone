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

      <p style={{ marginTop: "20px" }}>
        Developed by <br /> JUSTICE ISREAL <br />
        <a href="https://justice-agbonma.vercel.app/">Checkout my Portfolio</a>
      </p>
      <h5 style={{ color: "red" }}> THIS IS A FACEBOOK CLONE, NOT FACEBOOK </h5>
    </div>
  );
}

export default Login;
