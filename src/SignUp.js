import { Container, Grid, TextField, Typography, Button, Link } from "@material-ui/core";
import React from "react";
import { signup } from "./service/ApiService";


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();        
        
        const data = new FormData(event.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password")

        signup({
            email: email,
            username: username,
            password: password
        }).then(
            response => {
                console.log(response);
                window.location.href = "/login";
            }
        )

    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
                <form noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">
                                Create Account
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                autoComplete="fname"
                                name="username"
                                required
                                fullWidth
                                id="username"
                                label="사용자 이름"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="이메일 주소"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                required
                                fullWidth
                                variant="outlined"
                                id="password"
                                name="password"
                                type="password"
                                label="비밀번호"
                                autoComplete="current-password"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >계정 생성</Button>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                이미 계정이 있습니까? 로그인하세요.
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        )
    }
}

export default SignUp;