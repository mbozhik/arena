import Container from '~/Global/Container'
import Hero from '~~/index/Hero'
import Partners from '~~/index/Partners'

export default function IndexPage() {
  return (
    <>
      <Hero />

      <Container className="pt-20">
        <Partners />
      </Container>
    </>
  )
}
