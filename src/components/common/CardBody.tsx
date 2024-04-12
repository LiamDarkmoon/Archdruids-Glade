export default function CardBody({ className, children } : { className?: string, children: React.ReactNode}) {
  return (
    <div className={ className }>
      { children }
    </div>
  )
};