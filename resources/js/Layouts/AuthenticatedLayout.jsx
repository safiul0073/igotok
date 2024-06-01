import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";

const layout = ({ children }) => {
    const trans = {
        en: {
            title: "Dashboard",
        },
        ar: {
            title: "لوحة التحكم",
        },
    };

    return (
        <DashBoardLayoutProvider trans={trans}>
            {children}
        </DashBoardLayoutProvider>
    );
};

export default layout;
