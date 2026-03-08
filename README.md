# OpenClaw Switch



<br/>

OpenClaw 的极简模型路由 Skill。**根据任务类型在可用模型间自动切换。**
无需手动配置——只需使用自然语言，自动执行模型切换与 Gateway 重启。

## 📦 安装 (Installation)

### 推荐：通过 ClawHub 安装

```bash
openclaw skills install claw-switch
```

### 手动安装

```bash
# 1. 克隆仓库
git clone https://github.com/SiliconYahaha/openclaw-switch.git

# 2. 进入目录
cd openclaw-switch

# 3. 复制到 OpenClaw 的 skills 目录
cp -r clawswitch-v1.0.0 ~/.openclaw/skills/
```

## 🚀 使用 (Usage)

在 OpenClaw TUI 中，使用 `/route` 命令触发路由：

```bash
/route 帮我写一篇小红书文案
```

Switch 会自动：
1. 分析你的意图（例如：需要创意写作）。
2. 切换到最合适的模型（例如：MiniMax）。
3. 重启 Gateway 使配置生效。
4. 提示你发送下一条消息来执行任务。

## 🧠 支持的模型矩阵 (Supported Models)

完美适配以下主流模型，并支持无缝接入任意自定义模型：

- **Google**: Gemini 3.1 Pro, Gemini 3.1 Flash Lite
- **OpenAI**: GPT-5.4 Pro, GPT-5.4
- **Anthropic**: Claude Opus 4.6, Claude Sonnet 4.6
- **xAI**: Grok 4, Grok 4.1 Fast
- **DeepSeek**: DeepSeek V3.2 Reasoner
- **Alibaba**: Qwen 3.5 Plus
- **Zhipu AI**: GLM-5
- **Moonshot**: Kimi K2.5
- **MiniMax**: MiniMax M2.5
- **ByteDance**: Doubao Seed 2.0 Pro
- **StepFun**: Step 3.5 Flash
- **Any Provider**: 任意自定义模型

## 📄 License

MIT-0 License - Free to use, modify, and redistribute. No attribution required.
