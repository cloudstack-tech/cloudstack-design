import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { Progress, CircleProgress } from "./";

const meta = {
  title: "Display 展示/Progress 进度条",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    percent: {
      control: { type: "range", min: 0, max: 100 },
      description: "进度百分比",
    },
    status: {
      control: { type: "select" },
      options: ["normal", "success", "error", "warning"],
      description: "进度条状态",
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: "进度条尺寸",
    },
    showInfo: {
      control: { type: "boolean" },
      description: "是否显示进度信息",
    },
    strokeColor: {
      control: { type: "color" },
      description: "进度条颜色",
    },
    trailColor: {
      control: { type: "color" },
      description: "未完成部分颜色",
    },
    strokeWidth: {
      control: { type: "number" },
      description: "进度条宽度",
    },
    steps: {
      control: { type: "number" },
      description: "步骤数",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    percent: 30,
  },
};

export const DifferentStatus: Story = {
  name: "不同状态",
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">正常状态</p>
        <Progress percent={30} />
      </div>
      <div>
        <p className="text-sm mb-2">成功状态</p>
        <Progress percent={100} status="success" />
      </div>
      <div>
        <p className="text-sm mb-2">错误状态</p>
        <Progress percent={50} status="error" />
      </div>
      <div>
        <p className="text-sm mb-2">警告状态</p>
        <Progress percent={70} status="warning" />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm mb-2">小尺寸</p>
        <Progress percent={50} size="small" />
      </div>
      <div>
        <p className="text-sm mb-2">默认尺寸</p>
        <Progress percent={50} size="default" />
      </div>
      <div>
        <p className="text-sm mb-2">大尺寸</p>
        <Progress percent={50} size="large" />
      </div>
    </div>
  ),
};

export const WithoutInfo: Story = {
  name: "隐藏进度信息",
  args: {
    percent: 50,
    showInfo: false,
  },
};

export const CustomColor: Story = {
  name: "自定义颜色",
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">单一颜色</p>
        <Progress percent={50} strokeColor="#f56565" />
      </div>
      <div>
        <p className="text-sm mb-2">渐变颜色</p>
        <Progress
          percent={75}
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
        />
      </div>
      <div>
        <p className="text-sm mb-2">自定义背景色</p>
        <Progress percent={60} strokeColor="#722ed1" trailColor="#f0f0f0" />
      </div>
    </div>
  ),
};

export const CustomWidth: Story = {
  name: "自定义宽度",
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">细线条 (4px)</p>
        <Progress percent={50} strokeWidth={4} />
      </div>
      <div>
        <p className="text-sm mb-2">粗线条 (10px)</p>
        <Progress percent={75} strokeWidth={10} />
      </div>
    </div>
  ),
};

export const WithSuccess: Story = {
  name: "分段进度条",
  args: {
    percent: 60,
    success: { percent: 30 },
  },
};

export const Steps: Story = {
  name: "步骤进度条",
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">5步进度</p>
        <Progress percent={40} steps={5} />
      </div>
      <div>
        <p className="text-sm mb-2">3步进度 (完成状态)</p>
        <Progress percent={100} steps={3} status="success" />
      </div>
      <div>
        <p className="text-sm mb-2">10步进度 (小尺寸)</p>
        <Progress percent={70} steps={10} size="small" />
      </div>
    </div>
  ),
};

export const CustomFormat: Story = {
  name: "自定义格式",
  render: () => (
    <div className="space-y-4">
      <Progress percent={75} format={(percent) => `${percent}% 完成`} />
      <Progress percent={100} format={() => "任务完成!"} />
      <Progress
        percent={50}
        success={{ percent: 20 }}
        format={(percent, success) => `进度: ${percent}% (成功: ${success}%)`}
      />
    </div>
  ),
};

export const AnimatedProgress: Story = {
  name: "动画进度条",
  render: () => {
    const [percent, setPercent] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="space-y-4">
        <Progress percent={percent} />
        <Progress
          percent={percent}
          status={percent >= 100 ? "success" : "normal"}
        />
        <Progress percent={percent} steps={10} />
      </div>
    );
  },
};

