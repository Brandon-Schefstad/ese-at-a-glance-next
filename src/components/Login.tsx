import { signIn, signOut, useSession } from 'next-auth/react'

export default function Component() {
	const { data: session, status } = useSession()
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut({ callbackUrl: 'localhost:3000/' })}>
					Sign out
				</button>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<button
				onClick={() =>
					signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
				}>
				Sign in
			</button>
		</>
	)
}
