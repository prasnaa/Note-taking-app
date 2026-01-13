// lib/auth.ts

export type User = {
  email: string
  password: string
}

// Save user in browser
export const saveUser = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user))
}

// Get user from browser
export const getUser = (): User | null => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

// Check login
export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem("user")
}

// Logout
export const logoutUser = () => {
  localStorage.removeItem("user")
}
