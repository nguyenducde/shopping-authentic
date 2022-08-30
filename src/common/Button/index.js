import { NavLink } from 'react-router-dom'

export function ButtonLink({ children, to, className }) {
    return (
        <NavLink to={to} className={className}>
            {children}
        </NavLink>
    )
}

export function ButtonNoLink({ children, className, onClick }) {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    )
}
