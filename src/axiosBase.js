import axios from 'axios';

const axiosBase = axios.create({
    headers: {
        'ContentType': 'application/json',
        'X-Bouncr-Credential': 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJUZXN0IHVzZXIx' +
                'IiwicGVybWlzc2lvbnMiOlsicHJvamVjdDpyZWFkIiwicHJvamVjdDpjcmVhdGUiLCJwcm9qZWN0OnVw' +
                'ZGF0ZSIsInByb2plY3Q6ZGVsZXRlIl19.lfegO1IXi1hlBETymqw8nqRaq7POrnriJU_5YK2R-PI'
    },
    responseType: 'json'
});

export default axiosBase;