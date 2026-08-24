import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <div className="glass ice-edge w-full p-10">
        <div className="text-6xl">◈</div>
        <h1 className="ice-text mt-4 text-4xl font-black">404 · Signal Lost</h1>
        <p className="mt-3 text-sm text-[color:var(--muted)]">
          This node is not in the omni-sphere. ဤစာမျက်နှာ မတွေ့ရှိပါ။
        </p>
        <Link href="/" className="frost-btn mt-6">
          ← Return to the sphere
        </Link>
      </div>
    </div>
  );
}
