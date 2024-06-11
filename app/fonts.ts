import { Poppins } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['300', '600']
})
