import type { NextPage } from 'next'
import Faqs from '../components/home/Faqs'
import Amount from '../components/home/Amount'
import Welcome from '../components/home/Welcome'
import Features from '../components/home/Features'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Welcome />
      <Features />
      <Amount />
      <Faqs />
    </>
  )
}
export default Home
