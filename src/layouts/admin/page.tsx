import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/page";

const AdminLayout = ({children}: {children: ReactNode}) => {
    return(
        <>
        <div className="flex">
            <aside className="flex-auto">
                <Sidebar/>
            </aside>
            <div className="flex-auto p-2">
                {children}
            </div>
        </div>
        </>
    )
}
export default AdminLayout;