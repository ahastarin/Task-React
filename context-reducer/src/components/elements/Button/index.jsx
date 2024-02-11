const Button = ({ children, variant, onClick }) => {
    return (
        <button className={`font-bold border rounded-md ${variant} p-2 text-white`} onClick={onClick}>{children}</button>
    )
}

export default Button