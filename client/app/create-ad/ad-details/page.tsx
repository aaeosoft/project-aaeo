import InputTextArea from "@/components/InputTextArea";
import InputRadioArea from "@/components/InputRadioArea";
import SelectDropDown from "@/components/SelectDropDown";
import React from "react";

const AdDetails = () => {
  return (
    <div className="enter flex-col">
      <div className="w-[1115px]">
        <div className="font-bold">İlan Detayları</div>
        <div className="page-area mt-2">
          <div>
            <InputTextArea title="İlan Başlığı*" />
          </div>
          <div>
            <InputTextArea title="Açıklama*" type={"area"} />
          </div>
        </div>

        <div className="mt-10">
          <div className="font-bold">Adres Bilgileri</div>
          <div className="page-area mt-2">
            <div className="flex flex-row p-2 gap-4">
              <div className="w-1/3">
                <SelectDropDown title="İl" />
              </div>
              <div className="w-1/3">
                <SelectDropDown title="İlçe" />
              </div>
              <div className="w-1/3">
                <SelectDropDown title="Mahalle" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="font-bold">İletişim Bilgileri</div>
          <div className="page-area mt-2">
            <div className="p-4">
              <div className="font-semibold">Size nasıl ulaşılsın?</div>
              <div className="flex flex-col justify-center items-center my-4">
                <InputRadioArea />
                <div className="border mt-4 p-4">
                  <ul className="text-xs flex flex-col gap-y-4">
                    <li className="grid grid-cols-3 border-b pb-2">
                      <div>Adı Soyadı</div>
                      <div>Abdurrahim Gayretli</div>
                    </li>
                    <li className="grid grid-cols-3 border-b pb-2">
                      <div>Cep Telefonu</div>
                      <div>05385462899</div>
                    </li>
                    <li className="p-blue-400 cursor-pointer hover:underline">
                      <div>İletişim bilgilerini değiştir</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 justify-end gap-4">
          <div className="flex py-2 px-4 shadow-md bg-white justify-center items-center gap-2">
            <input type="checkbox" />
            <div className="text-sm flex gap-1">
              <div className="text-blue-400 hover:underline cursor-pointer">
                İlan verme kurallarını
              </div>
              okudum, kabul ediyorum.
            </div>
          </div>
          <button className="bg-blue-400 text-white button shadow-md">
            Devam Et
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
