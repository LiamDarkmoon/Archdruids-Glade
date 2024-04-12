export default function CardText({ className, children } : { className?: string, children: React.ReactNode }) {
  return (
    <p className={className}>
      { children }
    </p>
  )
};
