import React from 'react';
import Header from '../components/Header';
import { BookOpen, ArrowRight, Database, ShieldCheck, Cpu, Code2, Server, Globe, Layers, Sparkles } from 'lucide-react';

const About = () => {
  const pipelineSteps = [
    { name: 'Dataset', desc: '25,000 Rows, 29 Fields', icon: Database, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
    { name: 'Cleaning', desc: 'Missing check & Date parsing', icon: Layers, color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
    { name: 'EDA', desc: 'Statistical distribution', icon: BookOpen, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
    { name: 'Feature Eng.', desc: 'Leakage exclusion', icon: ShieldCheck, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' },
    { name: 'ML Pipeline', desc: 'Decision Tree (Depth 8)', icon: Cpu, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { name: 'FastAPI', desc: 'Scikit-Learn Joblib Rest API', icon: Server, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { name: 'React Dashboard', desc: 'Tailwind + Recharts UI', icon: Globe, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
  ];

  return (
    <div className="flex-1 bg-slate-950 pb-12">
      <Header 
        title="Project Methodology & Architecture" 
        subtitle="IDRA Data Science & AI Capstone Project #10 Documentation" 
      />

      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* Title Banner */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold">
            Capstone Methodology Report
          </span>
          <h2 className="text-2xl font-extrabold text-slate-100 mt-2">
            Online Shopping Behaviour: Analysing Customer Activity and Predicting Purchase Intent
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed max-w-4xl">
            This end-to-end data science capstone project integrates statistical data analysis, exploratory data visualization, scikit-learn machine learning pipeline engineering, FastAPI backend architecture, and a modern React dashboard to predict customer session purchase intent in real-time.
          </p>
        </div>

        {/* Pipeline Visual Flow */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800">
          <h3 className="font-bold text-slate-100 text-base mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>End-to-End Technical Pipeline Visualization</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-2.5 ${step.color} shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-200 text-xs">{step.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{step.desc}</p>
                  {idx < pipelineSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden lg:block my-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2-Column Methodology Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Column 1: Business Purpose */}
          <div className="glass-card rounded-2xl p-6 border border-cyan-500/30 bg-cyan-950/10 space-y-6">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>🛍️ Real-World E-Commerce Business Value</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-cyan-300 text-sm mb-1">1. Real-Time Customer Targeting</h4>
                <p className="text-slate-300 leading-relaxed">
                  When an e-commerce platform (e.g., Amazon, Flipkart, Nike) detects a live user session with <strong>High Purchase Intent</strong>, the system can automatically offer a limited-time coupon or free shipping to close the sale immediately.
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-cyan-300 text-sm mb-1">2. Cart Abandonment Prevention</h4>
                <p className="text-slate-300 leading-relaxed">
                  If the AI detects <strong>Low Purchase Intent</strong> for a user who has items in their cart, the website can display a live assistant chat or pop up recommended lower-priced alternatives before the user leaves.
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-cyan-300 text-sm mb-1">3. Marketing Spend Efficiency</h4>
                <p className="text-slate-300 leading-relaxed">
                  Helps businesses evaluate which acquisition channels (Paid Search vs. Organic vs. Social) bring genuine buyers versus passive window shoppers, optimizing marketing ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Academic Value */}
          <div className="glass-card rounded-2xl p-6 border border-purple-500/30 bg-purple-950/10 space-y-6">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>🎓 Academic & Capstone Value (IDRA Project #10)</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-purple-300 text-sm mb-1">1. Data Cleaning & EDA</h4>
                <p className="text-slate-300 leading-relaxed">
                  Comprehensive exploratory analysis and statistical profiling across 25,000 real-world customer session records.
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-purple-300 text-sm mb-1">2. Data Leakage Prevention</h4>
                <p className="text-slate-300 leading-relaxed">
                  Strictly removing post-session outcome variables (<code className="text-purple-200">revenue</code>, <code className="text-purple-200">revenue_normalized</code>, <code className="text-purple-200">cart_abandoned</code>) to guarantee zero leakage in production.
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-purple-300 text-sm mb-1">3. ML Pipeline Packaging</h4>
                <p className="text-slate-300 leading-relaxed">
                  Training and serializing a reproducible Scikit-Learn <code className="text-purple-200">DecisionTreeClassifier</code> pipeline into binary <code className="text-purple-200">.joblib</code> format.
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-purple-300 text-sm mb-1">4. Full-Stack Web Deployment</h4>
                <p className="text-slate-300 leading-relaxed">
                  Connecting Python machine learning models to a FastAPI REST server and building a modern React dashboard tailored for IDRA capstone jury presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
