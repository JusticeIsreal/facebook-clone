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

      <p
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Developed by <br /> <b>JUSTICE ISREAL AGBONMA</b> <br />
        <a
          style={{ color: "blue" }}
          href="https://justice-agbonma.vercel.app/"
          target="_blank"
        >
          Click here to see my Portfolio
        </a>
      </p>
      <h5 style={{ color: "red", marginTop: "50px" }}>
        {" "}
        THIS IS A FACEBOOK CLONE, NOT FACEBOOK{" "}
      </h5>
    </div>
  );
}

export default Login;
