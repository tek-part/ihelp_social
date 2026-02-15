type Props = {
  label: string
  value: string
}

export const StatPill = ({ label, value }: Props) => (
  <div className="flex items-center gap-3 rounded-lg border border-border bg-surface-elevated px-4 py-3">
    <div className="text-lg font-semibold text-heading">{value}</div>
    <div className="text-sm text-muted">{label}</div>
  </div>
)
