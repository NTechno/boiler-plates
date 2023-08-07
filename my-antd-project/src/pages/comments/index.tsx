import { ResourceRouterParams, useRouterContext } from "@pankod/refine-core";
import { CreateInferencer } from "@pankod/refine-inferencer/dist/inferencers/antd/create";
import { EditInferencer } from "@pankod/refine-inferencer/dist/inferencers/antd/edit";
import { ListInferencer } from "@pankod/refine-inferencer/dist/inferencers/antd/list";
import { ShowInferencer } from "@pankod/refine-inferencer/dist/inferencers/antd/show";

const Comments: React.FC<any> = ({
  action: actionFromProps,
  id: idFromProps,
  ...props
}) => {
  const { useParams } = useRouterContext();
  const { action, id } = useParams<ResourceRouterParams>();

  switch (actionFromProps ?? action) {
    case "show":
      return <ShowInferencer {...props} id={idFromProps ?? id} />;
    case "create":
      return <CreateInferencer {...props} id={idFromProps ?? id} />;
    case "edit":
      return <EditInferencer {...props} id={idFromProps ?? id} />;
    default:
      return <ListInferencer {...props} id={idFromProps ?? id} />;
  }
};

export { Comments };
export { ShowInferencer as AntdShowInferencer } from "./show";
export { EditInferencer as AntdEditInferencer } from "./edit";
// export { ListInferencer as AntdListInferencer } from ".";
export { CreateInferencer as AntdCreateInferencer } from "./create";
