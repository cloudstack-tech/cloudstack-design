import { Card, Divider } from "@/packages/components";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaRegClock,
} from "react-icons/fa6";

export default function ExampleStatusCard() {
  return (
    <Card
      classNames={{
        root: "border-btn-default-solid-border rounded-sm text-xs",
      }}
      className="flex gap-4 p-3"
      hoverable={false}
    >
      <div className="flex-1 flex justify-between items-center">
        <div className="text-success-color flex items-center gap-1">
          <FaCircleCheck size={14} />
          <span>当前无异常</span>
        </div>
        <div className="text-default-color flex items-center gap-1">
          <span>当前资源</span>
          <span className="font-semibold text-sm">7</span>
        </div>
      </div>
      <Divider vertical />
      <div className="flex-1 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="text-success-color  flex justify-between items-center gap-1">
            <div className="flex items-center gap-1">
              <FaCircleCheck size={12} />
              <span>正常</span>
            </div>
            <div className="font-semibold text-sm text-default-color">7</div>
          </div>

          <div className="text-error-color flex items-center gap-1 justify-between">
            <div className="flex items-center gap-1">
              <FaCircleExclamation size={12} />
              <span>异常</span>
            </div>
            <div className="font-semibold text-sm text-default-color">0</div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-default-color">
          <FaRegClock size={12} />
          <span>16:47:57</span>
        </div>
      </div>
    </Card>
  );
}
