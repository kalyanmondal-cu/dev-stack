import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { StackPanel } from "./components/StackPanel";
import { TechnologyCard } from "./components/TechnologyCard";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadTechnologies = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Unable to load technology data.");
        }

        const data: Technology[] = await response.json();

        if (active) {
          setTechnologies(data);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Something went wrong.");
          toast.error("Could not load the technology list.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadTechnologies();

    return () => {
      active = false;
    };
  }, []);

  const selectedIds = useMemo(
    () => new Set(stack.map((technology) => technology.id)),
    [stack],
  );

  const addToStack = (technology: Technology) => {
    if (selectedIds.has(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technology: Technology) => {
    setStack((current) =>
      current.filter((item) => item.id !== technology.id),
    );
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) return;

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />

        <section
          id="technologies"
          className="scroll-mt-20 border-t border-slate-50"
        >
          <div className="mx-auto max-w-[1080px] px-5 pb-2 pt-9 lg:px-0">
            <div className="mb-6">
              <h2 className="text-[27px] font-extrabold tracking-[-0.035em] text-slate-900">
                Explore the <span className="gradient-text">Technologies</span>
              </h2>
              <p className="mt-1 text-[11px] text-slate-400">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {loading ? (
              <div className="flex min-h-[420px] items-center justify-center">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="loading loading-spinner loading-sm text-pink-500" />
                  Loading technologies...
                </div>
              </div>
            ) : error ? (
              <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-sm text-red-500">
                {error}
              </div>
            ) : (
              <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_190px]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      selected={selectedIds.has(technology.id)}
                      onAdd={addToStack}
                    />
                  ))}
                </div>

                <StackPanel
                  stack={stack}
                  onRemove={removeFromStack}
                  onRemoveAll={removeAll}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
