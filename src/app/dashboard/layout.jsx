import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
export const metadata = {
    title: "Dashboard",
  };
export default function DashboardLayout({ children }) {
    return (
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-1">
            <Topbar />
            <main className="flex-grow p-4">
              {children}
            </main>
          </div>
        </div>
      </div>
    );
  }