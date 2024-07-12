# OAI 反向代理
各种 LLM API 的反向代理服务器。

### 目录
- [这是什么?](#这是什么)
- [特点](#特点)
- [使用说明](#使用说明)
  - [自托管](#自托管)
  - [替代方案](#替代方案)
    - [Huggingface (已过时，不建议使用)](#Huggingface已过时不建议使用)
    - [Render (已过时，不建议使用)](#render已过时不建议使用)
- [本地开发](#本地开发)

## 这是什么？
该项目允许你为各种 LLM API 运行反向代理服务器。

## 特点
- [x] 支持多种 API
  - [x] [OpenAI](https://openai.com/)
  - [x] [Anthropic](https://www.anthropic.com/)
  - [x] [AWS Bedrock](https://aws.amazon.com/bedrock/)
  - [x] [Vertex AI](https://cloud.google.com/vertex-ai/)
  - [x] [Google MakerSuite/Gemini API](https://ai.google.dev/)
  - [x] [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
- [x] 将 OpenAI 格式的提示翻译为任何其他 API，包括流式响应
- [x] 带有轮换和速率限制处理功能的多个 API 密钥
- 基本用户管理
  - 基于角色的简单权限
  - 每模型令牌配额
  - 临时用户账户
- 提示和完成记录
- 滥用检测和预防

---

### 使用说明
如果你想运行自己的服务器实例，需要将其部署到某个地方，并用你的 API 密钥进行配置。下面提供了几个简单的选项，当然，如果你知道自己在做什么，而且服务支持 Node.js，你也可以将其部署到任何其他服务中。

### 自托管
[有关如何在自己的 VPS 或本地机器上自行托管应用程序的说明，请参见此处。](./docs/self-hosting.md)

确保根据部署情况设置了`TRUSTED_PROXIES`环境变量。更多信息请参阅[.env.example](./.env.example)和[config.ts](./src/config.ts)。

### 替代方案
Fiz 和 Sekrit 正在研究其他方便部署的方法。虽然除了就我的代码提供技术建议之外，我并没有参与这项工作，但为了方便起见，我还是在这里链接到他们的工作： [Sekrit's rentry](https://rentry.org/sekrit)  

### Huggingface（已过时，不建议使用）
[有关如何部署到 Huggingface 空间的说明，请参见此处](./docs/deploy-huggingface.md)

### Render（已过时，不建议使用）
[有关如何部署到 Render.com 的说明，请参见此处。](./docs/deploy-render.md)

## 本地开发
要在本地运行代理进行开发或测试，请安装 Node.js >= 18.0.0 并按以下步骤操作。

1. 克隆软件仓库
2. 使用 `npm install` 安装依赖项
3. 在项目根目录下创建一个 `.env` 文件，并添加 API 密钥。示例请参见 [.env.example](./.env.example) 文件。
4. 用 `npm run start:dev`以开发模式启动服务器。

也可以使用 `npm run start:dev:tsc` 来启用整个项目的类型检查，但启动时间会变慢。可以使用 `npm run type-check`，在不启动服务器的情况下进行类型检查。

## 构建
要构建项目，请运行 `npm run build`。这将把 TypeScript 代码编译成 JavaScript 并输出到 `build` 目录。

请注意，如果要在内存非常紧张（<= 1GB）的 VPS 上构建服务器，可能需要使用 `NODE_OPTIONS=--max_old_space_size=2048 npm run build` 运行构建，以避免在构建过程中内存耗尽，前提是启用了交换。 对于大多数合理的流量水平，应用程序本身在 512MB 的 VPS 上运行良好。

## 分支

如果要在 GitGud 上分支仓库，最好禁用 GitLab CI/CD，否则会因为没有 CI 运行程序而收到构建失败的垃圾邮件。具体方法是进入 *Settings > General > Visibility, project features, permissions*，然后禁用 "CI/CD "功能。

