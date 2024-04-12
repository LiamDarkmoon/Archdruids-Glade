export default function CardTitle({ className, children } : { className?: string, children: React.ReactNode }) {
  return (
    <h2 className={ className }>
      { children }
    </h2>
  )
};