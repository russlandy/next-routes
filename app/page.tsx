import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <h1>Test next routing</h1>
        </div>
      </div>

      <div>
        <p className="mt-8 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          tempore maiores laboriosam quidem vero itaque assumenda cupiditate
          nobis quae illo ipsa placeat beatae facilis obcaecati, atque provident
          sint, error voluptas!
        </p>
      </div>
    </main>
  );
}
