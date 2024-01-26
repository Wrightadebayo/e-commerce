import { useRouteError } from "react-router-dom"

const ErrorElements = () => {
    const error = useRouteError()
  return (
    <div className="font-bold text-2xl">
      There was an error..
    </div>
  )
}

export default ErrorElements
