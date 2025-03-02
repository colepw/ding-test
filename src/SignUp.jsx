import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client (replace with actual environment variables)
// const SUPABASE_URL = "YOUR_SUPABASE_URL"; // Replace with your Supabase URL
// const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY"; // Replace with your Supabase Anon Key

// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;
    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    await supabase.from("users").insert([{ id: user.id, name, email, profile_picture: null }]);

    alert("You're Signed Up!");
    window.location.href = "/home";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="/images/ding_dark_logo_final.png" alt="Logo" className="w-40 mb-4" />

      <p className="text-lg text-gray-700 mb-4">By Dingers...For Dingers🛎️</p>

      <form onSubmit={handleSubmit} className="bg-purple-700 text-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 text-lg">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-900"
          required
        />

        <label className="block mb-2 text-lg">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-900"
          required
        />

        <label className="block mb-2 text-lg">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-900"
          required
        />

        <button type="submit" className="w-full bg-white text-purple-700 font-bold py-2 px-4 rounded hover:bg-gray-200">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
}
