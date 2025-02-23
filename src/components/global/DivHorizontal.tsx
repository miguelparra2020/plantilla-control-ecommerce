import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

const DivHorizontal = ({ children }: ContainerProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[94%] sm:w-[94%] md:w-[94%] lg:w-[94%] text-center flex items-center justify-center flex-row gap-4 flex-wrap">
        {children}
      </div>
    </div>
  );
};

export default DivHorizontal
