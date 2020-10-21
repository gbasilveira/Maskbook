import { rgbToHex, useTheme } from '@material-ui/core'
import { useMemo } from 'react'
import TransakSDK, { TransakSDKConfig } from '@transak/transak-sdk'
import stringify from 'json-stable-stringify'
import { TRANSAK_API_KEY_PRODUCTION, TRANSAK_API_KEY_STAGING } from '../constants'

export function useTransak(config?: Partial<TransakSDKConfig>) {
    const theme = useTheme()
    const transak = useMemo(
        () =>
            new TransakSDK({
                apiKey: process.env.NODE_ENV === 'production' ? TRANSAK_API_KEY_PRODUCTION : TRANSAK_API_KEY_STAGING,
                environment: process.env.NODE_ENV === 'production' ? 'PRODUCTION' : 'STAGING',
                defaultCryptoCurrency: 'ETH',
                email: 'info@dimension.im',
                fiatCurrency: 'USD',
                hostURL: window.location.origin,
                redirectURL: window.location.origin,
                themeColor: rgbToHex(theme.palette.primary.main).substr(1),
                widgetWidth: '100%',
                widgetHeight: '550px',
                ...config,
            }),
        [theme.palette.primary.main, stringify(config)],
    )
    return transak
}
