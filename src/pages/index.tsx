import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import AboutComponent from "../components/About";
import IconDev from "../assets/development.inline.svg";
import IconMail from "../assets/mail.inline.svg";
import IconPhone from "../assets/phone.inline.svg";
import * as MainPage from "../../public/page-data/index/main-page.json";
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
            <p>💡 Developing applications for You.</p>
            <Header>Which kind of applications?</Header>
            <p>💡 Web and Mobile applications using the best technologies suitable for given business type.</p>
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

    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          {
            MainPage.lifecycle.map((data: any, index: any) => {
              return (
                <Grid.Column>
                  {/*<li key={`content_item_${index}`}>{data.item}</li>*/}
                  <Header icon>
                    <Icon name="wizard"></Icon>
                    {data.title}
                  </Header>
                  <p>{data.text}</p>
                </Grid.Column>
              )
            })
          }
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical className="stripe bg-lightblue">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="5" className="text-center">
            <IconDev className="mainpage-icondev" />
          </Grid.Column>
          <Grid.Column width="9" floated="right">
            <Header className="mainpage-heading-big">Let's develop application together.</Header>
            <p>
              <a
                href="mailto:info@lunsnetwork.com"
                aria-label="Email"
                rel="noopener noreferrer"
                className="mainpage-contactlink"
              >
                <IconMail className="mainpage-iconcontact" />info@lunsnetwork.com
              </a>
            </p>
            <p>
              <a
                href="tel:+905539122692"
                aria-label="Email"
                rel="noopener noreferrer"
                className="mainpage-contactlink"
              >
                <IconPhone className="mainpage-iconcontact" />+90 553 912 26 92
              </a>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
