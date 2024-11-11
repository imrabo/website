import BottomNavigationBar from "../../components/navigation/bottom-bar";
import NavigationBar from "../../components/navigation/nav-bar";

function Dashboard() {
  return (
    <>
     
        <NavigationBar />
        <section className="w-full h-full">

<div className="w-full h-full px-48 py-10">
<div className="grid grid-cols-2 w-full">
  <div className="bg-zinc-200 border-2 h-full">
    hello
  </div>
  <div>
    hello
  </div>

</div>
<div>

</div>
</div>

        </section>

        <div className="block lg:hidden">
          <BottomNavigationBar />
        </div>
    
    </>
  );
}

export default Dashboard;
