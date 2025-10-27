import CircularProgress from '@mui/material/CircularProgress';
import {FlexBox} from "./layout.tsx";

export default function CircularUnderLoad() {
    return <FlexBox sx={{ justifyContent: 'center', marginTop: '1rem' }}>
        <CircularProgress  />
    </FlexBox>;
}