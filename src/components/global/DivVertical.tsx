import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

const DivVertical = ({ children }: ContainerProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[94%] sm:w-[80%] md:w-[70%] lg:w-[70%] text-center p-4 flex items-center justify-center flex-col flex-wrap">
        {children}
      </div>
    </div>
  )
}

export default DivVertical
