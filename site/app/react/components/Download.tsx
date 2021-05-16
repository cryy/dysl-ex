import { Grid, Button, Typography } from "@material-ui/core";
import React from "react";

export default function Download() {
    return (
        <Grid
            item
            xs={12}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "13vh 0 0",
                flexDirection: "column",
            }}
        >
            <Button variant="contained" color="primary">
                Instaliraj za Chrome ili Edge
            </Button>
            <Typography>*dysl-ex radi sa svim chromium browserima</Typography>
        </Grid>
    );
}
