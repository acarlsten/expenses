import React from 'react'
import ReactDOM from 'react-dom'

const Info = props => (
  <div>
    <h1>Hi there!</h1>
    <p>The info is: {props.info}</p>
    <p>Another detail: {props.detail}</p>
  </div>
)

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to see component!</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="this is the detail" detail="farto" />,
//   document.getElementById('app')
// )

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="this is the detail" detail="farto" />,
  document.getElementById('app')
)
