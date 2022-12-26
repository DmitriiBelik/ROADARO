import type { NextPage } from "next";
import MainLayout from "../src/components/MainLayout/MainLayout";
import SettingsPage from "../src/pages/SettingsPage/SettingsPage";

const RegistrationPage: NextPage = () => {
    return (
        <MainLayout>
            <SettingsPage/>
        </MainLayout>
    );
};

export default RegistrationPage