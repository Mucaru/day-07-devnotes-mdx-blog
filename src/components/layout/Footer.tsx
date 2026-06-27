export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {currentYear} DevNotes by{" "}
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            Mucaru
          </span>
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          Day 07 / 100 Days 100 Web Apps
        </p>
      </div>
    </footer>
  );
}