import {Box, Container, Stack, styled, Typography} from "@mui/material";

export const PageContainer = styled(Container)(({theme}) => ({
    maxWidth: '1400px',
    marginTop: theme.spacing(4),
}))

export const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
}))

export const ContentWrapper = styled(Stack)(() => ({
    alignItems: 'start',
}))

export const PageTitle = styled(Typography)(({theme}) => ({
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
}));