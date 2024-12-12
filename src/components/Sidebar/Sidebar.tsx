import { UserProfile } from "./UserProfile";
import { YearSelect } from "./YearSelect";
import { MonthSelect } from "./MonthSelect";
import { AreaSelect } from "./AreaSelect";

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-card border-r">
      <UserProfile 
        name="Secretaría de Hacienda del municipio de Itagüí"
        imageUrl="https://hacienda.itagui.gov.co/img/logo.f4c6b2b1.png"
      />
      <div className="border-t">
        <YearSelect />
        <MonthSelect />
        <AreaSelect />
      </div>
    </aside>
  );
}