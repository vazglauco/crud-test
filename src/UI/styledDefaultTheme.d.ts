import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            background: string;
            table: {
                bodyText: string;
                bodyBorder: string;
                titleText: string;
                titleBorder: string;
            }
            form: {
                background: string;
                border: string;
            }
        }
    }
}