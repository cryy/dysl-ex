import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Subtitle() {
    return (
        <Grid
            item
            xs={12}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "5vh 0 0",
            }}
        >
            <Typography
                sx={{
                    fontSize: "1.5em",
                }}
            >
                Pomoćni extension za ljude sa disleksijom
            </Typography>
        </Grid>
    );
}
