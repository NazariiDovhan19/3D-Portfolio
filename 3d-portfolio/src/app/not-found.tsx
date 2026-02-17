import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-muted-foreground">Oops, this page does not exist.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Back to home
      </Link>
    </main>
  );
};

export default NotFoundPage;
