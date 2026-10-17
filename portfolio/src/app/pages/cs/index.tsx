import { CsPortfolio } from "@/app/pages/cs/Csportfolio"
import { Navbar } from "@/app/components/Navbar"
import { csNavbarData } from "@/app/shared/navbar-links"

export function CSHome() {
    return (
        <>
        <Navbar navbarData={csNavbarData} />
        <CsPortfolio />
        </>
    );
}