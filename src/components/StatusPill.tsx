type Status = 'Alpha' | 'Beta' | 'Stable' | 'WIP'

const variants: Record<Status, string> = {
  Alpha: 'from-accent to-accent2 text-white',
  Beta: 'from-warm to-accent text-white',
  Stable: 'from-accent2 to-accent3 text-black',
  WIP: 'from-gray-500 to-gray-700 text-white',
}

export function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`pill bg-gradient-to-r ${variants[status]} border-transparent text-xs text-white shadow-glow`}>
      {status}
    </span>
  )
}
