import { ModeToggle } from "./mode-toggle";

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="feed-header">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="feed-header-right">
        <ModeToggle />
      </div>
    </header>
  );
}
