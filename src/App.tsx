import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, Github, ArrowRight, Cpu, Zap, Brain, Moon, FileText, PenTool, Code, Download, Sparkles, MessageSquare, Layers, Compass, Activity, Globe, Shield } from "lucide-react";

const MODELS = [
  {
    id: "gemini-3.1-pro",
    name: "Gemini 3.1 Pro",
    provider: "Google",
    icon: <Brain className="w-5 h-5" />,
    desc: "顶级多模态推理，复杂视觉与长文本分析。",
    trigger: "use gemini pro",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10"
  },
  {
    id: "gemini-3.1-flash-lite",
    name: "Gemini 3.1 Flash Lite",
    provider: "Google",
    icon: <Zap className="w-5 h-5" />,
    desc: "极速响应，日常图片、文件与多模态任务。",
    trigger: "use gemini / 图片模式",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10"
  },
  {
    id: "gpt-5.4-pro",
    name: "GPT-5.4 Pro",
    provider: "OpenAI",
    icon: <Cpu className="w-5 h-5" />,
    desc: "顶级推理模型，复杂架构设计与深度编程。",
    trigger: "use gpt pro / 推理模式",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10"
  },
  {
    id: "gpt-5.4",
    name: "GPT-5.4",
    provider: "OpenAI",
    icon: <Code className="w-5 h-5" />,
    desc: "快速且智能的日常代码辅助与文本生成。",
    trigger: "use gpt / 快速模式",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10"
  },
  {
    id: "claude-opus-4.6",
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    icon: <FileText className="w-5 h-5" />,
    desc: "极致长文本理解，大师级代码编写与重构。",
    trigger: "use opus",
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10"
  },
  {
    id: "claude-sonnet-4.6",
    name: "Claude Sonnet 4.6",
    provider: "Anthropic",
    icon: <Zap className="w-5 h-5" />,
    desc: "闪电般的速度，适合快速问答与信息提取。",
    trigger: "use sonnet",
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10"
  },
  {
    id: "grok-4",
    name: "Grok 4",
    provider: "xAI",
    icon: <Globe className="w-5 h-5" />,
    desc: "实时互联网数据接入，硬核编程与无限制对话。",
    trigger: "use grok4",
    color: "text-zinc-300",
    border: "border-zinc-300/30",
    bg: "bg-zinc-300/10"
  },
  {
    id: "grok-4.1-fast",
    name: "Grok 4.1 Fast",
    provider: "xAI",
    icon: <MessageSquare className="w-5 h-5" />,
    desc: "轻量级实时搜索与快速响应对话。",
    trigger: "use grok",
    color: "text-zinc-300",
    border: "border-zinc-300/30",
    bg: "bg-zinc-300/10"
  },
  {
    id: "deepseek-reasoner",
    name: "DeepSeek V3.2 Reasoner",
    provider: "DeepSeek",
    icon: <Code className="w-5 h-5" />,
    desc: "极致性价比，顶尖的数学与代码推理能力。",
    trigger: "use deepseek / 推理模式",
    color: "text-indigo-400",
    border: "border-indigo-400/30",
    bg: "bg-indigo-400/10"
  },
  {
    id: "qwen-3.5-plus",
    name: "Qwen 3.5 Plus",
    provider: "Alibaba",
    icon: <Layers className="w-5 h-5" />,
    desc: "阿里云最强千亿模型，全能中文与代码大师。",
    trigger: "use qwen",
    color: "text-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/10"
  },
  {
    id: "glm-5",
    name: "GLM-5",
    provider: "Zhipu AI",
    icon: <Compass className="w-5 h-5" />,
    desc: "智谱最新旗舰，卓越的中文理解与长文本处理。",
    trigger: "use glm",
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10"
  },
  {
    id: "kimi-k2.5",
    name: "Kimi K2.5",
    provider: "Moonshot",
    icon: <FileText className="w-5 h-5" />,
    desc: "超长上下文王者，海量文档与财报分析首选。",
    trigger: "use kimi / 文档模式",
    color: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/10"
  },
  {
    id: "minimax-m2.5",
    name: "MiniMax M2.5",
    provider: "MiniMax",
    icon: <PenTool className="w-5 h-5" />,
    desc: "中文创意写作、小红书文案、拟真语音交互。",
    trigger: "use minimax / 写作模式",
    color: "text-pink-400",
    border: "border-pink-400/30",
    bg: "bg-pink-400/10"
  },
  {
    id: "doubao-seed-2.0-pro",
    name: "Doubao Seed 2.0 Pro",
    provider: "ByteDance",
    icon: <MessageSquare className="w-5 h-5" />,
    desc: "字节跳动核心大模型，极速且懂中文互联网。",
    trigger: "use doubao",
    color: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/10"
  },
  {
    id: "step-3.5-flash",
    name: "Step 3.5 Flash",
    provider: "StepFun",
    icon: <Activity className="w-5 h-5" />,
    desc: "阶跃星辰最新模型，强大的多模态与逻辑。",
    trigger: "use stepfun",
    color: "text-teal-400",
    border: "border-teal-400/30",
    bg: "bg-teal-400/10"
  },
  {
    id: "custom-model",
    name: "任意自定义模型",
    provider: "Any Provider",
    icon: <Sparkles className="w-5 h-5" />,
    desc: "支持无缝接入本地大模型或任何兼容 OpenAI 格式的 API。",
    trigger: "use <自定义名称>",
    color: "text-accent",
    border: "border-accent/40",
    bg: "bg-accent/10",
    isDefault: true
  }
];

