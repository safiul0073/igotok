import "./bootstrap";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { TranslationsProvider } from "./TranslationContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        if (import.meta.env.DEV) {
            createRoot(el).render(
                <TranslationsProvider
                    translations={props.initialPage.props.translations}
                    locale={props.initialPage.props.locale}
                >
                    <App {...props} />
                </TranslationsProvider>
            );
            return;
        }

        hydrateRoot(el, <App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
