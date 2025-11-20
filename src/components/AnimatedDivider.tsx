export function AnimatedDivider() {
  return (
    <div className="relative my-8 h-[1px] overflow-hidden rounded-full bg-white/10">
      <div className="absolute inset-0 w-1/2 animate-dash-move bg-gradient-to-r from-accent via-accent2 to-accent3" />
    </div>
  )
}
