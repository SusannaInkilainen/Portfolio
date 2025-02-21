const Button = ({className, href, onClick, children}) => {
    const classes = `button relative inline-flex items-center justify-center text-white ${className || ""}`

    const spanClasses = "relative z-10"

    // Pelkän napin renderöinti
    const renderButton = () => {
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
        </button>
    }

    // Renderöi napin, jossa on linkki
    const renderLink = () => {
        <a href={href} className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
        </a>
    }
    return href ? renderLink() : renderButton();
}
export default Button
