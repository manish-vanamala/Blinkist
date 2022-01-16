
import './typography.css'
type TypographysProps = {
    variant:string,
    content:string
}
export default function Typographys({variant,content}:TypographysProps) {
    return (
        <div className={variant}>{content}</div>
    )
}
