import React, {useState} from "react";
import {Input, Textarea} from "../src";

export default function InputExample() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div className="space-y-8 p-8 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold mb-4">基础输入框</h2>
        <div className="space-y-4">
          <Input placeholder="基础输入框" />
          <div>
            <label className="block text-xs font-medium mb-1">用户名</label>
            <Input placeholder="带标签的输入框" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">邮箱</label>
            <Input placeholder="带帮助文本" />
            <p className="text-xs text-gray-500 mt-1">请输入您的邮箱地址</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">不同变体</h2>
        <div className="space-y-4">
          <Input placeholder="Bordered (默认)" variant="bordered" />
          <Input placeholder="Flat" variant="flat" />
          <Input placeholder="Underlined" variant="underlined" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">不同尺寸</h2>
        <div className="space-y-4">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium (默认)" />
          <Input size="lg" placeholder="Large" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">前缀和后缀</h2>
        <div className="space-y-4">
          <Input prefix={<span>🔍</span>} placeholder="搜索..." />
          <Input suffix={<span>@example.com</span>} placeholder="用户名" />
          <Input
            prefix={<span>🔍</span>}
            suffix={<span>👤</span>}
            placeholder="搜索用户"
            allowClear
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">清除按钮</h2>
        <div className="space-y-4">
          <Input defaultValue="可清除的内容" allowClear placeholder="带清除按钮" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">不同状态</h2>
        <div className="space-y-4">
          <Input placeholder="正常状态" defaultValue="正常输入" />
          <Input placeholder="禁用状态" defaultValue="禁用的输入框" disabled />
          <div>
            <Input placeholder="错误状态" defaultValue="无效的输入" isInvalid />
            <p className="text-xs text-red-600 mt-1">此字段为必填项</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">不同类型</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">文本</label>
            <Input type="text" placeholder="文本" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">密码</label>
            <Input type="password" placeholder="密码" allowClear />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">邮箱</label>
            <Input type="email" placeholder="邮箱" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">数字</label>
            <Input type="number" placeholder="数字" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">受控组件示例</h2>
        <div className="space-y-2">
          <label className="block text-xs font-medium">受控输入框</label>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="输入内容..."
            allowClear
          />
          <p className="text-xs text-gray-500">当前值: {value || "(空)"}</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Textarea 多行输入</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">基础文本区域</label>
            <Textarea placeholder="请输入内容" rows={4} />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">带清除按钮</label>
            <Textarea
              placeholder="可清除的文本"
              rows={3}
              allowClear
              defaultValue="这里有一些内容"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">自动调整高度</label>
            <Textarea placeholder="随内容自动调整高度" autoSize={{minRows: 2, maxRows: 6}} />
            <p className="text-xs text-gray-500 mt-1">最小 2 行，最大 6 行</p>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">可调整大小</label>
            <Textarea placeholder="可手动调整大小" rows={3} allowResize />
            <p className="text-xs text-gray-500 mt-1">拖动右下角调整大小</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">完整表单示例</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">用户名</label>
            <Input placeholder="请输入用户名" allowClear />
            <p className="text-xs text-gray-500 mt-1">用户名由 3-20 个字符组成</p>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">邮箱</label>
            <Input type="email" placeholder="请输入邮箱" allowClear />
            <p className="text-xs text-gray-500 mt-1">我们会向此邮箱发送验证信息</p>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">密码</label>
            <Input
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">密码至少 8 个字符</p>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">个人简介</label>
            <Textarea
              placeholder="介绍一下自己..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              autoSize={{minRows: 3, maxRows: 6}}
            />
            <p className="text-xs text-gray-500 mt-1">{bio.length}/200 字符</p>
          </div>
        </div>
      </div>
    </div>
  );
}
