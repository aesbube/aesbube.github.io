/* eslint-disable react/react-in-jsx-scope */
import Column from "../components/column"
import Item from "../components/item"
import Welcome from "../content/welcome"
import Name from "../content/name"
import Age from "../content/age"
import Place from "../content/place"
import Introduction from "../content/introduction"
import Socials from "../content/socials"

const About = () => {
    return(
        <Column>
            <Item>
                <Name />
            </Item>
            <Item>
                <Welcome />
            </Item>
            <Item>
                <Age />
            </Item>
            <Item>
                <Place />
            </Item>
            <Item>
                <Introduction />
            </Item>
            <Item>
                <Socials />
            </Item>
        </Column>
    );
};

export default About;