import Card from "../component/dashboard/card/card";
import InfoBoxes from "../component/dashboard/infobox/infoboxes";
import Transactions from "../component/dashboard/transaction/transaction";


const Dashboard = () => {
    return (
        <div className="flex flex-col gap-6 p-6 bg-base-100 min-h-screen">
      {/* Top Stats Cards */}
      <div className="">
        <Card />
      </div>

      {/* Main Content */}
      <div className="flex gap-4">
        {/* Latest Transactions */}
        <div className="flex-1">
          <Transactions />
        </div>

        {/* Info Boxes */}
        <div className="w-1/3">
          <InfoBoxes />
        </div>
      </div>
    </div>
    );
};

export default Dashboard;