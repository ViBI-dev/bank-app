import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { Icon } from "src/components/Icon";
import { TextField } from "src/components/TextField";
import { Button } from "src/components/Button";
import { Link } from "react-router-dom";
import { LoginRegisterSection, LoginRegisterSwitch } from "./LoginRegisterPageBase";

export const LoginPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <LoginRegisterSection>
                <Icon type="Logo" className="logo" />
                <TextField icon="Login" className="field first" placeholder="Email" />
                <TextField icon="Password" className="field" placeholder="Password" />
                <div className="spacer" />
                <LoginRegisterSwitch>
                    Don’t have an account? <Link to="/register">Create one here</Link>
                </LoginRegisterSwitch>
                <Button className="button">Log in</Button>
            </LoginRegisterSection>
        </PageBox>
    );
};
