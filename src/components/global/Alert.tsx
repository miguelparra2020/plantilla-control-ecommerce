interface IPropsAlert {
    color?: string
    children?: React.ReactNode
}
export const Alert = ({ color = "gray", children }: IPropsAlert) => {
    const styleAlert1 = "p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50"
    const styleAlert2 = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
    const styleAlert3 = "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
    const styleAlert4 = "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50"
    const styleAlert5 = "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50"
    const styleAlert6 = "p-4 mb-4 text-sm text-indigo-800 rounded-lg bg-indigo-50"
    const styleAlert7 = "p-4 mb-4 text-sm text-pink-800 rounded-lg bg-pink-50"
    const styleAlert8 = "p-4 mb-4 text-sm text-purple-800 rounded-lg bg-purple-50"
    const styleAlert9 = "p-4 mb-4 text-sm text-teal-800 rounded-lg bg-teal-50"
    const styleAlert10 = "p-4 mb-4 text-sm text-orange-800 rounded-lg bg-orange-50"
    const styleAlert11 = "p-4 mb-4 text-sm text-lime-800 rounded-lg bg-lime-50"
    const styleAlert12 = "p-4 mb-4 text-sm text-cyan-800 rounded-lg bg-cyan-50"
    const styleAlert13 = "p-4 mb-4 text-sm text-rose-800 rounded-lg bg-rose-50"
    const styleAlert14 = "p-4 mb-4 text-sm text-emerald-800 rounded-lg bg-emerald-50"
    const styleAlert15 = "p-4 mb-4 text-sm text-fuchsia-800 rounded-lg bg-fuchsia-50"
    const styleAlert16 = "p-4 mb-4 text-sm text-sky-800 rounded-lg bg-sky-50"
    const styleAlert17 = "p-4 mb-4 text-sm text-amber-800 rounded-lg bg-amber-50"
    const styleAlert18 = "p-4 mb-4 text-sm text-violet-800 rounded-lg bg-violet-50"
    const styleAlert19 = "p-4 mb-4 text-sm text-neutral-800 rounded-lg bg-neutral-50"
    const styleAlert20 = "p-4 mb-4 text-sm text-stone-800 rounded-lg bg-stone-50"
    const styleAlert = color === "gray" ? styleAlert1 : color === "red" ? styleAlert2 : color === "green" ? styleAlert3 : color === "yellow" ? styleAlert4 : color === "blue" ? styleAlert5 : color === "indigo" ? styleAlert6 : color === "pink" ? styleAlert7 : color === "purple" ? styleAlert8 : color === "teal" ? styleAlert9 : color === "orange" ? styleAlert10 : color === "lime" ? styleAlert11 : color === "cyan" ? styleAlert12 : color === "rose" ? styleAlert13 : color === "emerald" ? styleAlert14 : color === "fuchsia" ? styleAlert15 : color === "sky" ? styleAlert16 : color === "amber" ? styleAlert17 : color === "violet" ? styleAlert18 : color === "neutral" ? styleAlert19 : color === "stone" ? styleAlert20 : styleAlert1

    return(
            <div className={styleAlert} role="alert">
                <span className="font-medium">{children}</span>                 
              </div>
    )

}