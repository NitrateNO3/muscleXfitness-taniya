import TopBar from './TopBar.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import FloatingActions from './FloatingActions.jsx'
import ScrollCue from './ScrollCue.jsx'

/** Shared chrome for every page. `activePage` highlights the matching nav link. */
export default function Layout({ activePage, children }) {
  return (
    <>
      <TopBar />
      <Nav activePage={activePage} />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
      <ScrollCue />
    </>
  )
}
