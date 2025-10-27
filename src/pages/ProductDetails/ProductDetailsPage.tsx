import {useParams, Link as RouterLink} from "react-router-dom";
import {Typography, Button, CardMedia, CardContent} from "@mui/material";
import {useAppSelector} from "../../store/store.ts";
import {PageContainer} from "../../ui/layout.tsx";
import type {FC} from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {
    ProductCategory,
    ProductDescription,
    ProductDetailsCard,
    ProductName,
    ProductPrice, ReviewAuthor, ReviewItem, ReviewsSection, ReviewsTitle
} from "./ProductDetailsPage.styled.ts";

const ProductDetailsPage: FC = () => {
    const {id} = useParams();
    const products = useAppSelector(state => state.products.list);
    const product = products.find(p => p.id === Number(id));

    const ReturnButton = () => (
        <Button component={RouterLink} to="/" sx={{mt: 2}}>
            <KeyboardDoubleArrowLeftIcon/>
            Back to Products
        </Button>
    );
    if (!product) {
        return (
            <PageContainer>
                <Typography variant="h4">Product not found 😢</Typography>
                <ReturnButton/>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <ProductDetailsCard>
                <CardMedia
                    component="img"
                    height="500"
                    image={product.thumbnail}
                    alt={product.name}
                />
                <CardContent>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.price}</ProductPrice>
                    <ProductDescription>{product.longDescription}</ProductDescription>
                    <ProductCategory>Category: {product.category}</ProductCategory>
                </CardContent>
            </ProductDetailsCard>

            <ReviewsSection>
                <ReviewsTitle>Reviews:</ReviewsTitle>
                {product?.reviews && product.reviews.length > 0 ? (
                    product.reviews.map(r => (
                        <ReviewItem key={r.id}>
                            <ReviewAuthor>{r.author}:</ReviewAuthor>
                            {r.text}
                        </ReviewItem>
                    ))
                ) : (
                    <Typography variant="body2" sx={{mt: 1}}>No reviews yet.</Typography>
                )}
            </ReviewsSection>

            <ReturnButton/>

        </PageContainer>
    );
}

export default ProductDetailsPage;
