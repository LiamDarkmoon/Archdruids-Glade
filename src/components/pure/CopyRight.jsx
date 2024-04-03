import React from 'react';
import { Link, Typography,  } from '@mui/material';

const CopyRight = () => {
    return (
        <Typography variant='body2' color='InfoText' align='center'>
            { 'Copyright (c) 2023' }
            <Link color='inherit' href=''>Liam Darkmoon</Link>
        </Typography>
    );
}

export default CopyRight;
