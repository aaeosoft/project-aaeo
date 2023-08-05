import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="enter">
      <div className="first">
        <h2 className="text-2xl font-bold mb-6">Hesap Aç</h2>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            E-posta Adresi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-posta adresi"
          />
        </div>
        <div className="mb-6 flex gap-1">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              Ad
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Ad"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Soyad
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Soyad"
            />
          </div>
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
            placeholder="Şifre"
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            id="acceptTerms"
          />
          <label
            className="text-gray-700 text-sm font-bold"
            htmlFor="acceptTerms"
          >
            Bireysel Hesap Sözleşmesi ve Ekleri`ni kabul ediyorum.
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            id="acceptMarketing"
          />
          <label
            className="text-gray-700 text-sm font-bold"
            htmlFor="acceptMarketing"
          >
            İletişim bilgilerime kampanya, tanıtım ve reklam içerikli ticari
            elektronik ileti gönderilmesine, bu amaçla kişisel verilerimin
            işlenmesine ve tedarikçilerinizle paylaşılmasına izin veriyorum.
          </label>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Hesap Aç
          </button>
          <div className="text-center">
            <span className="text-gray-500 text-sm">
              Zaten hesabın var mı?{" "}
              <Link className="hover:underline" href="/login">
                Giriş yap
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
            Google ile hesap aç
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
