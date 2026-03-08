import { motion } from "motion/react";
import { Terminal, Github, ArrowRight, Cpu, Zap, Brain, Moon, FileText, PenTool, Code, Download } from "lucide-react";

const MODELS = [
  {
    id: "gemini-3-flash-preview",
    name: "Gemini 3 Flash",
    provider: "Google",
    icon: <FileText className="w-5 h-5" />,
    desc: "图片、文件、PDF、多模态视觉任务。",
    trigger: "use gemini / 图片模式",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    status: "✅ 可用"
  },
  {
    id: "openrouter/auto",
    name: "OpenRouter Auto",
    provider: "OpenRouter",
    icon: <Cpu className="w-5 h-5" />,
    desc: "默认兜底，自动路由到最佳开源/闭源模型。",
    trigger: "use openrouter / 默认",
    color: "text-accent",
    border: "border-accent/40",
    bg: "bg-accent/10",
    isDefault: true,
    status: "✅ 可用"
  },
  {
    id: "gpt-5.4",
    name: "GPT-5.4",
    provider: "OpenAI",
    icon: <Code className="w-5 h-5" />,
    desc: "英文编程、代码审查、复杂架构设计。",
    trigger: "等待 OpenClaw 运行时支持",
    color: "text-emerald-400/40",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    status: "⚠️ 待适配"
  },
  {
    id: "minimax-m2.5",
    name: "MiniMax M2.5",
    provider: "MiniMax",
    icon: <PenTool className="w-5 h-5" />,
    desc: "中文创意写作、小红书文案、公众号生成。",
    trigger: "等待 OpenClaw 运行时支持",
    color: "text-pink-400/40",
    border: "border-pink-400/20",
    bg: "bg-pink-400/5",
    status: "⚠️ 待适配"
  },
  {
    id: "deepseek-chat",
    name: "DeepSeek V3.2",
    provider: "DeepSeek",
    icon: <Brain className="w-5 h-5" />,
    desc: "极致性价比，日常代码与逻辑推理。",
    trigger: "等待 OpenClaw 运行时支持",
    color: "text-purple-400/40",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
    status: "⚠️ 待适配"
  }
];

const TerminalDemo = () => {
  return (
    <div className="w-full mx-auto bg-surface border border-border rounded-lg overflow-hidden font-mono text-sm shadow-2xl text-left">
      <div className="flex items-center px-4 py-3 bg-surface-hover border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="mx-auto text-text-muted text-xs tracking-widest">openclaw — bash</div>
      </div>
      <div className="p-6 space-y-6 text-text-main leading-relaxed">
        <div>
          <span className="text-accent">~/</span> <span className="text-white">use gemini</span>
          <div className="text-text-muted mt-2">→ 执行: openclaw models set google/gemini-3-flash-preview</div>
          <div className="text-text-muted">→ 执行: openclaw gateway restart</div>
          <div className="text-[#39ff14] mt-1">→ [Gemini 3 Flash] Ready.</div>
        </div>
        
        <div>
          <span className="text-accent">~/</span> <span className="text-white">use openrouter</span>
          <div className="text-text-muted mt-2">→ 执行: openclaw models set openrouter/openrouter/auto</div>
          <div className="text-text-muted">→ 执行: openclaw gateway restart</div>
          <div className="text-[#39ff14] mt-1">→ [OpenRouter Auto] Ready.</div>
        </div>

        <div>
          <span className="text-accent">~/</span> <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle"></span>
        </div>
      </div>
    </div>
  );
};

const InstallSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="space-y-8">
        <div className="flex gap-6">
          <div className="font-display text-4xl text-accent leading-none">01</div>
          <div>
            <h3 className="font-mono font-bold text-lg mb-2">ClawHub 一键安装</h3>
            <p className="text-text-muted">推荐方式：直接访问 <a href="https://clawhub.ai/SiliconYahaha/claw-switch" target="_blank" rel="noreferrer" className="text-accent hover:underline">ClawHub</a> 上传并安装此 Skill。</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="font-display text-4xl text-accent leading-none">02</div>
          <div>
            <h3 className="font-mono font-bold text-lg mb-2">或：手动安装</h3>
            <p className="text-text-muted">将项目文件复制到 <code className="text-accent">~/.openclaw/skills/clawswitch/</code> 目录下。</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="font-display text-4xl text-accent leading-none">03</div>
          <div>
            <h3 className="font-mono font-bold text-lg mb-2">重启 Gateway</h3>
            <p className="text-text-muted">执行 <code className="text-accent">openclaw gateway restart</code> 使新模型配置生效，即可在 TUI 中使用 <code className="text-accent">use gemini</code> 命令。</p>
          </div>
        </div>
      </div>
      
      <div className="bg-surface border border-border rounded-lg overflow-hidden font-mono text-sm">
        <div className="flex justify-between items-center px-4 py-2 border-b border-border bg-surface-hover">
          <span className="text-text-muted text-xs">Terminal (手动安装)</span>
        </div>
        <div className="p-6 overflow-x-auto text-text-main leading-relaxed">
          <span className="text-text-muted"># 1. 复制 skill 文件到 OpenClaw 目录</span><br/>
          <span className="text-[#39ff14]">mkdir</span> -p ~/.openclaw/skills/clawswitch<br/>
          <span className="text-[#39ff14]">cp</span> -r clawswitch-v2.1/* ~/.openclaw/skills/clawswitch/<br/><br/>
          <span className="text-text-muted"># 2. 重启 gateway 使配置生效</span><br/>
          <span className="text-[#39ff14]">openclaw</span> gateway restart<br/><br/>
          <span className="text-text-muted"># 3. 在 TUI 中验证</span><br/>
          <span className="text-white">use gemini</span><br/>
          <span className="text-white">status</span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-accent selection:text-white">
      <div className="scan-line"></div>
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-bg/80 backdrop-blur-md border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3 font-display text-accent text-lg tracking-widest">
          <span className="text-2xl animate-pulse">🦞</span>
          OPENCLAW SWITCH
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs text-text-muted uppercase tracking-wider">
          <a href="#routing" className="hover:text-accent transition-colors">Models</a>
          <a href="#install" className="hover:text-accent transition-colors">Install</a>
          <a href="https://clawhub.ai/SiliconYahaha/claw-switch" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
            <Download className="w-3 h-3" /> ClawHub
          </a>
        </div>
        <a 
          href="https://github.com/SiliconYahaha/openclaw-switch" 
          target="_blank" 
          rel="noreferrer"
          className="font-mono text-xs px-4 py-2 bg-accent text-black font-bold uppercase tracking-wider hover:bg-accent-hover transition-transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-32">
        
        {/* Hero */}
        <section className="flex flex-col items-center text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 font-mono text-[10px] text-accent uppercase tracking-[0.2em] px-3 py-1 border border-accent bg-accent/10"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            OpenClaw Skill v2.1
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full flex justify-center py-4"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white drop-shadow-lg">
              CLAW<br/><span className="text-accent">SWITCH</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl font-light leading-relaxed"
          >
            简单的 OpenClaw 模型切换工具。<strong className="text-text-main font-medium">通过自然语言或命令无缝切换 AI 模型。</strong><br/>
            输入 <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded text-sm">use gemini</code>，自动执行模型切换与 Gateway 重启，立刻就绪。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a 
              href="https://clawhub.ai/SiliconYahaha/claw-switch" 
              target="_blank" 
              rel="noreferrer"
              className="font-mono text-sm px-8 py-4 bg-accent text-black font-bold uppercase tracking-wider hover:bg-accent-hover transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Get on ClawHub
            </a>
            <a 
              href="#install" 
              className="font-mono text-sm px-8 py-4 bg-transparent border border-border text-text-main uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
            >
              View Docs
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-3xl mt-12"
          >
            <TerminalDemo />
          </motion.div>
        </section>

        {/* Routing Logic */}
        <section id="routing" className="space-y-12">
          <div className="space-y-4">
            <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">// Supported Models</p>
            <h2 className="font-display text-3xl md:text-5xl">
              当前支持<br/>
              <span className="text-accent">模型矩阵</span>
            </h2>
            <p className="text-text-muted max-w-2xl">
              基于 OpenClaw 2026.3.2 运行时环境。部分已注册模型需等待 OpenClaw 官方更新支持。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODELS.map((model, i) => (
              <motion.div 
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 bg-surface border ${model.isDefault ? model.border : 'border-border'} hover:border-accent transition-colors group relative overflow-hidden`}
              >
                {model.isDefault && (
                  <div className="absolute top-0 right-0 bg-accent text-black font-mono text-[10px] px-2 py-1 font-bold uppercase">
                    Default
                  </div>
                )}
                <div className="absolute top-4 right-4 font-mono text-[10px]">
                  {model.status}
                </div>
                <div className={`w-10 h-10 rounded-lg ${model.bg} ${model.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {model.icon}
                </div>
                <h3 className="font-mono font-bold text-lg mb-1">{model.name}</h3>
                <p className="font-mono text-[10px] text-accent mb-4">{model.provider} · {model.id}</p>
                <p className="text-sm text-text-muted mb-4 h-10">{model.desc}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-mono text-[10px] text-text-muted uppercase mb-1">Command</p>
                  <p className="text-xs text-text-main font-mono bg-bg px-2 py-1 rounded inline-block">{model.trigger}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Install */}
        <section id="install" className="space-y-12 py-12 border-y border-border">
          <div className="space-y-4">
            <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">// Quick Start</p>
            <h2 className="font-display text-3xl md:text-5xl">
              安装与<br/>
              <span className="text-accent">配置指南</span>
            </h2>
          </div>
          <InstallSteps />
        </section>

        {/* Open Source */}
        <section id="oss" className="relative py-24 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[10vw] text-accent/5 whitespace-nowrap pointer-events-none tracking-widest">
            OPEN SOURCE
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-6 relative z-10">
            完全开源<br/>
            <span className="text-accent">MIT License</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 relative z-10">
            OpenClaw Switch v2.1 现已发布。<br/>
            欢迎在 ClawHub 下载，或在 GitHub 提交 PR。
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <a 
              href="https://clawhub.ai/SiliconYahaha/claw-switch" 
              target="_blank" 
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 bg-accent text-black font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> ClawHub
            </a>
            <a 
              href="https://github.com/SiliconYahaha/openclaw-switch" 
              target="_blank" 
              rel="noreferrer"
              className="font-mono text-sm px-6 py-3 bg-transparent border border-border text-text-main uppercase tracking-wider hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-bg">
        <div className="font-display text-accent text-sm tracking-widest">
          🦞 OPENCLAW SWITCH v2.1
        </div>
        <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
          MIT License · 龙虾开源社区
        </div>
      </footer>
    </div>
  );
}
