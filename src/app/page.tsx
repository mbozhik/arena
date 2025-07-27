import Container from '~/Global/Container'
import Hero from '~~/index/Hero'
import Partners from '~~/index/Partners'

export default function IndexPage() {
  return (
    <>
      <Hero />

      <Container offset={false} className="pt-20 xl:pt-16">
        <Partners />
      </Container>
    </>
  )
}
