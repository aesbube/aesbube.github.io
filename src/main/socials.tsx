import Item from "../components/item"
import Row from "../components/row"
import Github from "../icons/github_icon";
import Linkedin from "../icons/linkedin_icon";
import Discord from "../icons/discord_icon";
import Icon from "../components/icon";
import { useState } from "react";
import { Tooltip } from "@mui/material";


const Socials = () => {
    const [discordUsername] = useState('aesbube');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(discordUsername).then(() => {
            alert('Discord username copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <Row sx={{
            marginTop: '10px',
        }}>
            <Tooltip title="Github">
                <Item>
                    <Icon href="https://github.com/aesbube">
                        <Github />
                    </Icon>
                </Item>
            </Tooltip>
            <Tooltip title="LinkedIn">
                <Item>
                    <Icon href="https://www.linkedin.com/in/ljubicadamjanovikj/">
                        <Linkedin />
                    </Icon>
                </Item>
            </Tooltip>
            <Tooltip title="Disocrd">
                <Item onClick={copyToClipboard} sx={{ cursor: 'pointer', width: '44px', height: '44px', }}>
                    <Discord />
                </Item>
            </Tooltip>
            
        </Row>
    );
};

export default Socials;