import {Grid, CardMedia, CardContent, Typography} from "@mui/material";
import {useProductListPage} from "./useProductListPage.ts";
import {ContentWrapper, PageContainer, PageTitle} from "../../ui/layout.tsx";
import {CardLink, GridContainer, ProductCard, SearchInput} from "./ProductListPage.styles.ts";
import CircularUnderLoad from "../../ui/Loader.tsx";

export default function ProductListPage() {
    const {search, setSearch, filtered, loading} = useProductListPage()

    return (
        <PageContainer>
            <ContentWrapper>
                <PageTitle variant="h1">Products</PageTitle>

                <SearchInput
                    label="Search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {loading
                    ? <CircularUnderLoad/>
                    : <GridContainer container>
                        {filtered.map(product => (
                            <Grid key={product.id}>
                                <CardLink to={`/product/${product.id}`}>
                                    <ProductCard>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={product.thumbnail}
                                            alt={product.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h4">{product.name}</Typography>
                                            <Typography variant="body2">
                                                ${product.price}
                                            </Typography>
                                        </CardContent>
                                    </ProductCard>
                                </CardLink>
                            </Grid>
                        ))}
                    </GridContainer>
                }
            </ContentWrapper>
        </PageContainer>
    );
}
