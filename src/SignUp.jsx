import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client (replace with actual environment variables)
// const SUPABASE_URL = "YOUR_SUPABASE_URL"; // Replace with your Supabase URL
// const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY"; // Replace with your Supabase Anon Key

// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src="/images/ding_dark_logo_final.png" alt="Logo" className="w-40 mb-4" />

      <p className="text-lg text-gray-700 mb-4">By Dingers...For Dingers🛎️</p>

      <form className="bg-purple-700 text-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
        <label className="text-lg">Name:</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded text-gray-900" required />

        <label className="text-lg">Email:</label>
        <input type="email" className="w-full p-2 border border-gray-300 rounded text-gray-900" required />

        <label className="text-lg">Password:</label>
        <input type="password" className="w-full p-2 border border-gray-300 rounded text-gray-900" required />

        <button type="submit" className="w-full bg-white text-purple-700 font-bold py-2 px-4 rounded hover:bg-gray-200">
          Sign Up
        </button>
      </form>
    </div>
  );
}

