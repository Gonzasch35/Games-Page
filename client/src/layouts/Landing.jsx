import { Outlet } from 'react-router-dom'

const Landing = () => {
  return (
    <>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Landing