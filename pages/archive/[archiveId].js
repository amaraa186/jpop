import dynamic from "next/dynamic";
import { withRouter } from "next/router";

const Archive = dynamic(() => import("app/modules/archive/ArchiveView"), {
  ssr: false,
});

function ArchivePage(props) {
  return <Archive {...props} />;
}

export default withRouter(ArchivePage);
