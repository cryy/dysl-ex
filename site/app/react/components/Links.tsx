import { Grid, Button, Box, Link } from "@material-ui/core";
import React from "react";

export default function Links() {
    return (
        <Box
            sx={{
                margin: "12vh 0 1vh",
                display: "flex",
                width: "100%",
            }}
        >
            <Grid item xs={1} />
            <Grid
                item
                xs={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link href="http://hud.hr" target="_blank">
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            width: "340px",
                            height: "240px",
                        }}
                    >
                        Hrvatska udruga za disleksiju
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={2} />
            <Grid
                item
                xs={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link
                    href="https://www.understood.org/en/learning-thinking-differences/child-learning-disabilities/dyslexia/great-quotes-about-dyslexia"
                    target="_blank"
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            width: "340px",
                            height: "240px",
                        }}
                    >
                        Kako je ljudima sa disleksijom?
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={1} />
        </Box>
    );
}
