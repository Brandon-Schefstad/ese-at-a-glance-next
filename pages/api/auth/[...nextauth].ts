import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '../../../lib/mongodb'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
	],
	adapter: MongoDBAdapter(clientPromise),
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		// signIn: '/',
		// signOut: '/',
		// 	error: '/auth/error', // Error code passed in query string as ?error=
		// 	verifyRequest: '/auth/verify-request', // (used for check email message)
		// 	newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
	},
	callbacks: {
		// async signIn({ user, account, profile, email, credentials }) {
		// 	return '/home'
		// },
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith('/')) return `${baseUrl}${url}`
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url
			return baseUrl
		},
		// async session({ session, token, user }) {
		// 	return '/test'
		// },
		// async jwt({ token, user, account, profile, isNewUser }) {
		// 	return token
		// },
	},
	events: {
		async signIn(message) {
			/* on successful sign in */
		},
		async signOut(message) {
			/* on signout */
		},
		async createUser(message) {
			/* user created */
		},
		async updateUser(message) {
			/* user updated - e.g. their email was verified */
		},
		async linkAccount(message) {
			/* account (e.g. Twitter) linked to a user */
		},
		async session(message) {
			/* session is active */
		},
	},
})
