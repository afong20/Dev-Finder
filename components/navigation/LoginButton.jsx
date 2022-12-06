import Link from 'next/link'
function LoginButton({className, ...props}) {
    return (
        <Link href="signin" className={`hidden ${className}`}>
            login
        </Link>
    )
}

export default LoginButton;