import type { NextPage } from 'next'
import Welcome from '../components/enter/Welcome'
import Amount from '../components/enter/Amount'
import Ticket from '../components/enter/Ticket'

const Enter: NextPage = () => {
  return (
    <>
      <Welcome />
      <Ticket />
      <Amount />
    </>
  )
}
export default Enter
