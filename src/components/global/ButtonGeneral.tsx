import IconGeneral from "./IconGeneral"

const ButtonGeneral = ({
  as = "button", // Puede ser <button> o <a>
  href = "/", // URL en caso de <a>
  target = "_self", // Opcional para <a>
  onClick = () => {}, // Evento de clic
  className = "",
  children = "Default",
  type = "button" as React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
  iconActive = false,
  iconColor = "currentColor",
  iconSize = "20",
}) => {
  
  const mergedClass = `${className}`

  const icon = iconActive && <IconGeneral color={iconColor} size={iconSize} className="ml-2" />

  if (as === "a") {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : ""} className={mergedClass} onClick={onClick}>
        {children} {icon}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={mergedClass}>
      {children} {icon}
    </button>
  )
}

export default ButtonGeneral