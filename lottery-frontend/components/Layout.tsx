import Nav from './Nav'
import Container from './Container'

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Nav />

      <Container>{children}</Container>
    </>
  )
}
