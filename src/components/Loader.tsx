export function Loader() {
  return (
    <div className="relative flex h-16 w-32 items-center justify-center overflow-hidden rounded-2xl bg-surface/80 p-2 shadow-glass">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/10" />
      <div className="flex w-full gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-3 flex-1 rounded-full bg-gradient-to-r from-accent to-accent2"
            style={{
              backgroundSize: '200% 100%',
              animation: 'dash-move 1.6s linear infinite',
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