// Circle Progress Stories
export const CircleDefault: StoryObj<typeof CircleProgress> = {
  name: "圆形进度条 - 基础",
  render: () => <CircleProgress percent={75} />,
};

export const CircleSizes: StoryObj<typeof CircleProgress> = {
  name: "圆形进度条 - 不同尺寸",
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <CircleProgress percent={75} width={80} size="small" />
        <p className="text-sm mt-2">小尺寸</p>
      </div>
      <div className="text-center">
        <CircleProgress percent={75} width={120} size="default" />
        <p className="text-sm mt-2">默认尺寸</p>
      </div>
      <div className="text-center">
        <CircleProgress percent={75} width={160} size="large" />
        <p className="text-sm mt-2">大尺寸</p>
      </div>
    </div>
  ),
};

export const CircleStatus: StoryObj<typeof CircleProgress> = {
  name: "圆形进度条 - 不同状态",
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <CircleProgress percent={30} />
        <p className="text-sm mt-2">正常状态</p>
      </div>
      <div className="text-center">
        <CircleProgress percent={100} status="success" />
        <p className="text-sm mt-2">成功状态</p>
      </div>
      <div className="text-center">
        <CircleProgress percent={50} status="error" />
        <p className="text-sm mt-2">错误状态</p>
      </div>
      <div className="text-center">
        <CircleProgress percent={70} status="warning" />
        <p className="text-sm mt-2">警告状态</p>
      </div>
    </div>
  ),
};

export const Dashboard: StoryObj<typeof CircleProgress> = {
  name: "仪表盘进度条",
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <CircleProgress
          type="dashboard"
          percent={75}
          gapDegree={75}
          gapPosition="bottom"
        />
        <p className="text-sm mt-2">底部缺口</p>
      </div>
      <div className="text-center">
        <CircleProgress
          type="dashboard"
          percent={60}
          gapDegree={90}
          gapPosition="top"
        />
        <p className="text-sm mt-2">顶部缺口</p>
      </div>
    </div>
  ),
};

export const CustomCircleColor: StoryObj<typeof CircleProgress> = {
  name: "圆形进度条 - 自定义颜色",
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <CircleProgress percent={75} strokeColor="#f56565" />
        <p className="text-sm mt-2">单一颜色</p>
      </div>
      <div className="text-center">
        <CircleProgress
          percent={60}
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
        />
        <p className="text-sm mt-2">渐变颜色</p>
      </div>
    </div>
  ),
};

export const ComplexExample: Story = {
  name: "复合示例",
  render: () => {
    const [downloading, setDownloading] = React.useState(false);
    const [uploadProgress, setUploadProgress] = React.useState(0);
    const [downloadProgress, setDownloadProgress] = React.useState(0);

    const startDownload = () => {
      setDownloading(true);
      setDownloadProgress(0);

      const timer = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setDownloading(false);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
    };

    React.useEffect(() => {
      const timer = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 2;
        });
      }, 150);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="max-w-2xl space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">文件上传进度</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>document.pdf</span>
                <span>{Math.round(uploadProgress)}%</span>
              </div>
              <Progress
                percent={uploadProgress}
                status={uploadProgress >= 100 ? "success" : "normal"}
                size="small"
              />
            </div>
            <div className="flex items-center gap-4">
              <CircleProgress
                percent={uploadProgress}
                width={60}
                size="small"
                strokeWidth={4}
              />
              <span className="text-sm text-gray-600">总体进度</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">下载管理</h3>
          <div className="space-y-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              onClick={startDownload}
              disabled={downloading}
            >
              {downloading ? "下载中..." : "开始下载"}
            </button>
            <Progress
              percent={downloadProgress}
              status={
                downloadProgress >= 100
                  ? "success"
                  : downloading
                  ? "normal"
                  : "normal"
              }
              format={(percent = 0) =>
                downloading
                  ? `${Math.round(percent)}% (下载中)`
                  : percent >= 100
                  ? "下载完成"
                  : "等待下载"
              }
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">任务步骤</h3>
          <Progress
            percent={75}
            steps={4}
            success={{ percent: 50 }}
            size="large"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>准备</span>
            <span>处理</span>
            <span>验证</span>
            <span>完成</span>
          </div>
        </div>
      </div>
    );
  },
};
