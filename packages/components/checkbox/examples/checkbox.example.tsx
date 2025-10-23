import React, {useState} from "react";
import {Checkbox, CheckboxGroup} from "../src";

export default function CheckboxExample() {
  const [selected, setSelected] = useState(false);
  const [groupValue, setGroupValue] = useState<string[]>(["apple"]);
  const [selectAllValue, setSelectAllValue] = useState<string[]>([]);

  const options = [
    {label: "苹果", value: "apple"},
    {label: "香蕉", value: "banana"},
    {label: "橙子", value: "orange"},
    {label: "西瓜", value: "watermelon"},
  ];

  const allSelected = selectAllValue.length === options.length;
  const isIndeterminate = selectAllValue.length > 0 && selectAllValue.length < options.length;

  const handleSelectAll = (isSelected: boolean) => {
    setSelectAllValue(isSelected ? options.map((o) => o.value) : []);
  };

  return (
    <div className="flex flex-col gap-8 p-8 max-w-4xl">
      {/* 基础用法 */}
      <section>
        <h2 className="text-lg font-bold mb-4">基础用法</h2>
        <div className="flex flex-col gap-3">
          <Checkbox>未选中</Checkbox>
          <Checkbox isSelected>选中</Checkbox>
          <Checkbox isIndeterminate>不确定</Checkbox>
        </div>
      </section>

      {/* 不同尺寸 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同尺寸</h2>
        <div className="flex items-center gap-6">
          <Checkbox size="sm">Small</Checkbox>
          <Checkbox size="md">Medium</Checkbox>
          <Checkbox size="lg">Large</Checkbox>
        </div>
      </section>

      {/* 不同颜色 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同颜色</h2>
        <div className="flex flex-col gap-3">
          <Checkbox color="default" isSelected>
            Default
          </Checkbox>
          <Checkbox color="primary" isSelected>
            Primary
          </Checkbox>
          <Checkbox color="secondary" isSelected>
            Secondary
          </Checkbox>
          <Checkbox color="success" isSelected>
            Success
          </Checkbox>
          <Checkbox color="warning" isSelected>
            Warning
          </Checkbox>
          <Checkbox color="danger" isSelected>
            Danger
          </Checkbox>
        </div>
      </section>

      {/* 禁用状态 */}
      <section>
        <h2 className="text-lg font-bold mb-4">禁用状态</h2>
        <div className="flex flex-col gap-3">
          <Checkbox isDisabled>禁用未选中</Checkbox>
          <Checkbox isDisabled isSelected>
            禁用已选中
          </Checkbox>
          <Checkbox isDisabled isIndeterminate>
            禁用不确定
          </Checkbox>
        </div>
      </section>

      {/* 受控组件 */}
      <section>
        <h2 className="text-lg font-bold mb-4">受控组件</h2>
        <div className="flex flex-col gap-4">
          <Checkbox isSelected={selected} onChange={setSelected}>
            {selected ? "已选中" : "未选中"}
          </Checkbox>
          <button
            onClick={() => setSelected(!selected)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-fit"
          >
            切换状态
          </button>
        </div>
      </section>

      {/* CheckboxGroup - 基础用法 */}
      <section>
        <h2 className="text-lg font-bold mb-4">CheckboxGroup - 基础用法</h2>
        <CheckboxGroup
          label="选择水果"
          description="请选择你喜欢的水果（可多选）"
          options={[
            {label: "苹果", value: "apple"},
            {label: "香蕉", value: "banana"},
            {label: "橙子", value: "orange"},
          ]}
        />
      </section>

      {/* CheckboxGroup - 水平布局 */}
      <section>
        <h2 className="text-lg font-bold mb-4">CheckboxGroup - 水平布局</h2>
        <CheckboxGroup
          label="选择水果"
          orientation="horizontal"
          options={[
            {label: "苹果", value: "apple"},
            {label: "香蕉", value: "banana"},
            {label: "橙子", value: "orange"},
          ]}
        />
      </section>

      {/* CheckboxGroup - 受控 */}
      <section>
        <h2 className="text-lg font-bold mb-4">CheckboxGroup - 受控</h2>
        <div className="flex flex-col gap-4">
          <CheckboxGroup
            label="选择水果"
            value={groupValue}
            onChange={setGroupValue}
            options={[
              {label: "苹果", value: "apple"},
              {label: "香蕉", value: "banana"},
              {label: "橙子", value: "orange"},
            ]}
          />
          <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
            已选择: {groupValue.join(", ") || "无"}
          </div>
          <button
            onClick={() => setGroupValue([])}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-fit"
          >
            清空选择
          </button>
        </div>
      </section>

      {/* 全选功能 */}
      <section>
        <h2 className="text-lg font-bold mb-4">全选功能</h2>
        <div className="flex flex-col gap-4 p-4 border rounded-lg">
          <Checkbox
            isSelected={allSelected}
            isIndeterminate={isIndeterminate}
            onChange={handleSelectAll}
          >
            <span className="font-semibold">全选</span>
          </Checkbox>
          <div className="border-t pt-3">
            <CheckboxGroup value={selectAllValue} onChange={setSelectAllValue} options={options} />
          </div>
          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
            已选择 {selectAllValue.length} / {options.length} 项
          </div>
        </div>
      </section>

      {/* CheckboxGroup - 禁用部分选项 */}
      <section>
        <h2 className="text-lg font-bold mb-4">禁用部分选项</h2>
        <CheckboxGroup
          label="选择水果"
          description="某些选项已被禁用"
          options={[
            {label: "苹果", value: "apple"},
            {label: "香蕉（已售罄）", value: "banana", disabled: true},
            {label: "橙子", value: "orange"},
            {label: "西瓜（已售罄）", value: "watermelon", disabled: true},
          ]}
        />
      </section>
    </div>
  );
}
