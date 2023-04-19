//theme.ts
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "#9DECF9",
                color: "#4A5568",
            },
            html: {
                height: "100%",
            },
        },
    },
    fonts: {
        heading: ` 'Zen Maru Gothic', sans-serif`,
        body: `'M PLUS 1p', sans-serif`,
    },
});
