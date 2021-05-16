import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Download from "./Download";
import Links from "./Links";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function Wrapper() {
    return (
        <Grid container spacing={0}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Grid container spacing={0}>
                    <Title />
                    <Subtitle />
                    <Download />
                    <Links />
                </Grid>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}
