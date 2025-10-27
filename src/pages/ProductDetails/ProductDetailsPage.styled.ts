import {Box, Card, styled, Typography} from "@mui/material";

export const ProductDetailsCard = styled(Card)(({theme}) => ({
    padding: theme.spacing(4),
    width: '100%',
    display: 'flex',

    '& .MuiCardMedia-root': {
        height: '600px',
        borderRadius: theme.spacing(1),
        objectFit: 'cover',
        marginRight: theme.spacing(4),
    },

    '& .MuiCardContent-root': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
    },
}))

export const ProductName = styled(Typography)(({theme}) => ({
    fontSize: '3.2rem',
    fontWeight: 500,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    textAlign: 'start',
}));

export const ProductPrice = styled(Typography)(({theme}) => ({
    fontSize: '2.4rem',
    fontWeight: 500,
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(3),
}));

export const ProductDescription = styled(Typography)(({theme}) => ({
    fontSize: '1.6rem',
    lineHeight: 1.6,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    textAlign: 'start',
}));

export const ProductCategory = styled(Typography)(({theme}) => ({
    fontSize: '1.4rem',
    color: theme.palette.text.secondary,
}));


export const ReviewsSection = styled(Box)(({theme}) => ({
    marginTop: theme.spacing(4),
    width: '100%',
}));

export const ReviewsTitle = styled(Typography)(({theme}) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: '2rem',
    fontWeight: 500,
}));

export const ReviewItem = styled(Typography)(({theme}) => ({
    margin: theme.spacing(2, 0),
    borderRadius: theme.spacing(1),
}));

export const ReviewAuthor = styled('strong')(({theme}) => ({
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
}));

