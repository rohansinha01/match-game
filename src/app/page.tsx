
// const colors1 = ["red", "blue", "green", "purple"]

import Input from "./components/Input";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <div className="flex space-x-5">
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
      <div className="flex space-x-5">
      <Input />
      <Input />
      <Input />
      <Input />
      </div>
    </div>
  );
}
