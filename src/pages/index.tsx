import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import AboutComponent from "../components/About";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
  <div>
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">LÚNS Network</Header>
        <Header inverted as="h2">Web | Mobile | App Development</Header>
        <Button primary size="huge">Get started!</Button>
      </Container>
    </Segment>

    <Segment vertical className="stripe bg-lightblue">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8" className="whitebox">
            <Header>What do we do?</Header>
            <p>Developing applications for You.</p>
            <Header>Which kind of applications?</Header>
            <p>Web and Mobile applications using the best technologies suitable for given business type.</p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            <Header>« Achieving our goals »</Header>
            <p>
              We prioritize a feel for the cross-platform and hybrid applications,
              taking the time to lock down a consistent functionality and responsiveness
              between platforms and app versions. Our goal is to improve and create
              tools of our customers by ensuring that technology meets their needs.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Identifying Needs
            </Header>
            <p>We accurately identify your needs with analyzes and technological solutions.</p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Strategic System Analysis
            </Header>
            <p>We do our researches, and we plan the most suitable system.</p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Visual Design
            </Header>
            <p>We make Responsive and Flat designs that match all screen sizes and resolutions.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Our clients */}
    <Segment vertical className="stripe bg-lightblue">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="6">
            <Header>Let's develop application together.</Header>
            <p>info@lunsnetwork.com</p>
            <p>+90 553 912 26 92</p>
          </Grid.Column>
          <Grid.Column width="8" floated="right">
            <Header>Let's develop application together.</Header>
            <p>info@lunsnetwork.com</p>
            <p>+90 553 912 26 92</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  </div>;

export default withLayout(IndexPage);
