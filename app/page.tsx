import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>
        Main page
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </main>
  );
}
