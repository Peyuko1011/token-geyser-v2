// put in a component instead of its own asset file, because we need tailwind classes
const ButtonSpinner = () => (
  <svg fill="none" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
)

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export const Button: React.FC<Props> = (props) => {
  const { isLoading, children } = props
  return (
    <button type="button" {...props}>
      {isLoading && <ButtonSpinner />}
      {children}
    </button>
  )
}
