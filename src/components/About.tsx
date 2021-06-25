import * as React from "react";
import { withLayout, LayoutProps, menuItems } from "./Layout";
import { connect } from "react-redux";
import {
    Button,
    Segment,
    Container,
    Grid,
    Header,
    Icon,
} from "semantic-ui-react";

export const AboutComponent = () =>
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
    </Segment>;

export default connect()(AboutComponent);
