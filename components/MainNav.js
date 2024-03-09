import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNav = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.search.value;
    router.push(`/artwork?title=true&q=${searchQuery}`);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top" className="navbar-dark">
        <Navbar.Brand>Ali Keshavarzi</Navbar.Brand>
        <Nav className="mr-auto">
          <Link passHref legacyBehavior href="/"><Nav.Link>Home</Nav.Link></Link>
          <Link passHref legacyBehavior href="/search"><Nav.Link>Advanced Search</Nav.Link></Link>
        </Nav>
        <Form inline onSubmit={handleSubmit} className="d-flex">
          <FormControl type="text" placeholder="Search" name="search" />
          <Button type="submit" variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <div style={{ height: '56px' }} />
    </>
  );
};

export default MainNav;
