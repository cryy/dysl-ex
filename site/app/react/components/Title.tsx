import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Title() {
    return (
        <Grid
            item
            xs={12}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "15vh 0 0",
            }}
        >
            <Typography
                sx={{
                    fontSize: "2em",
                }}
            >
                Dysl-ex
            </Typography>
        </Grid>
    );
}
