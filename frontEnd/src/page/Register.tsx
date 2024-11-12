import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phonenumber, setPhonenumber] = useState<string>();
  const [address, setAddress] = useState<string>();

  return (
    <div className="flex justify-center items-center h-screen w-full bg-slate-100">
      <div className="w-[30%] h-[55%] bg-white rounded-xl">
        <h1 className="mb-4 text-[20px] font-semibold ml-7 mt-2">Sign up</h1>
        <form className=" flex flex-col mb-2">
          <input
            type="email"
            required
            placeholder="Enter email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded-md h-[45px] pl-2 w-[400px] mb-4 ml-7"
          />
          <input
            type="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border rounded-md h-[45px] pl-2 w-[400px] mb-4 ml-7"
          />
          <input
            value={phonenumber}
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
            required
            className="border rounded-md h-[45px] pl-2 w-[400px] mb-4 ml-7"
            placeholder="Enter phone number"
          />
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
            placeholder="Enter Address"
            className="border rounded-md h-[45px] pl-2 w-[400px] mb-4 ml-7"
          />
          <button className="h-[45px] w-[400px] text-center rounded-md bg-black text-white font-semibold ml-7">
            sign up
          </button>
        </form>
        <p className="font-mono text-center">
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
