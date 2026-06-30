import { APP_NAME } from "@applicantos/shared";
import { Button } from "@applicantos/ui";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Repository bootstrap
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          {APP_NAME}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Enterprise foundation for the AI-powered Career Operating System.
        </p>
        <div className="mt-8">
          <Button>Development ready</Button>
        </div>
      </section>
    </main>
  );
}
