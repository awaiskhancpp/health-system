import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function AuthForm({ isLogin }: { isLogin: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  

  // Automatically detect role from URL path
  const role = location.pathname.split("/")[1] || "patient"; 
  const handleSubmit = async () => {
    const endpoint = isLogin ? `/api/auth/${role}/login` : `/api/auth/${role}/register`;
    const payload = isLogin ? { email, password } : { name, email, password };
    console.log(payload)
    try {
      const response=await axios.post(`http://localhost:3000${endpoint}`,payload)
      // const response = await fetch(endpoint, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      // const data = await response.json();
      // console.log(response)

      if (isLogin && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate(`/${role}/dashboard`);
      } else if (!isLogin && response.data.message === "User registered") {
        navigate(`/${role}/login`);
      }else {
        console.log(response)
      }
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Response error:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
      } else {
        // Something else happened
        console.error('Error:', error.message);
      }
    }
    
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h1>
        {!isLogin && (
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        )}
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit}>{isLogin ? "Login" : "Register"}</Button>
        <p className="mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate(isLogin ? `/${role}/register` : `/${role}/login`)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export function Login() {
  return <AuthForm isLogin={true} />;
}

export function Register() {
  return <AuthForm isLogin={false} />;
}