const TerminalDemo = () => {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;
    let timeout: NodeJS.Timeout;

    const schedule = (cb: () => void, delay: number) => {
      timeout = setTimeout(() => {
        if (isMounted) cb();
      }, delay);
    };

    if (step === 0) {
      setText("");
      schedule(() => setStep(1), 1000);
    } else if (step === 1) {
      const target = "use gemini";
      if (text.length < target.length) {
        schedule(() => setText(target.slice(0, text.length + 1)), 100);
      } else {
        schedule(() => setStep(2), 400);
      }
    } else if (step === 2) {
      schedule(() => setStep(3), 600);
    } else if (step === 3) {
      schedule(() => setStep(4), 600);
    } else if (step === 4) {
      schedule(() => {
        setText("");
        setStep(5);
      }, 2000);
    } else if (step === 5) {
      const target = "use openrouter";
      if (text.length < target.length) {
        schedule(() => setText(target.slice(0, text.length + 1)), 100);
      } else {
        schedule(() => setStep(6), 400);
      }
    } else if (step === 6) {
      schedule(() => setStep(7), 600);
    } else if (step === 7) {
      schedule(() => setStep(8), 600);
    } else if (step === 8) {
      schedule(() => setStep(9), 3000);
    } else if (step === 9) {
      setStep(0);
    }

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [step, text]);

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
      <div className="p-6 space-y-6 text-text-main leading-relaxed min-h-[300px]">
        {(step >= 1) && (
          <div>
            <span className="text-accent">~/</span> <span className="text-white">{step === 1 ? text : "use gemini"}</span>
            {step === 1 && <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle ml-1"></span>}
            {step >= 2 && <div className="text-text-muted mt-2">→ 执行: openclaw models set google/gemini-3-flash-preview</div>}
            {step >= 3 && <div className="text-text-muted">→ 执行: openclaw gateway restart</div>}
            {step >= 4 && <div className="text-[#39ff14] mt-1">→ [Gemini 3 Flash] Ready.</div>}
          </div>
        )}
        
        {(step >= 5) && (
          <div>
            <span className="text-accent">~/</span> <span className="text-white">{step === 5 ? text : "use openrouter"}</span>
            {step === 5 && <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle ml-1"></span>}
            {step >= 6 && <div className="text-text-muted mt-2">→ 执行: openclaw models set openrouter/openrouter/auto</div>}
            {step >= 7 && <div className="text-text-muted">→ 执行: openclaw gateway restart</div>}
            {step >= 8 && <div className="text-[#39ff14] mt-1">→ [OpenRouter Auto] Ready.</div>}
          </div>
        )}

        {(step === 0 || step === 4 || step >= 8) && (
          <div>
            <span className="text-accent">~/</span> <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle ml-1"></span>
          </div>
        )}
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
          <span className="text-[#39ff14]">cp</span> -r clawswitch-v1.0.0/* ~/.openclaw/skills/clawswitch/<br/><br/>
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
            OpenClaw Skill v1.0.0
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
            OpenClaw 的极简模型路由 Skill。<strong className="text-text-main font-medium">根据任务类型在可用模型间自动切换。</strong><br/>
            无需手动配置——只需使用自然语言，自动执行模型切换与 Gateway 重启。
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

        {/* Routing Logic */}
        <section id="routing" className="space-y-12">
          <div className="space-y-4">
            <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">// Supported Models</p>
            <h2 className="font-display text-3xl md:text-5xl">
              当前支持<br/>
              <span className="text-accent">模型矩阵</span>
            </h2>
            <p className="text-text-muted max-w-2xl">
              基于 OpenClaw 运行时环境，已完美适配以下主流模型，并支持无缝接入任意自定义模型。
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

        {/* Open Source */}
        <section id="oss" className="relative py-24 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[10vw] text-accent/5 whitespace-nowrap pointer-events-none tracking-widest">
            OPEN SOURCE
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-6 relative z-10">
            完全开源<br/>
            <span className="text-accent">MIT-0 License</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 relative z-10">
            OpenClaw Switch v1.0.0 现已发布。<br/>
            Free to use, modify, and redistribute. No attribution required.
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
          🦞 OPENCLAW SWITCH v1.0.0
        </div>
        <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
          MIT-0 License · 龙虾开源社区
        </div>
      </footer>
    </div>
  );
}
