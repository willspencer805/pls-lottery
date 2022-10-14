import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import Faqs from '../components/Faqs'
import Amount from '../components/Amount'
import styles from '../styles/Home.module.css'
import SubmitButton from '../components/SubmitButton'
import Welcome from '../components/Welcome'
import Features from '../components/Features'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Welcome />
      <Features />
      <Amount />
      <Faqs />
      {/* <Team /> */}
    </>
  )
}
export default Home
