import React, {useState} from "react";
import {Select} from "../src";

const options = [
  {label: "自动识别", value: "auto"},
  {label: "实例名称", value: "instanceName"},
  {label: "实例ID", value: "instanceId"},
  {label: "实例状态", value: "instanceStatus"},
  {label: "实例类型", value: "instanceType"},
];

const cityOptions = [
  {label: "北京", value: "beijing"},
  {label: "上海", value: "shanghai"},
  {label: "广州", value: "guangzhou"},
  {label: "深圳", value: "shenzhen"},
  {label: "杭州", value: "hangzhou"},
  {label: "成都", value: "chengdu"},
  {label: "武汉", value: "wuhan"},
  {label: "西安", value: "xian"},
];

export default function SelectExample() {
  const [singleValue, setSingleValue] = useState<string>();
  const [multipleValues, setMultipleValues] = useState<string[]>([]);

  return (
    <div className="space-y-8 p-8 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold mb-4">基础用法</h2>
        <div className="w-96">
          <Select placeholder="请选择一个选项" options={options} />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">带清除按钮</h2>
        <div className="w-96">
          <Select placeholder="支持清除的选择框" options={options} allowClear defaultValue="auto" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">带搜索功能</h2>
        <div className="w-96">
          <Select placeholder="搜索选项" options={cityOptions} showSearch allowClear />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">不同尺寸</h2>
        <div className="space-y-4">
          <div className="w-96">
            <p className="text-xs text-gray-500 mb-1">Small</p>
            <Select size="sm" placeholder="Small size" options={options} />
          </div>
          <div className="w-96">
            <p className="text-xs text-gray-500 mb-1">Medium (默认)</p>
            <Select size="md" placeholder="Medium size" options={options} />
          </div>
          <div className="w-96">
            <p className="text-xs text-gray-500 mb-1">Large</p>
            <Select size="lg" placeholder="Large size" options={options} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">多选模式</h2>
        <div className="w-96">
          <Select mode="multiple" placeholder="可以选择多个选项" options={options} allowClear />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">多选 + 搜索</h2>
        <div className="w-96">
          <Select
            mode="multiple"
            placeholder="搜索并多选"
            options={cityOptions}
            showSearch
            allowClear
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">禁用状态</h2>
        <div className="space-y-4">
          <div className="w-96">
            <p className="text-xs text-gray-500 mb-1">禁用整个选择器</p>
            <Select placeholder="禁用状态" options={options} disabled defaultValue="auto" />
          </div>
          <div className="w-96">
            <p className="text-xs text-gray-500 mb-1">部分选项禁用</p>
            <Select
              placeholder="部分选项不可选"
              options={options.map((opt, index) => ({
                ...opt,
                disabled: index % 2 === 0,
              }))}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">受控模式</h2>
        <div className="space-y-4">
          <div className="w-96">
            <p className="text-xs font-medium mb-2">单选</p>
            <Select
              value={singleValue}
              onChange={setSingleValue}
              placeholder="请选择"
              options={options}
              allowClear
            />
            <p className="text-xs text-gray-500 mt-1">当前值: {singleValue || "(未选择)"}</p>
          </div>

          <div className="w-96">
            <p className="text-xs font-medium mb-2">多选</p>
            <Select
              mode="multiple"
              value={multipleValues}
              onChange={setMultipleValues}
              placeholder="请选择（可多选）"
              options={options}
              allowClear
            />
            <p className="text-xs text-gray-500 mt-1">
              已选择: {multipleValues.length} 项
              {multipleValues.length > 0 && ` (${multipleValues.join(", ")})`}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">自定义配置</h2>
        <div className="space-y-4">
          <div className="w-96">
            <p className="text-xs text-gray-500 mb-1">不显示选中标记</p>
            <Select
              placeholder="无选中标记"
              options={options}
              showCheck={false}
              defaultValue="auto"
            />
          </div>
          <div className="w-96">
            <p className="text-xs text-gray-500 mb-1">自定义空状态</p>
            <Select placeholder="无数据" options={[]} notFoundContent="暂无可选项" />
          </div>
        </div>
      </div>
    </div>
  );
}
