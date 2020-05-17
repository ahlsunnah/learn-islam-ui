import React, { ReactNode } from 'react'
import { AuthContext, useAuth } from 'services/auth'

type PropTypes = {
  children: ReactNode
}

export default function AuthWrapper({ children }: PropTypes) {
  const authObject = useAuth()
  return <AuthContext.Provider value={{ user: authObject }}>{children}</AuthContext.Provider>
}
