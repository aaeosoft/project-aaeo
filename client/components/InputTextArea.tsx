"use client"
import dynamic from "next/dynamic";
import React from "react";

import 'react-quill/dist/quill.snow.css';

const ReactSSRQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

type Props = {
  title: string;
  type?: string;
};

const InputTextArea = ({ title, type }: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 mt-2 mb-4">
      <div className="text-sm font-semibold">{title}</div>
      {type === "area" ? (
        <ReactSSRQuill theme="snow"></ReactSSRQuill>
      ) : (
        <input
          className={
            "h-12 border p-2 focus:border-blue-200 focus:outline-none focus:ring-1"
          }
        ></input>
      )}
    </div>
  );
};

export default InputTextArea;
