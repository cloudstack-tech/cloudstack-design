import React from "react";
import {Typography, Text, Title} from "../src";

export default function TypographyExample() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-4xl">
      {/* 基础用法 */}
      <section>
        <h2 className="text-lg font-bold mb-4">基础用法</h2>
        <div className="flex flex-col gap-3">
          <Typography>这是基础的 Typography 组件</Typography>
          <Text>这是 Text 组件</Text>
          <Title level={3}>这是 Title 组件</Title>
        </div>
      </section>

      {/* 不同尺寸 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同尺寸</h2>
        <div className="flex flex-col gap-2">
          <Text size="xs">超小文本 (xs)</Text>
          <Text size="sm">小文本 (sm)</Text>
          <Text size="base">基础文本 (base)</Text>
          <Text size="md">中等文本 (md)</Text>
          <Text size="lg">大文本 (lg)</Text>
          <Text size="xl">超大文本 (xl)</Text>
        </div>
      </section>

      {/* 标题等级 */}
      <section>
        <h2 className="text-lg font-bold mb-4">标题等级</h2>
        <div className="flex flex-col gap-3">
          <Title level={1}>一级标题</Title>
          <Title level={2}>二级标题</Title>
          <Title level={3}>三级标题</Title>
          <Title level={4}>四级标题</Title>
          <Title level={5}>五级标题</Title>
          <Title level={6}>六级标题</Title>
        </div>
      </section>

      {/* 不同颜色 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同颜色</h2>
        <div className="flex flex-col gap-2">
          <Text color="default">默认颜色</Text>
          <Text color="primary">主要颜色</Text>
          <Text color="secondary">次要颜色</Text>
          <Text color="success">成功颜色</Text>
          <Text color="warning">警告颜色</Text>
          <Text color="danger">危险颜色</Text>
          <Text color="muted">弱化颜色</Text>
        </div>
      </section>

      {/* 不同字重 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同字重</h2>
        <div className="flex flex-col gap-2">
          <Text weight="light">轻字重</Text>
          <Text weight="normal">普通字重</Text>
          <Text weight="medium">中等字重</Text>
          <Text weight="semibold">半粗字重</Text>
          <Text weight="bold">粗体字重</Text>
        </div>
      </section>

      {/* 文本样式 */}
      <section>
        <h2 className="text-lg font-bold mb-4">文本样式</h2>
        <div className="flex flex-col gap-2">
          <Text>普通文本</Text>
          <Text italic>斜体文本</Text>
          <Text underline>下划线文本</Text>
          <Text strikethrough>删除线文本</Text>
          <Text italic underline>
            斜体+下划线
          </Text>
        </div>
      </section>

      {/* 文本对齐 */}
      <section>
        <h2 className="text-lg font-bold mb-4">文本对齐</h2>
        <div className="flex flex-col gap-3 border rounded p-4">
          <Text align="left">左对齐文本</Text>
          <Text align="center">居中对齐文本</Text>
          <Text align="right">右对齐文本</Text>
          <Text align="justify">两端对齐文本。这是一段较长的文本用于演示两端对齐的效果。</Text>
        </div>
      </section>

      {/* 文本转换 */}
      <section>
        <h2 className="text-lg font-bold mb-4">文本转换</h2>
        <div className="flex flex-col gap-2">
          <Text transform="uppercase">uppercase text</Text>
          <Text transform="lowercase">LOWERCASE TEXT</Text>
          <Text transform="capitalize">capitalize text</Text>
        </div>
      </section>

      {/* 文本截断 */}
      <section>
        <h2 className="text-lg font-bold mb-4">文本截断</h2>
        <div className="max-w-md border rounded p-4">
          <Text truncate>
            这是一段很长的文本会被截断。这是一段很长的文本会被截断。这是一段很长的文本会被截断。
          </Text>
        </div>
      </section>

      {/* 行高 */}
      <section>
        <h2 className="text-lg font-bold mb-4">行高</h2>
        <div className="flex flex-col gap-4">
          <div className="border rounded p-3">
            <Text lineHeight="tight" className="block">
              tight 行高
              <br />
              这是第二行文本
              <br />
              这是第三行文本
            </Text>
          </div>
          <div className="border rounded p-3">
            <Text lineHeight="normal" className="block">
              normal 行高
              <br />
              这是第二行文本
              <br />
              这是第三行文本
            </Text>
          </div>
          <div className="border rounded p-3">
            <Text lineHeight="relaxed" className="block">
              relaxed 行高
              <br />
              这是第二行文本
              <br />
              这是第三行文本
            </Text>
          </div>
        </div>
      </section>

      {/* 实际应用示例 */}
      <section>
        <h2 className="text-lg font-bold mb-4">实际应用示例</h2>
        <div className="border rounded p-6 space-y-4">
          <Title level={1} color="primary">
            产品介绍
          </Title>

          <Text size="lg" color="muted">
            这是一个优秀的产品
          </Text>

          <div className="space-y-3 mt-4">
            <Title level={3} weight="semibold">
              主要特性
            </Title>

            <div className="space-y-2">
              <Text>
                <Text weight="bold" color="primary">
                  高性能：
                </Text>{" "}
                采用最新技术栈
              </Text>
              <Text>
                <Text weight="bold" color="success">
                  易用性：
                </Text>{" "}
                直观的界面设计
              </Text>
              <Text>
                <Text weight="bold" color="secondary">
                  可扩展：
                </Text>{" "}
                灵活的架构
              </Text>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <Text>
              <Text strikethrough color="muted">
                原价：¥999
              </Text>
              <Text size="xl" color="danger" weight="bold" className="ml-4">
                现价：¥699
              </Text>
            </Text>
          </div>

          <Text size="sm" color="muted" italic className="mt-2">
            * 价格仅供参考，以实际购买时为准
          </Text>
        </div>
      </section>

      {/* 链接文本 */}
      <section>
        <h2 className="text-lg font-bold mb-4">链接文本</h2>
        <div className="flex flex-col gap-3">
          <Text color="primary" underline className="cursor-pointer hover:text-blue-700">
            这是一个链接样式的文本
          </Text>
          <Text>
            普通文本中包含{" "}
            <Text as="span" color="primary" underline className="cursor-pointer">
              内联链接
            </Text>{" "}
            的示例
          </Text>
        </div>
      </section>

      {/* 段落文本 */}
      <section>
        <h2 className="text-lg font-bold mb-4">段落文本</h2>
        <div className="space-y-3">
          <Text className="block" lineHeight="relaxed">
            这是第一个段落。它包含了一些文本内容，用于演示段落的显示效果。段落文本通常需要设置合适的行高来提高可读性。
          </Text>
          <Text className="block" lineHeight="relaxed">
            这是第二个段落。通过设置适当的间距和行高，可以让文本内容更加易读，提供更好的用户体验。
          </Text>
          <Text className="block" lineHeight="relaxed" color="muted">
            这是第三个段落，使用了弱化的颜色来表示次要信息。
          </Text>
        </div>
      </section>
    </div>
  );
}
