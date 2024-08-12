import { ToastContainer } from "@/Components/shared/Toast/ToastContainer";
import React from "react";
import Footer from "../Footer";
export default function HomLayout({ children }) {
    return (
        <div>
            <ToastContainer />

            {/* <!-- Header Starts --> */}

            {/* <!-- Hero Starts --> */}

            {/* content wrapper */}
            {children}

            <Footer />
        </div>
    );
}
