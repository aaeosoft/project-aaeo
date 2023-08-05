import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="enter">
      <div className="first">
        <h2 className="text-2xl font-bold mb-6">Giriş Yap</h2>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            E-posta Adresiniz
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-posta adresi"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Şifre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Şifrenizi girin"
          />
        </div>
        <div className="mb-4 flex justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              id="acceptTerms"
            />
            <label
              className="text-gray-700 text-sm font-bold"
              htmlFor="acceptTerms"
            >
              Oturum açık kalsın
            </label>
          </div>
          <div className="text-xs hover:underline text-blue-400 cursor-pointer">
            Şifremi unuttum
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            E-posta ile giriş yap
          </button>
          <div className="text-center">
            <span className="text-gray-500 text-sm">
              Henüz hesabın yok mu?{" "}
              <Link className="hover:underline" href="/register">
                Hesap aç
              </Link>
            </span>
          </div>
          <div className="text-center">
            <span className="text-gray-500 text-sm">VEYA</span>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Google ile giriş yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
