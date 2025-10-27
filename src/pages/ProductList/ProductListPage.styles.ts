import {Card, Grid, styled, TextField} from "@mui/material";
import { Link } from "react-router-dom";

export const SearchInput = styled(TextField)(({theme}) => ({
    marginBottom: theme.spacing(4),
    width: '50rem',
    marginRight: 'auto',
    color: theme.palette.primary.main,
}));

export const GridContainer = styled(Grid)(({theme}) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: theme.spacing(2),
}))

export const ProductCard = styled(Card)(({theme}) => ({
    height: '100%',
    '&:hover': {
        boxShadow: theme.shadows[3],
        transform: 'scale(1.03)',
        transition: 'transform 0.3s ease',
    },

    '& img': {
        marginBottom: theme.spacing(2),
    },

    '& .MuiTypography-h4': {
        marginBottom: theme.spacing(1),
        color: theme.palette.primary.main,
    },



}))

export const CardLink = styled(Link)(() => ({
    textDecoration: 'none',
    display: 'inline-block',
    height: '100%',
}))