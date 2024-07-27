import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted={true} fixed='top'>
      <Container>
        <MenuItem header>
          <img src="/logo.png" alt="logo" />
          What's On
        </MenuItem>
        <MenuItem name='Events' />
        <MenuItem>
          <Button floated='right' color='orange'  content='Create event'/>
        </MenuItem>
        <MenuItem position='right'>
          <Button basic inverted content='Login' />
          <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
        </MenuItem>
      </Container>
    </Menu>
  )
}
